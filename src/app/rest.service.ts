import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claims } from './claims';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/Claims';
  getClaims(){
    return this.http.get<Claims[]>(this.url);
  }

}
