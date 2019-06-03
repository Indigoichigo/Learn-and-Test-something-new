//import express 和 ws 套件
const express = require('express');
const SocketServer = require('ws').Server;

//指定開啟的 port
const PORT = 3000;

//創建 express 的物件，並綁定及監聽 3000 port ，且設定開啟後在 console 中提示
const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`),
);

//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server });

wss.on('connection', ws => {
  console.log('Client connected');

  //固定送最新時間給 Client
  // const sendNowTime = setInterval(() => {
  //   ws.send(String(new Date()));
  // }, 1000);

  ws.on('message', data => {
    console.log('-value-', data);
    console.log('-type-', typeof data);
    const t = Number(data);
    console.log(t);
    if (data === '0') {
      console.log('-0-');
      ws.send('000');
    }

    if (data === '1') {
      console.log('-1-');
      ws.send('111');
    }

    if (data === '2') {
      console.log('-2-');
      ws.send('222');
    }

    // ws.send(data);
  });

  ws.on('close', () => {
    //連線中斷時停止 setInterval
    // clearInterval(sendNowTime);
    console.log('Close connected');
  });
});
