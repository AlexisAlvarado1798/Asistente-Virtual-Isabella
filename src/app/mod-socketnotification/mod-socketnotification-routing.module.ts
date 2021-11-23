import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SocketnotificationManagementComponent} from './component/socketnotification-management/socketnotification-management.component';

const routes: Routes = [
  {path: 'socketNoti', component: SocketnotificationManagementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModSocketnotificationRoutingModule { }
