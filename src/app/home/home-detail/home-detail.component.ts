import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  platform: string;

  ApiData: IReturnStats;
  ApiStatus: boolean;
  ApiValue: IUserStats;

  apiUsername: String;
  apiPlatform: String;
  apiLastUpdate: string;

  numberCardData_total: Array<INumberCardData>;
  numberCardData_solo: Array<INumberCardData>;
  numberCardData_duo: Array<INumberCardData>;
  numberCardData_squad: Array<INumberCardData>;
  pieData_placeTop: Array<IPieData>;
  pieData_matchedPlayed: Array<IPieData>;
  pieData_score: Array<IPieData>;

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

  // advanced pie place top setup
  pieResult_matchedPlayed: any[];
  pieView_matchedPlayed: any[] = [1200, 200];
  pieColorScheme_matchedPlayed = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  pieGradient_matchedPlayed = false;

  // pie grid score setup
  pieResults_score: any[];
  pieView_score: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  pieColorScheme_score = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  // line, area
  autoScale = true;

  constructor(private route: ActivatedRoute,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.platform = params['platform'];
      /*
        api call
      */
      const numberCardData_total: Array<INumberCardData> = [];
      const numberCardData_solo: Array<INumberCardData> = [];
      const numberCardData_duo: Array<INumberCardData> = [];
      const numberCardData_squad: Array<INumberCardData> = [];
      const pieData_placeTop: Array<IPieData> = [
        {name : 'top1', value: 0},
        {name : 'top3', value: 0},
        {name : 'top5', value: 0},
        {name : 'top6', value: 0},
        {name : 'top10', value: 0},
        {name : 'top12', value: 0},
        {name : 'top25', value: 0},
      ];
      const pieData_matchedPlayed: Array<IPieData> = [];
      const pieData_score: Array<IPieData> = [];

     this.ApiData = null;
      setTimeout(() => {
        this.ApiData = d_userStats;
      this.ApiStatus = this.ApiData.status;
      this.ApiValue = this.ApiData.value;
      if (this.ApiStatus) {
        // platform
        this.apiPlatform = this.ApiValue.platform;
        this.apiUsername = this.ApiValue.username;
        // lastupdate time
        this.apiLastUpdate = this.getDate(this.ApiValue.lastupdate);
        // totals data filter
        Object.keys(this.ApiValue.totals).forEach((value: string, index: number) => {
          if (Object.keys(this.ApiValue.totals).length - 1 !== index) {
            numberCardData_total.push({
              'name' : value,
              'value' : this.ApiValue.totals[value]
            });
          }
        });
        // stats data filter
        Object.keys(this.ApiValue.stats).forEach((value: string, index: number) => {
          if (index === 0 || index === 5 || index === 6 || index === 7 || index === 8) {
            // kill_solo kd_solo score_solo, score_solo minutedsplayed_solo
            numberCardData_solo.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
            if (index === 7) {
              // grid pie score_solo
              pieData_score.push({
                'name': value,
                'value': this.ApiValue.stats[value]
              });
            }
          } else if (index === 10 || index === 15 || index === 16 || index === 17 || index === 18) {
            // kill_duo kd_duo score_duo scroe_duo minutedsplayed_duo
            numberCardData_duo.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
            if (index === 17) {
              // grid pie score_duo
              pieData_score.push({
                'name': value,
                'value': this.ApiValue.stats[value]
              });
            }
          } else if (index === 20 || index === 25 || index === 26 || index === 27 || index === 28) {
            // kill_squad kd_squad score_squad score_squad minutedsplayed_squad
            numberCardData_squad.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
            if (index === 27) {
              // grid pie score_squad
              pieData_score.push({
                'name': value,
                'value': this.ApiValue.stats[value]
              });
            }
          } else if (index === 1 || index === 11 || index === 21) {
            // top1_solo top1_duo top1_squad
            pieData_placeTop[0].value += this.ApiValue.stats[value];
          } else if (index === 22) {
            // top3_squad
            pieData_placeTop[1].value += this.ApiValue.stats[value];
          } else if (index === 12) {
            // top5_duo
            pieData_placeTop[2].value += this.ApiValue.stats[value];
          } else if (index === 23) {
            // top6_squad
            pieData_placeTop[3].value += this.ApiValue.stats[value];
          } else if (index === 2) {
            // top10_solo
            pieData_placeTop[4].value += this.ApiValue.stats[value];
          } else if (index === 13) {
            // top12_duo
            pieData_placeTop[5].value += this.ApiValue.stats[value];
          } else if (index === 3) {
            // top25_solo
            pieData_placeTop[6].value += this.ApiValue.stats[value];
          } else if (index === 4 || index === 14 || index === 24) {
            // matchesplayed_solo, matchesplayed_duo, matchesplayed_squad
            pieData_matchedPlayed.push({
              'name': value,
              'value': this.ApiValue.stats[value]
            });
          }
        });

        this.numberCardData_total = numberCardData_total;
        this.numberCardData_solo = numberCardData_solo;
        this.numberCardData_duo = numberCardData_duo;
        this.numberCardData_squad = numberCardData_squad;
        this.pieData_placeTop = pieData_placeTop;
        this.pieData_matchedPlayed = pieData_matchedPlayed;
        this.pieData_score = pieData_score;

        // number card assign
        Object.assign(this, { numberCardSingle_total: this.numberCardData_total });
        Object.assign(this, { numberCardSingle_solo: this.numberCardData_solo });
        Object.assign(this, { numberCardSingle_duo: this.numberCardData_duo });
        Object.assign(this, { numberCardSingle_squad: this.numberCardData_squad });
        // pie assign
        Object.assign(this, { pieResult_placeTop: this.pieData_placeTop });
        Object.assign(this, { pieResult_matchedPlayed: this.pieData_matchedPlayed });
        Object.assign(this, { pieResults_score: this.pieData_score });
      } else {
        console.log('error no user');
      }
      }, 3000);
    });
  }
  private initialChartData() {
    
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
  pieOnSelect_matchedPlayed(event) {
    console.log(event);
  }
  pieOnSelect_score(event) {
    console.log(event);
  }
  private getDate(strDate: String): string {
    const strData_split = strDate.split('T');
    const year = strData_split[0].split('-')[0];
    const month = strData_split[0].split('-')[1];
    const day = strData_split[0].split('-')[2];
    const hour = strData_split[1].split(':')[0];
    const min = strData_split[1].split(':')[1];
    return year + '년 ' + month + '월 ' + day + '일 ' + hour + '시 ' + min + '분 ';
  }
}
