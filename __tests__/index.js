const test = require('unit.js');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const {setKey, getKey, shorten, setClientCallback} = require('./../index');

describe('unit testing', () => {
  it('should give me empty key', ()=>{
    test.value(getKey()).isEqualTo('');
  });
  it('should give me filled value', () => {
    setKey('blabla');
    test.value(getKey()).isEqualTo('blabla');
  });
  it('should fail if no key', () => {
    setKey('');
    test.exception(()=>shorten('long url')).is(new Error('please set your google api key via setKey'));
  });
  it('should fail if no longUrl', () => {
    setKey('');
    test.exception(()=>shorten('')).is(new Error('first argument could not be empty'));
  });
});

describe('shortened url', () => {
  // This sets the mock adapter on the default instance
  setClientCallback((instance)=>{
    const mock = new MockAdapter(instance);
    mock.onPost('/url').reply(200, {
      kind: 'alasdjfl',
      id: 'https://goo.gl/alksjd',
      longUrl: 'https://mgufron.com',
    });
  })
  it('should give me a proper and valid response', ()=>{
    setKey('allsjdfkljas');
    shorten('https://mgufron.com').then((response) => {
      // console.log(response);
      const {data, config} = response;
      test.value(data.hasOwnProperty('kind')).isEqualTo(true);
      test.value(data.hasOwnProperty('id')).isEqualTo(true);
      test.value(data.hasOwnProperty('longUrl')).isEqualTo(true);
      test.value(data.id).isEqualTo('https://goo.gl/alksjd');
      test.value(data.longUrl).isEqualTo("https://mgufron.com");
      test.value(config.params.key).isEqualTo('allsjdfkljas');
      test.value(JSON.parse(config.data).longUrl).isEqualTo('https://mgufron.com');
      test.value(config.method).isEqualTo('post');
    }).catch(err => console.log(err));
  });
});

describe('statistics', () => {

});
