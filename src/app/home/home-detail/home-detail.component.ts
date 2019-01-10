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

  numberCardData_total: Array<INumberCardData> = [];
  numberCardData_solo: Array<INumberCardData> = [];

  // total number card setup
  numberCardSingle_total: any[];
  numberCardView_total: any[] = [1000, 400];
  numberCardColorScheme_total = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  numberCardColor_total;
  numberCardBandColor_total;
  numberCardTextColor_total;
  numberCardEmptyColor_total;
  numberCardInnerPadding_total = 15;

  // solo number card setup
  numberCardSingle_solo: any[];
  numberCardView_solo: any[] = [1200, 200];
  numberCardColorScheme_solo = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  numberCardColor_solo;
  numberCardBandColor_solo;
  numberCardTextColor_solo;
  numberCardEmptyColor_solo;
  numberCardInnerPadding_solo = 0;

  constructor(private route: ActivatedRoute) {
    Object.assign(this, { numberCardSingle_total: this.numberCardData_total });
    Object.assign(this, { numberCardSingle_solo: this.numberCardData_total });
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
            this.numberCardData_total.push({
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

  NumberCardOnSelect_total(event) {
    console.log(event);
  }

  NumberCardOnSelect_solo(event) {
    console.log(event);
  }
}
