import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { api } from 'src/app/Api/api';
import { responsable } from '../model/responsable';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) { }
 Urlgetall=api.url+'responsable/all';
 Urladdresp=api.url+'responsable/all';
  public  getallResponsableData() {
    console.log("/**/**//*/*/*/*getallResponsableData*/*/*/*/");
    return  this.http.get<responsable[]>(this.Urlgetall);
    }
    public  addResponsableData(hero: responsable): Observable<responsable> {
      return this.http.post<responsable>(this.Urladdresp, hero);
        
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
