import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  title = 'fortnite-api-angular';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchClick() {
    this.router.navigate(['/detail']);
  }
}
