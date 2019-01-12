import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
  animations: [
    slideInAnimation
  ]
})

export class HomeMainComponent implements OnInit {

  platforms = ['PC', 'XBOX', 'PS4'];
  selectedPlatform = this.platforms[0];
  isOpen = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchClick(searchName: String, selectedPlatform: String) {
    this.toggle();
    this.router.navigate(['/detail'], {queryParams: {name: searchName, platform: selectedPlatform}});
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  toggle() {
    // this.isOpen = !this.isOpen;
    this.isOpen = false;
  }
}
