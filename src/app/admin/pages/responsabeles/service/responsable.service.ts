import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { api } from 'src/app/Api/api';
import { Responsable } from '../model/Responsable';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) { }
 Urlgetall=api.url+'responsable/all';
 Urladdresp=api.url+'responsable/add';
  public  getallResponsableData() {
    console.log("/**/**//*/*/*/*getallResponsableData*/*/*/*/");
    return  this.http.get<Responsable[]>(this.Urlgetall);
    }
    public  addResponsableData(resp: Responsable){
      return this.http.post<Responsable>(this.Urladdresp, resp);
        
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
