import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IReturnStats } from '../home/types/t_userStats';

@Injectable({
  providedIn: 'root'
})
export class FortniteApiService {

  constructor(private http: Http) { }

  getData(name: string, platform: string): Observable<IReturnStats> {
    return this.http.get(`http://localhost:3000/api/fortnite/status?userId=${name}&platform=${platform}`)
    .map((data: Response) => data.json());
  }
}
