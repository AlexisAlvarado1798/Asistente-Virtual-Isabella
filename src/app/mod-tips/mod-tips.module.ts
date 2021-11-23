import {NgModule} from '@angular/core';

import {ModTipsRoutingModule} from './mod-tips-routing.module';
import {ModCoreModule} from '../mod-core/mod-core.module';
import {TipsHumanizationManagementComponent} from './component/tips-humanization-management/tips-humanization-management.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TipsHumanizationManagementListComponent} from './component/tips-humanization-management-list/tips-humanization-management-list.component';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    TipsHumanizationManagementComponent,
    TipsHumanizationManagementListComponent
  ],
  imports: [
    ModTipsRoutingModule,
    ModCoreModule,
    ReactiveFormsModule,
    InputTextareaModule
  ]
})
export class ModTipsModule {
}
