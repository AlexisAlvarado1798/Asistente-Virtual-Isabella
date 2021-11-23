import {Injectable} from '@angular/core';
// @ts-ignore
declare var SockJS;
// @ts-ignore
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class SocketnotificationService {
  stompClient: any;
  msg = [];
  showCard: any;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;

    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/message', (message: any) => {
        if (message.body) {
          // @ts-ignore
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message: any) {
    this.stompClient.send('/app/send/message', {}, message);
  }
}
