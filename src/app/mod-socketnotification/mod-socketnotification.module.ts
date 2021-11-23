import {NgModule} from '@angular/core';

import {ModSocketnotificationRoutingModule} from './mod-socketnotification-routing.module';
import {SocketnotificationManagementComponent} from './component/socketnotification-management/socketnotification-management.component';
import {ModCoreModule} from '../mod-core/mod-core.module';


@NgModule({
  declarations: [
    SocketnotificationManagementComponent
  ],
  imports: [
    ModSocketnotificationRoutingModule,
    ModCoreModule
  ]
})
export class ModSocketnotificationModule {
}
