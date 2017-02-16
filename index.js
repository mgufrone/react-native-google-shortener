const axios = require('axios');
const BASE_URL = 'https://www.googleapis.com/urlshortener/v1/url';
let GOOGLE_API_KEY = '';

const setKey = (key) => {
  GOOGLE_API_KEY = key;
}

const getKey = () => GOOGLE_API_KEY;

const shorten = (longUrl) => {
  if (!longUrl || longUrl === '') {
    throw new Error(`first argument could not be empty`);
  }
  if (GOOGLE_API_KEY === '') {
    throw new Error(`please set your google api key via setKey`);
  }
  return axios.post(`${BASE_URL}?key=${GOOGLE_API_KEY}`, {
    longUrl
  })
  .catch(err => console.log(err));
}
module.exports = {
  setKey,
  getKey,
  shorten
}
