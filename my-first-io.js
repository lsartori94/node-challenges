const fs = require('fs');

const pathToFile = process.argv[2];

const buffer = fs.readFileSync(pathToFile);
const str = buffer.toString();

const split = str.split('\n');

console.log(split.length - 1);
