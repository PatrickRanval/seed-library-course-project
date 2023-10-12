import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SeedShelfComponent } from './seed-shelf/seed-shelf.component';

import { SeedSearchComponent } from './seed-search/seed-search.component';

import { SeedDetailViewerComponent } from './seed-detail-viewer/seed-detail-viewer.component';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SeedShelfComponent,
    SeedSearchComponent,
    SeedDetailViewerComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
