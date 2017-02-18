const axios = require('axios');
const BASE_URL = 'https://www.googleapis.com/urlshortener/v1/url';
const baseURL = 'https://www.googleapis.com/urlshortener/v1';
let GOOGLE_API_KEY = '';
let clientCallback = undefined;

const createClient = () => {
  return axios.create({
    baseURL,
    timeout: 10 * 1000,
    params: {
      key: getKey()
    }
  });
}

const setClientCallback = (callback = () => {}) => {
  clientCallback = callback;
}

const setKey = (key) => {
  GOOGLE_API_KEY = key;
}

const getKey = () => GOOGLE_API_KEY;
const checkClientKey = () => {
  if (getKey() === '') {
    throw new Error(`please set your google api key via setKey`);
  }
}

const shorten = (longUrl) => {
  if (!longUrl || longUrl === '') {
    throw new Error(`first argument could not be empty`);
  }
  checkClientKey();
  const client = createClient();
  if (clientCallback) {
    clientCallback(client);
  }
  return client.post('/url', {
    longUrl
  }).then(response => Promise.resolve(clientCallback ? response : response.data));
}

const expand = (shortUrl, projection = false) => {
  if (!shortUrl || shortUrl === '') {
    throw new Error(`first argument could not be empty`);
  }
  checkClientKey();
  const client = createClient();
  if (clientCallback) {
    clientCallback(client);
  }
  return client.get('/url', {
    params: Object.assign({ shortUrl }, projection ? {projection: 'FULL'} : {})
  }).then(response => Promise.resolve(clientCallback ? response : response.data));
};
module.exports = {
  setKey,
  getKey,
  expand,
  shorten,
  setClientCallback
}
