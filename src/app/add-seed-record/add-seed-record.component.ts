import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { Story } from 'src/app/shared/models/story.model';
import { SeedService } from 'src/app/shared/services/seed.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-seed-record',
  templateUrl: './add-seed-record.component.html',
  styleUrls: ['./add-seed-record.component.css']
})

export class AddSeedRecordComponent implements OnInit {
  submitSeedForm: FormGroup;
  addStory = false;

  constructor(
    private seedService: SeedService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit() {
      this.buildForm();
    }

  buildForm() {
    this.submitSeedForm = this.formBuilder.group({
      genus: ['', Validators.required],
      species: ['', Validators.required],
      variety: ['', Validators.required],
      commonBroad: ['', Validators.required],
      imgURL: ['', Validators.required],
      subspecies: this.formBuilder.control(''),
      hybridStatus: this.formBuilder.control(''),
      subvariety: this.formBuilder.control(''),
      commonNarrow: this.formBuilder.control(''),
      instance: this.formBuilder.control(''),
      story: this.formBuilder.control(''),
    });
  }

onSubmit() {
  if (this.submitSeedForm.valid) {
    let newStory:Story = new Story(
      [this.submitSeedForm.value.storyTags],
      this.submitSeedForm.value.storyText
    )
    let valueUid = this.seedService.findHighestUID() + 1;
    let submittedSeed:Seed = new Seed(
      valueUid, //logic for adding new UID
      this.submitSeedForm.value.genus,
      this.submitSeedForm.value.species,
      this.submitSeedForm.value.variety,
      this.submitSeedForm.value.commonBroad.split(', '),
      this.submitSeedForm.value.imgURL,
      this.submitSeedForm.value.subspecies || null,
      this.submitSeedForm.value.hybridStatus || null,
      this.submitSeedForm.value.subvariety || null,
      this.submitSeedForm.value.commonNarrow ? this.submitSeedForm.value.commonNarrow.split(', ') : null,
      this.submitSeedForm.value.instance || null,
      [newStory] || null );

    // Your existing logic for editing and navigation
    this.seedService.addSeedToShelf(submittedSeed);
    console.log(submittedSeed);
    this.seedService.setSelectedSeedById(valueUid); // emits the updated seed
  } else {
    // Handle form validation errors
    return;
  }
}
}
