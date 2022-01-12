import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { userPath,
fileExtension,
fileFolder,
getLinks,
 } from './api.js'

//Función que une todo
export const mdLinks = (userPath, option) => {
  return new Promise((resolve, reject) => {
    const links = getLinks(userPath);
    if (option.validate) {
      resolve(validateLinks(links));
    } else {
      resolve(links);
    }
    reject(new TypeError('error'));
  });
};
