const input1 = document.querySelector('.input1');

if (window.Worker) {
  input1.addEventListener('focus', do1);

  const worker = new Worker('worker.js');

  function do1() {
    worker.postMessage('a');
  }

  worker.onmessage = function(e) {
    console.log(e.data);
  };
} else {
  console.log('no worker');
}
