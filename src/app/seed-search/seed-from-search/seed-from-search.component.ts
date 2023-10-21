import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-seed-from-search',
  templateUrl: './seed-from-search.component.html',
  styleUrls: ['./seed-from-search.component.css']
})
export class SeedFromSearchComponent implements OnInit{
    id:number;
    specificSeed: Seed;

    constructor(
      private route: ActivatedRoute,
      private seedService: SeedService,
      private router:Router
    ) {}

    ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id');
            this.specificSeed = this.seedService.getSpecificSeed(this.id);
    })
    }

}

//This needs to somehow populate from the actual berry ID rather than our stored seed list. Probably involves calling from the API service to be really robust.  Probably should outsource the method from seedsearch into seed library and have that handle all this business.  seed-search.ts is looking cluttered.
