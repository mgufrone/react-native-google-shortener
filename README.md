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
const { setKey, shorten, expand } = require('react-native-google-shortener');

setKey('your google api key');
```

### Shorten URL
Then, to shorten your long URL, you can use this code.
```js
shorten('https://mgufron.com').then(response => {
  console.log('shorten url', response.id);
  console.log('long url', response.longUrl);
})
```

### Expand Shortened URL

```js
// first argument should shortened url
expand('https://goo.gl/').then(response => {
  console.log(response.id);
  console.log(response.longUrl);
});
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
expand('https://goo.gl/alskd').then(response => {
  console.log(response.id);
  console.log(response.longUrl);
  console.log(response.status);
});
// include projection or analytics
expand('https://goo.gl/alkaslk').then(response => {
  console.log(response.id);
  console.log(response.longUrl);
  console.log(response.status);
  console.log(response.analytics);
})
```

## Contribution
I love feedback so you can put your feedback to Issues or make a pull request to this package. I love to get any comments regarding my work. Or you can click donate button below. Happy Coding.

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UCLBQU8PV7C3C)
