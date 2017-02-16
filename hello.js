const { shorten, setKey } = require('./index');

setKey('AIzaSyBRN-TkF7nEPq0v3HqGBSMaXsxItAXyu6c');

shorten('https://mgufron.com').then(response => console.log(response));
