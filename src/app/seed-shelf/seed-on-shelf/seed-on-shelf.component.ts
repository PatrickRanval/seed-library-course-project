import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-seed-on-shelf',
  templateUrl: './seed-on-shelf.component.html',
  styleUrls: ['./seed-on-shelf.component.css']
})
export class SeedOnShelfComponent implements OnInit, OnDestroy {
  id: number;
  specificSeed: Seed; // Initialize with a default value or null
  private seedSelectedSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
    private router: Router,
    private cd:  ChangeDetectorRef
  ) {}


  ngOnInit() {
    this.seedSelectedSubscription = this.seedService.seedSelected.subscribe((seed) => {
      this.specificSeed = seed;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      console.log(`In Seed-On-Shelf-Component ` + this.id)
    });
    this.seedService.setSelectedSeedById(this.id)
  }

  ngOnDestroy() {
    if (this.seedSelectedSubscription) {
      this.seedSelectedSubscription.unsubscribe();
    }
  }

  onEditSeed() {
    this.seedSelectedSubscription.unsubscribe();
    this.seedService.setSelectedSeedById(this.id);
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['/shelf', this.id, 'edit']);
    // this.cd.detectChanges();
    // this.seedSelectedSubscription = this.seedService.seedSelected.subscribe((seed) => {
    //   this.specificSeed = seed;
    // });
  }

    onRemoveSeed(id) {
    this.seedService.removeSeedFromShelf(id);
    this.specificSeed = null;
    this.router.navigate(['/shelf']);
    }

}





