import { Component, OnInit } from '@angular/core';
import { notification } from '../model/notification';
import { NotificationsService } from '../service/notifications.service';

@Component({
  selector: 'app-showallnotificatiosn',
  templateUrl: './showallnotificatiosn.component.html',
  styleUrls: ['./showallnotificatiosn.component.scss']
})
export class ShowallnotificatiosnComponent implements OnInit {

  dataSource !:notification[];

  ngOnInit(): void {
  }
  constructor(private notificationservice: NotificationsService){  
    console.log("/**/**//*/*/*/*/*/*/con*/*/*/*/");
this.notificationservice.getallnotificationData().subscribe( (notifications: notification[]) => {     
   for (let i = 0; i < notifications.length; i++) {
 console.log(notifications[i].id+" "+notifications[i].title+" "+notifications[i].type);
  }
 this.dataSource=notifications;
});       
}
 
}