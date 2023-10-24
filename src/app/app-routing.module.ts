import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SeedSearchComponent } from "./seed-search/seed-search.component";
import { LoginComponent } from "./login/login.component";
import { SeedShelfComponent } from "./seed-shelf/seed-shelf.component";
import { ShelfHomeComponent } from "./seed-shelf/shelf-home/shelf-home.component";
import { SeedDetailViewerComponent } from "./seed-detail-viewer/seed-detail-viewer.component";
import { SeedOnShelfComponent } from "./seed-shelf/seed-on-shelf/seed-on-shelf.component";
import { SeedFromSearchComponent } from "./seed-search/seed-from-search/seed-from-search.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'shelf', component: SeedShelfComponent, children:[
    { path: ':id', component: SeedOnShelfComponent}
  ]},
  { path: 'search', component: SeedSearchComponent, children: [
    { path: ':id', component: SeedFromSearchComponent}
  ] },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
