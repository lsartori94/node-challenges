const http = require('http');
const url = require('url');

const port = process.argv[2];



const server = http.createServer((req, res) => {

  if (req.method !== 'GET') {
    return res.end('Send a GET request\n');
  }

  function processParse(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const date = new Date(queryObject.iso);
    const result = {};

    result.hour = date.getHours();
    result.minute = date.getMinutes();
    result.second = date.getSeconds();

    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end();
  }

  function processTime() {
    const queryObject = url.parse(req.url, true).query;
    const date = new Date(queryObject.iso);
    const result = {};

    result.unixtime = date.getTime();

    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end();
  }

  switch (url.parse(req.url,true).pathname) {
    case '/api/parsetime':
      processParse(req, res);
      break;

    case '/api/unixtime':
      processTime(req, res);
      break;

    default:
      return res.end('Endpoint does not exists\n');
      break;
  }
});

server.listen(port);
