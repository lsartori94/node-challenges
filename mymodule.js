const fs = require('fs');
const path = require('path');

function filterList(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    const result = list.filter(item => {
      const fileExt = path.extname(item);
      return (fileExt === `.${ext}`) ? true : false;
    });
    return callback(null, result);
  });
}

module.exports = filterList;
