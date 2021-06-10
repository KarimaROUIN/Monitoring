import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { HeaderComponent } from './nav/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotificationComponent } from './nav/notification/notification.component';
import { ResponsabelesComponent } from './pages/responsabeles/responsabeles.component';
import { ShowallComponent } from './pages/responsabeles/showall/showall.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';// MDB Angular Pro
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    NotificationComponent,
    ResponsabelesComponent,
    ShowallComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    ButtonsModule, WavesModule, CollapseModule 
  ]
})
export class AdminModule { }
