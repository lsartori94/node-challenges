const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  let body = [];

  if (req.method !== 'POST') {
    return res.end('Send a POST request\n');
  }

  req.on('error', err => console.error(err))
    .on('data', chunk => body.push(chunk))
    .on('end', _ => {
      const result = Buffer.concat(body).toString();

      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write(result.toUpperCase());
      res.end();
    });
});

server.listen(port);
