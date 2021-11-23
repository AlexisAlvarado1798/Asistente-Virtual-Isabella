import {NgModule} from '@angular/core';

import {ModSugmeRoutingModule} from './mod-sugme-routing.module';
import {SugmeMenuManagementComponent} from './components/sugme-menu-management/sugme-menu-management.component';
import {ModCoreModule} from "../mod-core/mod-core.module";

@NgModule({
  declarations: [
    SugmeMenuManagementComponent
  ],
  imports: [
    ModSugmeRoutingModule,
    ModCoreModule
  ]
})
export class ModSugmeModule {
}
