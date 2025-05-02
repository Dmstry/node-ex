const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
const { readMovies } = require('./movies/movies');

// Promise
readMovies()
  .then((movies) => console.log(movies))
  .catch((err) => console.error(err));

// Sync
const dirContentSync = fs.readdirSync(__dirname);
console.log('dirContentSync :>> ', dirContentSync);

//  Async
fsPromises
  .readdir(__dirname)
  .then((files) => {
    const jsFiles = files.filter((file) => file.endsWith('.js'));
    return Promise.all(
      jsFiles.map((file) =>
        fsPromises
          .readFile(file, { encoding: 'utf-8' })
          .then((content) => ({ file, content }))
      )
    );
  })
  .then((contents) =>
    contents.forEach(({ file, content }) =>
      console.log(`File :>> ${file}\nContent :>>\n${content}\n`)
    )
  )
  .catch((err) => console.error(err));
