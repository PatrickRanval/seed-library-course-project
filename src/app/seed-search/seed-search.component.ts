import { Component, OnInit } from '@angular/core';
import { SeedApiService } from '../shared/services/seed-api.service';

@Component({
  selector: 'app-seed-search',
  templateUrl: './seed-search.component.html',
  styleUrls: ['./seed-search.component.css']
})

export class SeedSearchComponent implements OnInit {
  displayedSeeds: { name: string; url: string }[] = [];
  constructor(private seedApiService:SeedApiService) {}

  ngOnInit() {
    this.seedApiService.getSeeds().subscribe((data: any) => {
      // Extract selected fields (name and url) from the results array
      this.displayedSeeds = data.results.map((berry: { name: string; url: string }) => ({
        name: berry.name,
        url: berry.url,
      }));
  })
}
}
