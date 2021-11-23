import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SuggetionMenuModel} from './mod-sugme/models/suggetion-menu.model';
import {typeMultimediaConst} from './mod-sugme/constants/type-multimedia.const';
import {SugmeService} from './mod-sugme/services/sugme.service';
import {SocketnotificationService} from './mod-socketnotification/services/socketnotification.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

declare var createUnityInstance: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, ConfirmationService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  input = '';
  action: string = "cerrar";
  durationInSeconds = 5;
  unityInstance: any;

  model: SuggetionMenuModel[] = [];
  showCard = false;
  msgs: any;

  visibleSidebar1: any;
  visibleSidebar2: any;

  msgs1: any;
  received_msg: any = 'hola mundo';
  ws: any;

  position: string = '';


  constructor(private messageService: MessageService,
              public socketNotificationService: SocketnotificationService,
              private _snackBar: MatSnackBar,
              private sugmeService: SugmeService,
              private confirmationService: ConfirmationService) {
  }

  async ngAfterViewInit(): Promise<void> {
    this.getSuggetionsMenu();

    const buildUrl = "assets/unity/Bubble-Asistente/Build";
    const config = {
      dataUrl: buildUrl + "/AsistenteDigital.data",
      frameworkUrl: buildUrl + "/AsistenteDigital.framework.js",
      codeUrl: buildUrl + "/AsistenteDigital.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "JoeMoceri",
      productName: "Unity Effects Pack",
      productVersion: "0.1",
      devicePixelRatio: 0
    };
    const canvas: HTMLElement = document.querySelector("#unity-canvas-bubble") || new HTMLElement();

    this.unityInstance = await createUnityInstance(canvas, config);


    const buildUrlAsistent = "assets/unity/Training-Asistent/Build";
    const configAsistent = {
      dataUrl: buildUrlAsistent + "/v06.data",
      frameworkUrl: buildUrlAsistent + "/v06.framework.js",
      codeUrl: buildUrlAsistent + "/v06.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "JoeMoceri",
      productName: "Unity Effects Pack",
      productVersion: "0.1",
      devicePixelRatio: 0
    };
    const canvasAsisten: HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();

    this.unityInstance = await createUnityInstance(canvasAsisten, configAsistent);

    this.listen();
  }

  listen() {

    if ("WebSocket") {
      //alert(" Browser support WebSocket!");
      this.messageService.add({
        severity: 'success',
        closable: true,
        life: 10000,
        summary: 'Success',
        detail: 'Browser support WebSocket!'
      });
      // Open one web socket
      this.ws = new WebSocket("ws://127.0.0.1:8080/websocket");
// On Meessage the socket


      this.ws.onmessage = (evt: any) => {
        this.received_msg = evt.data;
        //alert(" Receive push data ：" + this.received_msg);
        this.messageService.add({
          severity: 'info',
          closable: true,
          life: 10000,
          summary: 'Info',
          detail: this.received_msg
        });
      };

      this.ws.onclose = function () {
// close websocket
        //alert(" Connection closed ...");
      };
    } else {
// Browser does not support WebSocket
      this.messageService.add({
        severity: 'success',
        closable: true,
        life: 10000,
        summary: 'Success',
        detail: 'Browser does not support WebSocket!'
      });
      //alert(" Browser does not support WebSocket!");
    }
  }

  onSend(){
    this.messageService.add({
      severity: 'success', summary: 'Enviado', detail: 'Te contactaremos Pronto'

    })
  }

  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: this.msgs,
      header: 'Estas satisfecho con el Mensaje',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity: 'success', summary: 'Confirmado', detail: 'Espero te haya servido', icon: 'pi pi-heart'});
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({severity: 'error', summary: 'Rechazada', detail: 'Estamos mejorando nuestros protocolos'});
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({severity: 'warn', summary: 'Cancelado', detail: 'Espero que vuelvas pronto'});
            break;
        }
      },
      key: "positionDialog"
    });
  }

  onAction() {
    this.visibleSidebar1 = true;
    this.unityInstance.SendMessage('SceneController', 'Hablar', 3);
  }

  onCloseMessage() {
    this.socketNotificationService.msg = [];
  }

  async getSuggetionsMenu(): Promise<void> {
    this.model = await this.sugmeService.getSuggetionMenu();
    this.bindCommandItems(this.model)
  }

  bindCommandItems(menus: SuggetionMenuModel[]): void {
    menus.forEach(o => {
      if (o.isMenu) {
        this.bindCommandItems(o.items || []);
      } else {
        o.command = this.callItem.bind(this);
      }
    });
  }

  callItem(event: any): void {
    console.log(event);
    if (event.item.type.id == typeMultimediaConst.LINK || event.item.type.id == typeMultimediaConst.PDF) {
      window.open(event.item.data, '_blank');
    }

    if (event.item.type.id == typeMultimediaConst.HTML) {
      this.visibleSidebar2 = true;
      this.showCard = true;
      this.msgs = event.item.data;
      this.confirmPosition('right');

    }
  }
}
