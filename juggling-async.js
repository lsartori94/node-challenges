const http = require('http');

const servers = process.argv.slice(2);
const results = [];
let total = 0;

function printAll() {
  results.forEach(item => console.log(item));
}

servers.forEach((server, i) => {
  http.get(server, response => {
    let buffer = '';
    response.setEncoding('utf8');

    response.on('error', _ => new Error);

    response.on('data', data => buffer += data);

    response.on('end', _ => {
      results[i] = buffer;
      total++;
      if (total === servers.length) {
        printAll();
      }
    });
  })
});
