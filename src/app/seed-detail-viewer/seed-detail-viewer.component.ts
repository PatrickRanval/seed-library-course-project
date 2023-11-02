import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seed-detail-viewer',
  templateUrl: './seed-detail-viewer.component.html',
  styleUrls: ['./seed-detail-viewer.component.css']
})
export class SeedDetailViewerComponent implements OnInit {
  id:number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
}
