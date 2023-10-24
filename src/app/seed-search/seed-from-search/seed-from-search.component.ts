import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-seed-from-search',
  templateUrl: './seed-from-search.component.html',
  styleUrls: ['./seed-from-search.component.css']
})
export class SeedFromSearchComponent implements OnInit {
  id: number;
  specificSeed: Seed;

  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.seedService.fetchSeed(this.id).subscribe((seed: Seed) => {
        this.specificSeed = seed;
      });
    });
  }
}
