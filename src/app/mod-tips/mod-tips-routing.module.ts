import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipsHumanizationManagementComponent} from './component/tips-humanization-management/tips-humanization-management.component';
import {TipsHumanizationManagementListComponent} from './component/tips-humanization-management-list/tips-humanization-management-list.component';

const routes: Routes = [
  {
    path: 'tipsList',
    component: TipsHumanizationManagementListComponent
  },
  {
    path: 'tipsCreate',
    component: TipsHumanizationManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModTipsRoutingModule {
}
