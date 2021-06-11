import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/app/Api/api';
import { notification } from '../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }
  customersUrl=api.url+'notification/getallnotifications';
  
  public  getallnotificationData() {
    console.log("/**/**//*/*/*/*testestest*/*/*/*/");
    return  this.http.get<notification[]>(this.customersUrl);
    }

