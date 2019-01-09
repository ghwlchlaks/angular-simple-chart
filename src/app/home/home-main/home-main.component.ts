import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  selectedPlatform;
  platforms = ['PC', 'XBOX', 'PS4'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchClick(searchName: String, selectedPlatform: String) {
    this.router.navigate(['/detail'], {queryParams: {name: searchName, platform: selectedPlatform}});
  }
}
