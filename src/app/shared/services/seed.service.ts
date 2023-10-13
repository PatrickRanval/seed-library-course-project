import { Injectable, EventEmitter } from '@angular/core';
import { Seed } from '../models/seed.model';

@Injectable({
  providedIn: 'root'
})
export class SeedService {

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

  seedSelected = new EventEmitter<Seed>();
  seedShelfChanged = new EventEmitter<Seed[]>();

  getSeedShelf() {
    return this.mySeeds.slice()
  }

  getSpecificSeed(id:number) {
    return this.mySeeds[id];
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

}
