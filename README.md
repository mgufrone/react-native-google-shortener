[![Build Status](https://travis-ci.org/mgufrone/react-native-google-shortener.svg?branch=master)](https://travis-ci.org/mgufrone/react-native-google-shortener)

## Google URL Shortener

This package is supposed to communicate between API of Google URL Shortener to your app.


## Installation
You can run this package to use the package
```shell
npm install --save react-native-google-shortener
```

## How to use the package
The first thing you need to do is set the Google API key. You can obtain to your [Google Developer Console](https://console.developers.google.com).

```js
const { setKey, shorten } = require('react-native-google-shortener');

setKey('your google api key');
```

Then, to shorten your long URL, you can use this code.
```js
shorten('https://mgufron.com').then(response => {
  console.log('shorten url', response.id);
  console.log('long url', response.longUrl);
})
```

Full example code would be something like this
```js
const { setKey, shorten } = require('react-native-google-shortener');
setKey('your google api key');
shorten('https://mgufron.com').then(response => {
  // do your thing
  console.log('shorten url', response.id);
  console.log('long url', response.longUrl);
});
```

## Contribution
I love feedback so you can put your feedback to Issues or make a pull request to this package. I love to get any comments regarding my work. Happy Coding.
