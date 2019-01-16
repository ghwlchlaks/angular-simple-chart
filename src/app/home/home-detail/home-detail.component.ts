import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { d_userStats } from '../datas/d_userStats';
import { IReturnStats, IUserStats } from '../types/t_userStats';
import { INumberCardData, IPieData } from '../types/t_ngxChart';

import { FortniteApiService } from '../../services/fortnite-api.service';

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

  emptyColor = '#343a40';
  numberCardData_total: Array<INumberCardData>;
  numberCardData_solo: Array<INumberCardData>;
  numberCardData_duo: Array<INumberCardData>;
  numberCardData_squad: Array<INumberCardData>;
  pieData_placeTop: Array<IPieData>;
  pieData_matchedPlayed: Array<IPieData>;
  pieData_score: Array<IPieData>;

  // total number card setup
  numberCardSingle_total: any[];
  numberCardView_total: any[] = [800, 200];
  numberCardColorScheme_total = {
    domain: ['#343a40', '#343a40', '#343a40']
  };
  numberCardColor_total;
  numberCardBandColor_total;
  numberCardTextColor_total;
  numberCardEmptyColor_total;
  numberCardInnerPadding_total = 15;

  // solo number card setup
  numberCardSingle_solo: any[];
  numberCardView_solo: any[] = [800, 100];
  numberCardColorScheme_solo = {
    domain: ['#343a40', '#343a40', '#343a40']
  };
  numberCardColor_solo;
  numberCardBandColor_solo;
  numberCardTextColor_solo;
  numberCardEmptyColor_solo;
  numberCardInnerPadding_solo = 0;

  // duo number card setup
  numberCardSingle_duo: any[];
  numberCardView_duo: any[] = [800, 100];
  numberCardColorScheme_duo = {
    domain: ['#343a40', '#343a40', '#343a40']
  };
  numberCardColor_duo;
  numberCardBandColor_duo;
  numberCardTextColor_duo;
  numberCardEmptyColor_duo;
  numberCardInnerPadding_duo = 0;

  // squad number card setup
  numberCardSingle_squad: any[];
  numberCardView_squad: any[] = [800, 100];
  numberCardColorScheme_squad = {
    domain: ['#343a40', '#343a40', '#343a40']
  };
  numberCardColor_squad;
  numberCardBandColor_squad;
  numberCardTextColor_squad;
  numberCardEmptyColor_squad;
  numberCardInnerPadding_squad = 0;

  // advanced pie place top setup
  pieResult_placeTop: any[];
  pieView_placeTop: any[] = [800, 200];
  pieColorScheme_placeTop = {
    domain: ['#0077f7', '#27a243', '#d53343', '#f7bb07', '#575bcb', '#169db2', '#bb2af7']
  };
  pieGradient_placeTop = false;

  // advanced pie place top setup
  pieResult_matchedPlayed: any[];
  pieView_matchedPlayed: any[] = [800, 200];
  pieColorScheme_matchedPlayed = {
    domain: ['#0077f7', '#27a243', '#d53343']
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
    domain: ['#0077f7', '#27a243', '#d53343'],
  };
  // line, area
  autoScale = true;

  constructor(private route: ActivatedRoute, private router: Router, private apiSerivce: FortniteApiService) {
    if (innerWidth / 2 > 300 && innerHeight / 2.5 > 200) {
      this.numberCardView_total = [innerWidth / 2, innerHeight / 1.8];
      this.numberCardView_solo = [innerWidth / 2, innerHeight / 2];
      this.numberCardView_duo = [innerWidth / 2, innerHeight / 2];
      this.numberCardView_squad = [innerWidth / 2, innerHeight / 2];
      this.pieView_matchedPlayed =  [innerWidth / 2, innerHeight / 2.5];
      this.pieView_placeTop = [innerWidth / 2, innerHeight / 2.5];
      this.pieView_score = [innerWidth / 2, innerHeight / 1.6];
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.platform = params['platform'];

      this.initialApiData();
      this.initialChartsData();

      this.apiSerivce.getData(this.name, this.platform).subscribe((result) => {
        this.ApiData = result;
        this.ApiStatus = this.ApiData.status;
        this.ApiValue = this.ApiData.value;

        if (this.ApiStatus) {
          this.createCharts(this.ApiValue);
        } else {
          // console.log('error no user');
          this.router.navigate(['/not-found'], {queryParams: {name: this.name, platform: this.platform} });
        }
      });
    });
  }

  private initialApiData() {
    this.ApiData = null;
  }
  private initialChartsData() {
    this.numberCardData_total = [];
    this.numberCardData_solo = [];
    this.numberCardData_duo = [];
    this.numberCardData_squad = [];
    this.pieData_placeTop = [
      {name : 'top1', value: 0},
      {name : 'top3', value: 0},
      {name : 'top5', value: 0},
      {name : 'top6', value: 0},
      {name : 'top10', value: 0},
      {name : 'top12', value: 0},
      {name : 'top25', value: 0},
    ];
    this.pieData_matchedPlayed = [];
    this.pieData_score = [];
  }
  private createCharts(ApiValue: IUserStats) {
    // platform
    if (ApiValue.platform === 'xb1') {
      ApiValue.platform = 'XBOX';
    }
    this.apiPlatform = ApiValue.platform;
    this.apiUsername = ApiValue.username;
    // lastupdate time
    this.apiLastUpdate = this.getDate(ApiValue.lastupdate);
    // totals data filter
    Object.keys(ApiValue.totals).forEach((value: string, index: number) => {
      if (Object.keys(ApiValue.totals).length - 1 !== index) {
        this.numberCardData_total.push({
          'name' : value,
          'value' : ApiValue.totals[value]
        });
      }
    });
    // stats data filter
    Object.keys(this.ApiValue.stats).forEach((value: string, index: number) => {
      if (index === 0 || index === 5 || index === 6 || index === 7 || index === 8) {
        // kill_solo kd_solo score_solo, score_solo minutedsplayed_solo
        this.numberCardData_solo.push({
          'name': value,
          'value': ApiValue.stats[value]
        });
        if (index === 7) {
          // grid pie score_solo
          this.pieData_score.push({
            'name': value,
            'value': ApiValue.stats[value]
          });
        }
      } else if (index === 10 || index === 15 || index === 16 || index === 17 || index === 18) {
        // kill_duo kd_duo score_duo scroe_duo minutedsplayed_duo
        this.numberCardData_duo.push({
          'name': value,
          'value': ApiValue.stats[value]
        });
        if (index === 17) {
          // grid pie score_duo
          this.pieData_score.push({
            'name': value,
            'value': ApiValue.stats[value]
          });
        }
      } else if (index === 20 || index === 25 || index === 26 || index === 27 || index === 28) {
        // kill_squad kd_squad score_squad score_squad minutedsplayed_squad
        this.numberCardData_squad.push({
          'name': value,
          'value': ApiValue.stats[value]
        });
        if (index === 27) {
          // grid pie score_squad
          this.pieData_score.push({
            'name': value,
            'value': ApiValue.stats[value]
          });
        }
      } else if (index === 1 || index === 11 || index === 21) {
        // top1_solo top1_duo top1_squad
        this.pieData_placeTop[0].value += ApiValue.stats[value];
      } else if (index === 22) {
        // top3_squad
        this.pieData_placeTop[1].value += ApiValue.stats[value];
      } else if (index === 12) {
        // top5_duo
        this.pieData_placeTop[2].value += ApiValue.stats[value];
      } else if (index === 23) {
        // top6_squad
        this.pieData_placeTop[3].value += ApiValue.stats[value];
      } else if (index === 2) {
        // top10_solo
        this.pieData_placeTop[4].value += ApiValue.stats[value];
      } else if (index === 13) {
        // top12_duo
        this.pieData_placeTop[5].value += ApiValue.stats[value];
      } else if (index === 3) {
        // top25_solo
        this.pieData_placeTop[6].value += ApiValue.stats[value];
      } else if (index === 4 || index === 14 || index === 24) {
        // matchesplayed_solo, matchesplayed_duo, matchesplayed_squad
        this.pieData_matchedPlayed.push({
          'name': value,
          'value': ApiValue.stats[value]
        });
      }
    });
    this.assignCharts();
  }
  private assignCharts() {
    // number card assign
    Object.assign(this, { numberCardSingle_total: this.numberCardData_total });
    Object.assign(this, { numberCardSingle_solo: this.numberCardData_solo });
    Object.assign(this, { numberCardSingle_duo: this.numberCardData_duo });
    Object.assign(this, { numberCardSingle_squad: this.numberCardData_squad });
    // pie assign
    Object.assign(this, { pieResult_placeTop: this.pieData_placeTop });
    Object.assign(this, { pieResult_matchedPlayed: this.pieData_matchedPlayed });
    Object.assign(this, { pieResults_score: this.pieData_score });
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
    return year + '-' + month + '-' + day + '-' + hour + ':' + min + '';
  }
  onResize(event) {
    const Ewidth: number = event.target.innerWidth;
    const Eheight: number = event.target.innerHeight;
    if (Ewidth / 2 > 300 && Eheight / 2.5 > 200) {
      this.numberCardView_total = [Ewidth / 2, Eheight / 1.8];
      this.numberCardView_solo = [Ewidth / 2, Eheight / 2];
      this.numberCardView_duo = [Ewidth / 2, Eheight / 2];
      this.numberCardView_squad = [Ewidth / 2, Eheight / 2];
      this.pieView_matchedPlayed =  [Ewidth / 2, Eheight / 2.5];
      this.pieView_placeTop = [Ewidth / 2, Eheight / 2.5];
      this.pieView_score = [Ewidth / 2, Eheight / 1.6];
    }
  }
}
