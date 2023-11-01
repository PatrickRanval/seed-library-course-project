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
    'Example Seed',
    'Piccolino',
    true,
    "Johnny's Selected Seeds",
    'https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_17_4.a.png',
    66,
    200,
    '3/12/1989'
    )

    constructor(private seedApiService: SeedApiService) { }

    fetchSeed(berryID: number): Observable<Seed> {
    return this.seedApiService.getSeeds(berryID).pipe(
      map((data: any) => {
        let id = data.id;
        let berryName = data.name;
        let naturalGiftPower = data.natural_gift_type.name;
        let fixedID: string = (data.id > 9) ? `${data.id}` : `0${data.id}`;
        let imgURL = `https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_${fixedID}_4.a.png`;
        return new Seed(id, berryName, naturalGiftPower, true, 'High Mowing Seeds', imgURL, id);
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
        this.seedSelected.next(this.defaultSeed);
      }
    }

    getSeedShelf() {
    return [...this.mySeeds];
  }

  getSpecificSeed(idx: number) {        //this method sucks i think  //tryna use
    return this.mySeeds.slice()[idx]
  }

  setSelectedSeedById(id){
    let selectedSeed = this.mySeeds.slice()[id];
    this.seedSelected.next(selectedSeed);
  }

  setSelectedSeed(seed: Seed) {
    this.seedSelected.next(seed);
  }



  displayFromSearch(Arr:Seed[], i:number) {     //this method sucks too
    let selectedSeed = Arr[i];
    this.seedSelected.next(selectedSeed);
    return selectedSeed;
  }

}
