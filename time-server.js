const net = require('net');

const portNumber = process.argv[2];

const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = `${date.getHours()}:${date.getMinutes()}`;
  const formattedDay = day < 10 ? `0${day}` : day;

  const data = `${year}-${month}-${formattedDay} ${hour}\n`;

  socket.write(data);
  socket.end();
});

server.listen(portNumber);
