const {setKey, getKey, shorten} = require('./../index');


test('key should be empty', () => {
  expect(getKey()).toBe('');
});

test('key should not be empty after set it out', () => {
  setKey('blabla');
  expect(getKey()).toBe('blabla');
});

test('shorten should fail if no key', () => {
  setKey('');
  expect(()=>shorten('long url')).toThrowError('please set your google api key via setKey');
});

test('shorten should fail if no longUrl', () => {
  setKey('');
  expect(()=>shorten('')).toThrowError('first argument could not be empty');
});
test('shorten should fail if no longUrl', () => {
  setKey('AIzaSyBRN-TkF7nEPq0v3HqGBSMaXsxItAXyu6c');
  // fetch.mockResponse(JSON.stringify({
  //   "kind": "urlshortener#url",
  //   "id": "https://goo.gl/94xC46",
  //   "longUrl": "https://mgufron.com/"
  // }));
  shorten('https://mgufron.com').then(response => {
    expect(response.hasOwnProperty('kind')).toBe(true);
    expect(response.hasOwnProperty('id')).toBe(true);
    expect(response.hasOwnProperty('longUrl')).toBe(true);
    expect(response.longUrl).toBe("https://mgufron.com");
  });
});
