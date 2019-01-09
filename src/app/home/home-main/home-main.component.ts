import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchClick(searchName: String) {
    // console.log(searchName);
    this.router.navigate(['/detail'], {queryParams: {name: searchName}});
  }
}
