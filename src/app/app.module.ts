import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeedShelfComponent } from './seed-shelf/seed-shelf.component';
import { SeedLibraryComponent } from './seed-library/seed-library.component';
import { SeedListComponent } from './seed-shelf/seed-list/seed-list.component';
import { SeedDetailsFrontComponent } from './seed-shelf/seed-details-front/seed-details-front.component';
import { SeedDetailsBackComponent } from './seed-shelf/seed-details-back/seed-details-back.component';
import { SeedResultsComponent } from './seed-library/seed-results/seed-results.component';
import { SeedSearchComponent } from './seed-library/seed-search/seed-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SeedsComponent } from './shared/seeds/seeds.component';
import { SeedDetailViewerComponent } from './shared/seed-detail-viewer/seed-detail-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SeedShelfComponent,
    SeedLibraryComponent,
    SeedListComponent,
    SeedDetailsFrontComponent,
    SeedDetailsBackComponent,
    SeedResultsComponent,
    SeedSearchComponent,
    NavigationComponent,
    SeedsComponent,
    SeedDetailViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
