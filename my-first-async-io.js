const fs = require('fs');

const pathToFile = process.argv[2];

fs.readFile(pathToFile,
  (err, data) => {
    if (err) {
      throw new Error;
    }
    const str = data.toString();

    const split = str.split('\n');

    console.log(split.length - 1);
});
