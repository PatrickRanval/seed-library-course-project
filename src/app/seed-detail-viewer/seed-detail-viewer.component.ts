import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeedService } from '../shared/services/seed.service';
import { Seed } from '../shared/models/seed.model';

@Component({
  selector: 'app-seed-detail-viewer',
  templateUrl: './seed-detail-viewer.component.html',
  styleUrls: ['./seed-detail-viewer.component.css']
})
export class SeedDetailViewerComponent implements OnInit {
  seed: Seed;

  constructor(private route: ActivatedRoute, private seedService: SeedService) {}

  ngOnInit() {
    const index = +this.route.snapshot.paramMap.get('id');  //Maybe problems here??
    this.seed = this.seedService.getSpecificSeed(index);
  }
}

// import { Component } from '@angular/core';
// import { SeedService } from '../shared/services/seed.service';
// import { Seed } from '../shared/models/seed.model';
// import { Router, ActivatedRoute, Params } from '@angular/router';


// @Component({
//   selector: 'app-seed-detail-viewer',
//   templateUrl: './seed-detail-viewer.component.html',
//   styleUrls: ['./seed-detail-viewer.component.css']
// })
// export class SeedDetailViewerComponent {

// constructor(private seedService:SeedService,
//             private route: ActivatedRoute) {}

// displayedSeed:Seed;
// idx: number;
// // = this.seedService.returnDefault();

//   ngOnInit(): void {
//     this.route.params.subscribe((params: Params) => {
//       this.idx = +params['id'];
//       this.displayedSeed = this.seedService.getSpecificSeed(this.idx)
//     });
//   // this.seedService.seedSelected.subscribe((seed:Seed) => this.displayedSeed = seed);
// }

// }
