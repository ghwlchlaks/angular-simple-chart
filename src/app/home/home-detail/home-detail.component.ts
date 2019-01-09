import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { d_userStats } from '../datas/d_userStats';
import { IReturnStats, IUserStats } from '../types/t_userStats';
import { INumberCardData } from '../types/t_ngxChart';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  name: string;
  ApiData: IReturnStats;
  ApiStatus: boolean;
  ApiValue: IUserStats;

  numberCardData: Array<INumberCardData> = [];
  numberCardSingle: any[];
  numberCardView: any[] = [1000, 400];
  numberCardColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  numberCardColor;
  numberCardBandColor;
  numberCardTextColor;
  numberCardEmptyColor;

  constructor(private route: ActivatedRoute) {
    Object.assign(this, { numberCardSingle: this.numberCardData });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      /*
        api call
      */
      this.ApiData = d_userStats;
      this.ApiStatus = this.ApiData.status;
      this.ApiValue = this.ApiData.value;
      if (this.ApiStatus) {
        Object.keys(this.ApiValue.totals).forEach((value: string, index: number) => {
          if (Object.keys(this.ApiValue.totals).length - 1 !== index) {
            this.numberCardData.push({
              'name' : value,
              'value' : this.ApiValue.totals[value]
            });
          }
        });

      } else {
        console.log('error no user');
      }
    });
  }

  NumberCardOnSelect(event) {
    console.log(event);
  }
}
