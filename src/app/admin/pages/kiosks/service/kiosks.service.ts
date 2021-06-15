import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/app/Api/api';
import { kiosk } from '../model/kiosk';

@Injectable({
  providedIn: 'root'
})
export class KiosksService {

  constructor(private http: HttpClient) { }
  customersUrl=api.url+'responsable/all';
  
  public  getallResponsableData() {
    console.log("/**/**//*/*/*/*testestest*/*/*/*/");
    return  this.http.get<kiosk[]>(this.customersUrl);
    }

    setHttpHeaders(token: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Authorization': 'Bearer ' + token.split('"').join('')
        })
      };
      return httpOptions;
    }
}