const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  let buffer = '';
  response.setEncoding('utf8');

  response.on('error', _ => new Error);

  response.on('data', data => buffer += data);

  response.on('end', _ => {
    console.log(buffer.length);
    console.log(buffer);
  });
})
