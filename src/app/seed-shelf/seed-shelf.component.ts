import { Component } from '@angular/core';
import { Seed } from '../shared/models/seed.model';
import { SeedService } from '../shared/services/seed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seed-shelf',
  templateUrl: './seed-shelf.component.html',
  styleUrls: ['./seed-shelf.component.css']
})
export class SeedShelfComponent {
  seedCollection: Seed[];
  seedSelected: Seed;
  private seedShelfSubscription: Subscription;
  private seedSelectedSubscription: Subscription;

  constructor(private seedService: SeedService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.seedCollection = this.seedService.getSeedShelf();
      this.seedShelfSubscription = this.seedService.seedShelf.subscribe((collection) => {
      this.seedCollection = collection;
    });

    this.seedSelectedSubscription = this.seedService.seedSelected.subscribe((seed) => {
      this.seedSelected = seed;
    });
  }

  ngOnDestroy() {

    this.seedShelfSubscription.unsubscribe();
    this.seedSelectedSubscription.unsubscribe();
  }

  onRemoveSeed(idx) {
    this.seedService.removeSeedFromShelf(idx);
  }

  onGetSpecificSeed(i) {
    this.seedService.setSelectedSeedById(i);
    this.router.navigate([i], { relativeTo: this.route });

    // this.seedService.getSpecificSeed(i);
    // this.seedService.displayFromSearch(this.seedCollection, i);  //I think the problem is here.
  }
}
