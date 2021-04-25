const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');
const config = require('../esbuild.config');

const writeFile = async (filepath, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, 'utf8', (err) => {
      if (err) reject(err);
      resolve();
    });
  });

const build = async () => {
  try {
    await esbuild.build(config);
    await writeFile(path.resolve(__dirname, '../build/index.html'), `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
          body {
            background-color: #333;
            display: grid;
            place-items: center;
            height: 100vh;
            width: 100vw;
            padding: unset;
            margin: unset;
          }
          h1 {
            color: #fff;
            font-weight: bold;
          }
        </style>
      </head>
      <body bgcolor="#333">
        <h1>Hello, Github Actions! 🚀</h1>
        <script src="./bundle.js"></script>
        <script>
          bundle.run();
        </script>
      </body>
      </html>
    `);
    console.log('build successfully! 🎉');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

build();
