import { Injectable, EventEmitter } from '@angular/core';
import { Seed } from '../models/seed.model';

@Injectable({
  providedIn: 'root'
})
export class SeedService {
  seedSelected = new EventEmitter<Seed>();
  seedShelfChanged = new EventEmitter<Seed[]>();

  private mySeeds:Seed[] = [
    new Seed(
      'Tomato',
      'Sakura F1',
      true,
      "Johnny's Selected Seeds",
      'https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_17_4.a.png',
      66,
      200,
      '3/12/1989'
    )
  ]

    public defaultSeed:Seed = new Seed(
      'Example Seed',
      'Piccolino',
      true,
      "Johnny's Selected Seeds",
      'https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_18_4.a.png',
      66,
      200,
      '3/12/1989'
    )

    returnDefault() {
      return this.defaultSeed;
    }


  getSeedShelf() {
    return this.mySeeds.slice()
  }

  getSpecificSeed(id: number): Seed {
    const selectedSeed = this.mySeeds[id];
    this.seedSelected.emit(selectedSeed);
    return selectedSeed;
  }

  addSeedToShelf (seed:Seed) {
    this.mySeeds.push(seed);
  }

  removeSeedFromShelf (idx:number) {
    if (idx !== -1) {
      this.mySeeds.splice(idx, 1)
      this.seedShelfChanged.emit(this.mySeeds.slice())
    }
  }

  displayFromSearch(Arr:Seed[], i:number) {
    let selectedSeed = Arr[i];
    this.seedSelected.emit(selectedSeed);
    return selectedSeed;
  }

}
