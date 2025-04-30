const os = require('os');
const fs = require('fs');

console.log('os.platform() :>> ', os.platform());
// console.log('os.arch() :>> ', os.arch());
// console.log('os.machine() :>> ', os.machine());

// error-first contract in node.js native modules (Callback API)
fs.readFile('./math.js', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    // console.log('err :>> ', err);
  } else {
    // console.log('data :>> ', data);
  }
});

const fileText = fs.readFileSync('./math.js', { encoding: 'utf-8' });
// console.log('fileText :>> ', fileText);

// "прочитати" директорію і вивести в консоль результат
fs.readdir('.', (err, files) => {
  if (err) {
    // console.log('err :>> ', err);
  } else {
    files
      .filter((f) => /^.*\.js$/.test(f))
      .forEach((f) =>
        fs.readFile(f, { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            // console.log('err :>> ', err);
          } else {
            // console.log('data :>> ', data);
          }
        })
      );
  }
});

// Переписати с синхронному вигляді
try {
  const files = fs.readdirSync('.');
  console.log('Files in directory: ', files);
  files
    .filter((f) => /^.*\.js$/.test(f))
    .forEach((f) => {
      try {
        const data = fs.readFileSync(f, { encoding: 'utf-8' });
        console.log('Data from file: ', f);
        // console.log(data);
      } catch (err) {
        // console.log('Error reading file :>> ', f, err);
      }
    });
} catch (error) {
  console.log('Error reading directory :>> ', error);
}

console.log('__filename :>> ', __filename);
console.log('__dirname :>> ', __dirname);

console.log('process :>> ', process.env);
