const mm = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

function printArray(err, arr) {
  if (err) {
    throw new Error;
  }
  arr.forEach(element => {
    console.log(element);
  });
}

mm(dir, ext, printArray);
