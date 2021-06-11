import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/app/Api/api';
import { responsable } from '../model/responsable';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) { }
  customersUrl=api.url+'responsable/all';
  
  public  getallResponsableData() {
    console.log("/**/**//*/*/*/*testestest*/*/*/*/");
    return  this.http.get<responsable[]>(this.customersUrl);
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
