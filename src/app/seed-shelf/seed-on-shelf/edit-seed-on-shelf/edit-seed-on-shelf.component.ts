import { Component, AfterViewInit, OnInit, OnChanges, OnDestroy, ChangeDetectorRef  } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Form, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-seed-on-shelf',
  templateUrl: './edit-seed-on-shelf.component.html',
  styleUrls: ['./edit-seed-on-shelf.component.css']
})

export class EditSeedOnShelfComponent implements OnInit, OnDestroy {
  id:number;
  specificSeed: Seed;
  seedSubscription: Subscription;
  specificSeedString: string;
  editForm: FormGroup;
  myParamMap: Subscription;

  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      });
    this.seedService.setSelectedSeedById(this.id);
    console.log(`From OnInit:` + this.id)
  }

    debugId() {
    this.id = +this.route.parent.snapshot.paramMap.get('id');
    console.log(this.route);

    console.log(`From DebugMethod:` + this.id)
    }
  // ngOnChange() {
  // this.id = +this.route.snapshot.paramMap.get('id');
  //   this.seedService.setSelectedSeedById(this.id);
  //   console.log(`From Changes:` + this.id)
  //   this.seedSubscription = this.seedService.seedSelected.subscribe((selectedSeed: Seed) => {
  //     this.specificSeed = selectedSeed;
  //   });
  // }

// ngOnInit() {
//   this.id = +this.route.snapshot.paramMap.get('id');
//     this.seedService.setSelectedSeedById(this.id);

//   console.log(this.id);  //This is so annoying. This should not be 0, but it is logging to zero. Maybe relating to conflicting subscriptions?
//   this.seedSubscription = this.seedService.seedSelected.subscribe((selectedSeed: Seed) => {
//     this.specificSeed = selectedSeed;
//     this.buildForm();
//   });
// }

//   ngAfterViewInit() {
//   this.myParamMap = this.route.paramMap.subscribe((params: ParamMap) => {
//     this.id = +params.get('id');
//   });
//   this.seedService.setSelectedSeedById(this.id);
//   console.log(this.id);
//   this.seedSubscription = this.seedService.seedSelected.subscribe((selectedSeed: Seed) => {
//     this.specificSeed = selectedSeed;
//     this.buildForm();
//   });
// }

  ngOnDestroy() {
    // this.myParamMap.unsubscribe();
    // this.seedSubscription.unsubscribe();
  }



buildForm() {
  if (this.specificSeed) {
    this.editForm = new FormGroup({
      'uid': new FormControl(this.specificSeed.uid),
      'type': new FormControl(this.specificSeed.type),
      'variety': new FormControl(this.specificSeed.variety),
      'isOrganic': new FormControl(this.specificSeed.isOrganic),
      'origin': new FormControl(this.specificSeed.origin),
      'imgURL': new FormControl(this.specificSeed.imgURL),
      'debugField': new FormControl(this.specificSeed.debugField),
      'amount': new FormControl(this.specificSeed.amount),
      'dateAdded': new FormControl(this.specificSeed.dateAdded),
    });
  }
}
onSubmit() {
  if (this.editForm.valid) {
    let editedSeed: Seed = new Seed(
        this.editForm.value.uid,
        this.editForm.value.type,
        this.editForm.value.variety,
        this.editForm.value.isOrganic,
        this.editForm.value.origin,
        this.editForm.value.imgURL,
        this.editForm.value.debugField,
        this.editForm.value.amount,
        this.editForm.value.dateAdded
      );
    this.seedService.editSeedOnShelf(editedSeed, this.id);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.specificSeed = this.seedService.getSpecificSeed(this.id);
      this.cd.detectChanges(); // Manually trigger change detection
    });
    console.log('Edited Seed:', editedSeed);
  } else {
    // Handle form validation errors
  }
}
}

