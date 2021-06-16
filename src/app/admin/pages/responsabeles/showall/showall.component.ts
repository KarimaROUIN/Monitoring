import { Component, OnInit, ViewChild } from '@angular/core';
import { Responsable } from '../model/Responsable';
import { ResponsableService } from '../service/responsable.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.scss']
})
export class ShowallComponent implements OnInit {
  
  dataSource !:Responsable[]; 

  ngOnInit() {
  }

  constructor(private responsableservice: ResponsableService){    console.log("/**/**//*/*/*/*/*/*/con*/*/*/*/");
  this.responsableservice.getallResponsableData().subscribe( (responsables: Responsable[]) => {     
     for (let i = 0; i < responsables.length; i++) {
   console.log(responsables[i].id+" "+responsables[i].firstName+" "+responsables[i].lastName);
    }
   this.dataSource=responsables;
  });       
}
   
}

 