import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SugmeMenuManagementComponent} from "./components/sugme-menu-management/sugme-menu-management.component";

const routes: Routes = [
  {
    path: 'menu', component: SugmeMenuManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModSugmeRoutingModule {
}
