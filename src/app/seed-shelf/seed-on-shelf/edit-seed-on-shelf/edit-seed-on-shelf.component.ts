import { Component, OnInit, OnDestroy } from '@angular/core';
import { Seed } from 'src/app/shared/models/seed.model';
import { Story } from 'src/app/shared/models/story.model';
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
  additionalTaxonomy = false;
  addStory = false;

  constructor(
    private route: ActivatedRoute,
    private seedService: SeedService,
    private router: Router,
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


  buildForm() {
    if (this.specificSeed) {
      this.editForm = new FormGroup({
        'genus': new FormControl(this.specificSeed.genus),
        'species': new FormControl(this.specificSeed.species),
        'variety': new FormControl(this.specificSeed.variety),
        'commonBroad': new FormControl(this.specificSeed.commonBroad.join(', ')),
        'imgURL': new FormControl(this.specificSeed.imgURL),
        'subspecies': new FormControl(this.specificSeed.subspecies),
        'hybridStatus': new FormControl(this.specificSeed.hybridStatus),
        'subvariety': new FormControl(this.specificSeed.subvariety),
        'commonNarrow': new FormControl(
          this.specificSeed.commonNarrow ? this.specificSeed.commonNarrow.join(', ') : null
        ),
        'instance': new FormControl(this.specificSeed.instance),
        'story': new FormControl(this.specificSeed.story)
      });
    }
  }

  toggleAdditionalTaxonomy() {
    this.additionalTaxonomy = !this.additionalTaxonomy;
  }

  toggleStory() {
    this.addStory = !this.addStory;
  }

onSubmit() {
  if (this.editForm.valid) {
    let newStory:Story = new Story(
      [this.editForm.value.storyTags],
      this.editForm.value.storyText
    )
    let editedSeed:Seed = new Seed(
      this.specificSeed.uid,
      this.editForm.value.genus,
      this.editForm.value.species,
      this.editForm.value.variety,
      this.editForm.value.commonBroad.split(', '),
      this.editForm.value.imgURL,
      this.editForm.value.subspecies || null,
      this.editForm.value.hybridStatus || null,
      this.editForm.value.subvariety || null,
      this.editForm.value.commonNarrow ? this.editForm.value.commonNarrow.split(', ') : null,
      this.editForm.value.instance || null,
      [newStory] || null );

    // Your existing logic for editing and navigation
    this.seedService.editSeedOnShelf(editedSeed, this.id);
    this.seedService.setSelectedSeedById(this.id); // emits the updated seed
    this.router.navigate(['/shelf', this.id]);
  } else {
    // Handle form validation errors
    return;
  }
}

  ngOnDestroy() {
    this.seedSubscription.unsubscribe();
  }
}
