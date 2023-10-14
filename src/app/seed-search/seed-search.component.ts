import { Component, Injectable, OnInit, EventEmitter } from '@angular/core';
import { SeedApiService } from '../shared/services/seed-api.service';
import { Seed } from '../shared/models/seed.model';
import { SeedService } from '../shared/services/seed.service';

@Component({
  selector: 'app-seed-search',
  templateUrl: './seed-search.component.html',
  styleUrls: ['./seed-search.component.css']
})

@Injectable()
export class SeedSearchComponent implements OnInit {
  seedResults: Seed[] = [];
  searchResultsChanged = new EventEmitter<Seed[]>();

  id: number;
  berryName: string;
  naturalGiftPower: string;
  imgURL: string;

  constructor(private seedApiService: SeedApiService,
    private seedService: SeedService) {}

  specificSeed:Seed = this.seedService.returnDefault();

  ngOnInit() {
    this.fetchSeed(this.generateBerryID());
    this.fetchSeed(this.generateBerryID());
    this.fetchSeed(this.generateBerryID());
  }

  generateBerryID(){
      return Math.ceil(Math.random()*43);
      }

  fetchSeed(berryID){

    this.seedApiService.getSeeds(berryID).subscribe((data: any) => {
    // Extract "name" and "natural_gift_power"
    this.id = data.id;
    this.berryName = data.name;
    this.naturalGiftPower = data.natural_gift_type.name;
    let fixedID:string = (data.id>9) ? `${data.id}` : `0${data.id}`;
    this.imgURL = `https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_${fixedID}_4.a.png`

    const seed = new Seed(this.berryName, this.naturalGiftPower, true, 'High Mowing Seeds', this.imgURL, this.id)

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
    this.fetchSeed(this.generateBerryID());
    return this.seedService.addSeedToShelf(seed);


  }

  onDisplayFromSearch(i){
    this.seedService.displayFromSearch(this.seedResults, i)
  }

// berryToSeed(){
  //   new Seed(
  //   this.berryName,
  //   this.naturalGiftPower,
  //   true,
  //   "Johnny's Selected Seeds",
  //   "https://www.pokencyclopedia.info/sprites/misc/berry-trees_3/tree_3_01_4.a.png")
  //   }
}

// export class SeedSearchComponent implements OnInit {
//   jsonData: string; // Store the JSON response as a string

//   constructor(private seedApiService: SeedApiService) {}

//   ngOnInit() {
//     this.seedApiService.getSeeds().subscribe((data: any) => {
//       // Convert the JSON response to a string and store it
//       this.jsonData = JSON.stringify(data, null, 2); // Use 'null, 2' for pretty-printing
//     });
//   }
// }
