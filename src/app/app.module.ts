import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SeedShelfComponent } from './seed-shelf/seed-shelf.component';

import { SeedSearchComponent } from './seed-search/seed-search.component';

import { SeedDetailViewerComponent } from './seed-detail-viewer/seed-detail-viewer.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ShelfHomeComponent } from './seed-shelf/shelf-home/shelf-home.component';
import { SeedOnShelfComponent } from './seed-shelf/seed-on-shelf/seed-on-shelf.component';
import { SeedFromSearchComponent } from './seed-search/seed-from-search/seed-from-search.component';
import { EditSeedOnShelfComponent } from './seed-shelf/seed-on-shelf/edit-seed-on-shelf/edit-seed-on-shelf.component';
import { AddSeedRecordComponent } from './add-seed-record/add-seed-record.component';


@NgModule({
  declarations: [
    AppComponent,
    SeedShelfComponent,
    SeedSearchComponent,
    SeedDetailViewerComponent,
    NavbarComponent,
    LoginComponent,
    ShelfHomeComponent,
    SeedOnShelfComponent,
    SeedFromSearchComponent,
    EditSeedOnShelfComponent,
    AddSeedRecordComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
