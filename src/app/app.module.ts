import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ModAuthModule} from "./mod-auth/mod-auth.module";
import {ModSugmeModule} from "./mod-sugme/mod-sugme.module";
import {ModCoreModule} from './mod-core/mod-core.module';
import {ModTipsModule} from './mod-tips/mod-tips.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModSocketnotificationModule} from './mod-socketnotification/mod-socketnotification.module';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ModAuthModule,
    ModSugmeModule,
    ModCoreModule,
    ModTipsModule,
    ModSocketnotificationModule,
    BrowserAnimationsModule,
    ToastModule,
    ScrollPanelModule,
    ConfirmDialogModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]

})
export class AppModule {
}
