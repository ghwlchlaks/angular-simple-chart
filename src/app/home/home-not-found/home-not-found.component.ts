import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-not-found',
  templateUrl: './home-not-found.component.html',
  styleUrls: ['./home-not-found.component.css']
})
export class HomeNotFoundComponent implements OnInit {
  userId: string;
  platform: string;

  constructor(private route: ActivatedRoute, ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['name'];
      this.platform = params['platform'];
    });
  }

}
