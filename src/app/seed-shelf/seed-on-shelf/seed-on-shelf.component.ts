import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-seed-on-shelf',
  templateUrl: './seed-on-shelf.component.html',
  styleUrls: ['./seed-on-shelf.component.css']
})
export class SeedOnShelfComponent implements OnInit {
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

    onRemoveSeed(id) {
    this.seedService.removeSeedFromShelf(id);
    this.specificSeed = null;
    this.router.navigate(['/shelf']);
    }

}





