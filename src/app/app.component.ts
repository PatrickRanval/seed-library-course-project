import { Component } from '@angular/core';
import { SeedDetailViewerComponent } from './seed-detail-viewer/seed-detail-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seed-library-course-project';
  displayedView = 'shelf';

  onDisplay(view:string) {
    this.displayedView = view;
  }
}
