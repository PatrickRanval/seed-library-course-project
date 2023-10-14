import { Component, Input } from '@angular/core';
import { SeedService } from '../shared/services/seed.service';
import { Seed } from '../shared/models/seed.model';


@Component({
  selector: 'app-seed-detail-viewer',
  templateUrl: './seed-detail-viewer.component.html',
  styleUrls: ['./seed-detail-viewer.component.css']
})
export class SeedDetailViewerComponent {

constructor(private seedService:SeedService) {}

displayedSeed:Seed = this.seedService.returnDefault();

  ngOnInit(){
  this.seedService.seedSelected.subscribe((seed:Seed) => this.displayedSeed = seed);

}

}
