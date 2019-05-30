// self.loadScripts('https://unpkg.com/axios/dist/axios.min.js');
// self.loadScripts('./test.js');
onmessage = function(e) {
  importScripts('axios.js');

  // const axios = require('axios');

  async function ajax() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    console.log(res);
  }

  ajax();
};
