import { Component, OnInit, OnDestroy } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-seed-on-shelf',
  templateUrl: './edit-seed-on-shelf.component.html',
  styleUrls: ['./edit-seed-on-shelf.component.css']
})

export class EditSeedOnShelfComponent implements OnInit, OnDestroy {
  id: number;
  specificSeed: Seed;
  seedSubscription: Subscription;
  editForm: FormGroup;
  myParamMap: Subscription;

  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });

    this.seedSubscription = this.seedService.seedSelected.subscribe((selectedSeed: Seed) => {
      this.specificSeed = selectedSeed;
      this.buildForm();
    });

    this.seedService.setSelectedSeedById(this.id);
  }

  ngOnDestroy() {
    this.seedSubscription.unsubscribe();
  }

  buildForm() {
    if (this.specificSeed) {
      this.editForm = new FormGroup({
        'genus': new FormControl(this.specificSeed.genus),
        'species': new FormControl(this.specificSeed.species),
        'variety': new FormControl(this.specificSeed.variety),
        'commonBroad': new FormControl(this.specificSeed.commonBroad.join(', ')), // Assuming commonBroad is an array
        'imgURL': new FormControl(this.specificSeed.imgURL),
      });
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      let editedSeed: Seed = new Seed(
        this.specificSeed.uid,
        this.editForm.value.genus,
        this.editForm.value.species,
        this.editForm.value.variety,
        this.editForm.value.commonBroad.split(', '), // Convert back to an array
        this.editForm.value.imgURL
      );
      this.seedService.editSeedOnShelf(editedSeed, this.id);
      this.seedService.setSelectedSeedById(this.id); // emits the updated seed
      this.router.navigate(['/shelf', this.id]);
    } else {
      // Handle form validation errors
      return;
    }
  }
}
