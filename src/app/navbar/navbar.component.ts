import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() selectedView = new EventEmitter<string>();

  onSelect(viewToDisplay:string) {
    this.selectedView.emit(viewToDisplay)
  }
}