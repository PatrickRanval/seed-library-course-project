import { Injectable } from '@angular/core';
import { Seed } from '../models/seed.model';
import { Subject, Observable, map, BehaviorSubject } from 'rxjs';
import { SeedApiService } from './seed-api.service';

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  seedSelected = new BehaviorSubject<Seed>(null);
  seedShelf = new Subject<Seed[]>();

  private mySeeds:Seed[] = [];

  public defaultSeed:Seed = new Seed(
    0,
    'Cucurbita',
    'moschata',
    'Upper Ground Sweet Potato',
    ['Winter Squash'],
    'https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_17_4.a.png'
    )

    constructor(private seedApiService: SeedApiService) { }

    fetchSeed(berryID: number): Observable<Seed> {
    return this.seedApiService.getSeeds(berryID).pipe(
      map((data: any) => {
        let refinedID;
        if (data.id <= 9) { refinedID = '0' + data.id.toString() } else {
          refinedID = data.id.toString();
        }
        return new Seed(
          data.id,
          data.name,
          data.natural_gift_type.name,
          data.name,
          [data.name],
          `https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_${refinedID}_4.a.png`)
      })
    );
  }


    returnDefault() { //Debugging method
      return this.defaultSeed;
    }

    addSeedToShelf (seed:Seed) {
      this.mySeeds.push(seed);
      this.seedShelf.next([...this.mySeeds]);
      console.log(this.mySeeds);
    }

    editSeedOnShelf(editedSeed:Seed, id) {
      this.mySeeds.splice(id, 1, editedSeed);
      this.seedShelf.next([...this.mySeeds]);
      this.seedSelected.next(editedSeed);
    }

    removeSeedFromShelf (idx:number) {
      if (idx !== -1) {
        this.mySeeds.splice(idx, 1)
        this.seedShelf.next([...this.mySeeds]);
        this.setSelectedSeedById(idx);
        // this.seedSelected.next(this.defaultSeed);
      }
    }

    getSeedShelf() {
    return [...this.mySeeds];
  }

  setSelectedSeedById(id){                          //this method is used a lot
    let selectedSeed = this.mySeeds.slice()[id];
    this.seedSelected.next(selectedSeed);
  }

  setSelectedSeed(seed: Seed) {
    this.seedSelected.next(seed);
  }


   //43 is circumventing the max value of our PokeAPI call, we should edit this method later to look at our real Seed API and set values accordingly.

    findHighestUID(): number {
    if (this.mySeeds.length === 0) {
      return 43;
    }
    return this.mySeeds.reduce((maxUID, seed) => (seed.uid > maxUID ? seed.uid : maxUID), 43);
  }

}
