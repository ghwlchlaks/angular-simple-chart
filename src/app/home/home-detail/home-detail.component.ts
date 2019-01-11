import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { d_userStats } from '../datas/d_userStats';
import { IReturnStats, IUserStats } from '../types/t_userStats';
import { INumberCardData, IPieData } from '../types/t_ngxChart';

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
  numberCardData_duo: Array<INumberCardData> = [];
  numberCardData_squad: Array<INumberCardData> = [];
  pieData_placeTop: Array<IPieData> = [
    {name : 'top1', value: 0},
    {name : 'top3', value: 0},
    {name : 'top5', value: 0},
    {name : 'top6', value: 0},
    {name : 'top10', value: 0},
    {name : 'top12', value: 0},
    {name : 'top25', value: 0},
  ];

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

  // duo number card setup
  numberCardSingle_duo: any[];
  numberCardView_duo: any[] = [1200, 200];
  numberCardColorScheme_duo = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  numberCardColor_duo;
  numberCardBandColor_duo;
  numberCardTextColor_duo;
  numberCardEmptyColor_duo;
  numberCardInnerPadding_duo = 0;

  // squad number card setup
  numberCardSingle_squad: any[];
  numberCardView_squad: any[] = [1200, 200];
  numberCardColorScheme_squad = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  numberCardColor_squad;
  numberCardBandColor_squad;
  numberCardTextColor_squad;
  numberCardEmptyColor_squad;
  numberCardInnerPadding_squad = 0;

  // advanced pie place top setup
  pieResult_placeTop: any[];
  pieView_placeTop: any[] = [1200, 200];
  pieColorScheme_placeTop = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  pieGradient_placeTop = false;

  constructor(private route: ActivatedRoute) {
    // number card assign
    Object.assign(this, { numberCardSingle_total: this.numberCardData_total });
    Object.assign(this, { numberCardSingle_solo: this.numberCardData_solo });
    Object.assign(this, { numberCardSingle_duo: this.numberCardData_duo });
    Object.assign(this, { numberCardSingle_squad: this.numberCardData_squad });
    // pie assign
    Object.assign(this, { pieResult_placeTop: this.pieData_placeTop });
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
        // totals data filter
        Object.keys(this.ApiValue.totals).forEach((value: string, index: number) => {
          if (Object.keys(this.ApiValue.totals).length - 1 !== index) {
            this.numberCardData_total.push({
              'name' : value,
              'value' : this.ApiValue.totals[value]
            });
          }
        });
        // stats data filter
        Object.keys(this.ApiValue.stats).forEach((value: string, index: number) => {
          if (index === 0 || index === 5 || index === 6 || index === 7 || index === 8) {
            // kill_solo kd_solo winrate_solo, score_solo minutedsplayed_solo
            this.numberCardData_solo.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
          } else if (index === 10 || index === 15 || index === 16 || index === 17 || index === 18) {
            // kill_duo kd_duo winrate_duo scroe_duo minutedsplayed_duo
            this.numberCardData_duo.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
          } else if (index === 20 || index === 25 || index === 26 || index === 27 || index === 28) {
            // kill_squad kd_squad winrate_squad score_squad minutedsplayed_squad
            this.numberCardData_squad.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
          } else if (index === 1 || index === 11 || index === 21) {
            // top1_solo top1_duo top1_squad
            this.pieData_placeTop[0].value += this.ApiValue.stats[value];
          } else if (index === 22) {
            // top3_squad
            this.pieData_placeTop[1].value += this.ApiValue.stats[value];
          } else if (index === 12) {
            // top5_duo
            this.pieData_placeTop[2].value += this.ApiValue.stats[value];
          } else if (index === 23) {
            // top6_squad
            this.pieData_placeTop[3].value += this.ApiValue.stats[value];
          } else if (index === 2) {
            // top10_solo
            this.pieData_placeTop[4].value += this.ApiValue.stats[value];
          } else if (index === 13) {
            // top12_duo
            this.pieData_placeTop[5].value += this.ApiValue.stats[value];
          } else if (index === 3) {
            // top25_solo
            this.pieData_placeTop[6].value += this.ApiValue.stats[value];
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
  NumberCardOnSelect_duo(event) {
    console.log(event);
  }
  NumberCardOnSelect_squad(event) {
    console.log(event);
  }
  pieOnSelect_placeTop(event) {
    console.log(event);
  }
}
