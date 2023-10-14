import { Component, OnInit, Input} from '@angular/core';
import { Seed } from '../shared/models/seed.model';
import { SeedService } from '../shared/services/seed.service';

@Component({
  selector: 'app-seed-shelf',
  templateUrl: './seed-shelf.component.html',
  styleUrls: ['./seed-shelf.component.css']
})
export class SeedShelfComponent {
  specificSeed:Seed;
  seedCollection:Seed[] = this.seedService.getSeedShelf();

  constructor(private seedService:SeedService) {}

  ngOnInit() {
    this.seedService.seedShelfChanged.subscribe((seeds: Seed[]) => this.seedCollection = seeds)
    this.seedService.seedSelected.subscribe((seedDisplayed: Seed) => this.specificSeed = seedDisplayed);
  }

  onRemoveSeed(idx){
    this.seedService.removeSeedFromShelf(idx);
  }

  onGetSpecificSeed(i) {
    this.specificSeed = this.seedService.getSpecificSeed(i);
  }

}
