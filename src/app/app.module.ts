import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SeedShelfComponent } from './seed-shelf/seed-shelf.component';

import { SeedSearchComponent } from './seed-search/seed-search.component';

import { SeedDetailViewerComponent } from './seed-detail-viewer/seed-detail-viewer.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AddSeedModalComponent } from './add-seed-modal/add-seed-modal.component';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes = [
  { path: '', component: SeedSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SeedSearchComponent },
  { path: 'shelf', component: SeedShelfComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SeedShelfComponent,
    SeedSearchComponent,
    SeedDetailViewerComponent,
    NavbarComponent,
    AddSeedModalComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
