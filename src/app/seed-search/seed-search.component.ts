import { Component, Injectable, OnInit, EventEmitter } from '@angular/core';
import { SeedApiService } from '../shared/services/seed-api.service';
import { Seed } from '../shared/models/seed.model';
import { SeedService } from '../shared/services/seed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, pipe } from 'rxjs';


@Component({
  selector: 'app-seed-search',
  templateUrl: './seed-search.component.html',
  styleUrls: ['./seed-search.component.css']
})

@Injectable()
export class SeedSearchComponent implements OnInit {
  seedFromSearchDisplay:Seed;
  seedResults: Seed[] = [];
  searchResultsChanged = new EventEmitter<Seed[]>();

  constructor(private seedService: SeedService, private router:Router, private route:ActivatedRoute) {}

  specificSeed:Seed = this.seedService.returnDefault();

  ngOnInit() {
    this.populateSeed();
    this.populateSeed();
    this.populateSeed();
  }

  generateBerryID(){
      return Math.ceil(Math.random()*43);
      }

  populateSeed() {
  this.seedService.fetchSeed(this.generateBerryID()).subscribe((seed: Seed) => {
    this.seedResults.push(seed);
  });
}

  removeSeed(idx:number) {
    if (idx !== -1) {
      this.seedResults.splice(idx, 1)
      this.searchResultsChanged.emit(this.seedResults.slice())
    }
  }

  onAddSeed(seed: Seed){
    const idx = this.seedResults.findIndex((s) => s.type === seed.type);
    this.removeSeed(idx);
    this.populateSeed();
    return this.seedService.addSeedToShelf(seed);
  }

  onDisplayFromSearch(searchId){      //we touched this method trying to fix shelf
    this.router.navigate([searchId], { relativeTo: this.route });
    };
}


    // fetchSeed(berryID: number): Observable<Seed> {
    //   return this.seedApiService.getSeeds(berryID).pipe(
    //     map((data: any) => {
    //       this.id = data.id;
    //       this.berryName = data.name;
    //       this.naturalGiftPower = data.natural_gift_type.name;
    //       let fixedID: string = (data.id > 9) ? `${data.id}` : `0${data.id}`;
    //       this.imgURL = `https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_${fixedID}_4.a.png`;
    //       return new Seed(this.id, this.berryName, this.naturalGiftPower, true, 'High Mowing Seeds', this.imgURL, this.id);
    //     })
    //   );
    // }
