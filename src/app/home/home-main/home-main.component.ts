import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
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

  name = '';
  platforms = ['PC', 'XBOX', 'PS4'];
  selectedPlatform = this.platforms[0];
  isOpen = true;
  constructor(private router: Router,
    private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // console.log(this.router.url);
      if (this.router.url === '/not-found') {
        this.isOpen = false;
      } else if (!(params['name'] && params['platform'])) {
        this.router.navigate(['/']);
      } else {
        this.isOpen = false;
        this.name = params['name'];
      }
    });
  }

  searchClick(searchName: String, selectedPlatform: String) {
    if (searchName && selectedPlatform) {
      this.toggle();
      this.router.navigate(['/detail'], {queryParams: {name: searchName, platform: selectedPlatform}});
    } else {
      alert('enter user name or select platform');
    }
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  toggle() {
    // this.isOpen = !this.isOpen;
    this.isOpen = false;
  }
}
