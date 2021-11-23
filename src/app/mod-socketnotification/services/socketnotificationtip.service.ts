let ws = null;
window.onload = function () {
  WebSocketTest();
}

function WebSocketTest() {
  if ("WebSocket" in window) {
    alert(" Browser support WebSocket!");
// Open one web socket
    ws = new WebSocket("ws://127.0.0.1:8080/websocket");
    ws.onmessage = function (evt) {
      let received_msg = evt.data;
      alert(" Receive push data ：" + received_msg);
    };
    ws.onclose = function () {
// close websocket
      alert(" Connection closed ...");
    };
  } else {
// Browser does not support WebSocket
    alert(" Browser does not support WebSocket!");
  }
}
