const { readFileSync } = require('fs');

const syncReadFile = (filename) => {
  const result = readFileSync(filename, 'utf-8');

  return  result.split(/\r?\n/);


}

module.exports = syncReadFile
