const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dir, (err, list) => {
  if (err) {
    throw new Error;
  }
  list.forEach(item => {
    const fileExt = path.extname(item);
    if (fileExt === ext) {
      console.log(item);
    }
  });
});
