import { Injectable, EventEmitter } from '@angular/core';
import { Seed } from '../models/seed.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  seedSelected = new Subject<Seed>();
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

    returnDefault() { //Debugging method
      return this.defaultSeed;
    }

    addSeedToShelf (seed:Seed) {
      this.mySeeds.push(seed);
      this.seedShelf.next([...this.mySeeds]);

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

  getSpecificSeed(idx: number) {
    return this.mySeeds.slice()[idx]
  }

  setSelectedSeed(seed: Seed) {
    this.seedSelected.next(seed);
  }



  displayFromSearch(Arr:Seed[], i:number) {
    let selectedSeed = Arr[i];
    this.seedSelected.next(selectedSeed);
    return selectedSeed;
  }

}
