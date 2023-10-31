import { Component, OnInit, OnDestroy } from '@angular/core';
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

export class EditSeedOnShelfComponent implements OnInit {
    id:number;
    specificSeed: Seed;
    specificSeedString: string;
    editForm:FormGroup;
    myParamMap:Subscription;

    constructor(
      private route: ActivatedRoute,
      private seedService: SeedService,
      private router:Router
    ) {}

    ngOnInit() {
      this.myParamMap = this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id');
        this.specificSeed = this.seedService.getSpecificSeed(this.id);
    })
    this.buildForm();
  }

    ngOnDestroy(){
      if (this.myParamMap) {
        this.myParamMap.unsubscribe();
      }
    }

  buildForm() {
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
        })
      // You can now use 'editedSeed' for further processing, e.g., sending it to a server or updating your data
      console.log('Edited Seed:', editedSeed);
    } else {
      // Handle form validation errors or display a message to the user.
    }
}


}

