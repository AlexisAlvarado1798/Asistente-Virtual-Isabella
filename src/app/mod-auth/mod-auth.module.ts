import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModAuthRoutingModule} from './mod-auth-routing.module';
import { AuthLoginManagementComponent } from './components/auth-login-management/auth-login-management.component';
import {ModCoreModule} from "../mod-core/mod-core.module";


@NgModule({
  declarations: [
    AuthLoginManagementComponent
  ],
  imports: [
    ModAuthRoutingModule,
    ModCoreModule
  ]
})
export class ModAuthModule {
}
