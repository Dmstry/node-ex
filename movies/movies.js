const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(__dirname, 'movies.txt');

function readMovies() {
  return fs.readFile(filePath, { encoding: 'utf-8' });
}

module.exports = { readMovies };
