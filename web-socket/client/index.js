if (window.Worker) {
  const worker = new Worker('worker.js');
  let ws = new WebSocket('ws://localhost:3000');

  worker.onmessage(ws);
}
