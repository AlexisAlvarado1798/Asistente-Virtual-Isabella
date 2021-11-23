import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLoginManagementComponent} from "./components/auth-login-management/auth-login-management.component";

const routes: Routes = [
  {
    path: 'page', component: AuthLoginManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModAuthRoutingModule {
}
