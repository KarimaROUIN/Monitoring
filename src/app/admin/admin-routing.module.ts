import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResponsabelesComponent } from './pages/responsabeles/responsabeles.component';
import { AddresponsableComponent } from './pages/responsabeles/addresponsable/addresponsable.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { KiosksComponent } from './pages/kiosks/kiosks.component';
import { AddkioskComponent } from './pages/kiosks/addkiosk/addkiosk.component';
import { AdddeviceComponent } from './pages/devices/adddevice/adddevice.component';
import { CashboxComponent } from './pages/cashbox/cashbox.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';


const routes: Routes = [
  { path: '', component:  AdminComponent, children:[  
  {path: 'dashboard', component:  DashboardComponent},
  {path: 'addresponsable', component:  AddresponsableComponent},
  {path: 'responsables', component:  ResponsabelesComponent},
  {path: 'kiosks', component:  KiosksComponent},
  {path: 'addkiosk', component:  AddkioskComponent},
  {path: 'devices', component:  DevicesComponent},
  {path: 'adddevice', component:  AdddeviceComponent},
  {path: 'cashbox', component:  CashboxComponent},
  {path: 'transactions', component:  TransactionsComponent}
  
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
