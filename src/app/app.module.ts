import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SeedShelfComponent } from './seed-shelf/seed-shelf.component';

import { SeedSearchComponent } from './seed-search/seed-search.component';

import { SeedDetailViewerComponent } from './seed-detail-viewer/seed-detail-viewer.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AddSeedModalComponent } from './add-seed-modal/add-seed-modal.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ShelfHomeComponent } from './seed-shelf/shelf-home/shelf-home.component';
import { SeedOnShelfComponent } from './seed-shelf/seed-on-shelf/seed-on-shelf.component';
import { SeedFromSearchComponent } from './seed-shelf/seed-from-search/seed-from-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SeedShelfComponent,
    SeedSearchComponent,
    SeedDetailViewerComponent,
    NavbarComponent,
    AddSeedModalComponent,
    LoginComponent,
    ShelfHomeComponent,
    SeedOnShelfComponent,
    SeedFromSearchComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
