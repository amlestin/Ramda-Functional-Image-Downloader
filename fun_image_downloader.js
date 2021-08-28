import terminalImage from 'terminal-image';
import got from 'got'
import fs from 'fs'
import R from 'ramda'

// Gets and prints the image at a given link
const getAndPrint = async link => {
  try {
    await got(link, { encoding: null }).then(async data => {
      await terminalImage.buffer(data.body).then(imageString => {
        console.log(imageString);
      });
    });
  } catch (error) {
    console.error(error);
  }
};

let selectLink = () => process.argv.slice(1)[1].toString();

// Selects an image from inputFile depending on user's argument and prints it to console
const printImage = () =>
  R.pipe(
    selectLink,
    getAndPrint
  )();

printImage();
