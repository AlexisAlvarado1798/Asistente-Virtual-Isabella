import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SocketnotificationService} from '../../services/socketnotification.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-socketnotification-management',
  templateUrl: './socketnotification-management.component.html',
  styleUrls: ['./socketnotification-management.component.scss']
})
export class SocketnotificationManagementComponent implements OnInit {
  title = 'websocket-frontend';
  input = '';
  showCard = false;
  msg: any;
  isOpen = true;
  action: string = "cerrar";
  durationInSeconds = 5;

  constructor(private socketNotificationService: SocketnotificationService,
              private _snackBar: MatSnackBar,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }


  sendMessage() {
    if (this.input) {
      this.socketNotificationService.sendMessage(this.input);
      this.msg = this.input;
      this.messageService.add({
        severity: 'info',
        closable: true,
        life: 10000,
        summary: 'Info',
        detail: this.msg
      });
      this.showCard = true;
      this.input = '';
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.socketNotificationService.msg = [];
  }

  close() {
    this.showCard = false;
  }

  openSnackBar(message: string) {
    this.action = "cerrar";
    this._snackBar.open(message, this.action);
  }

}
