var matcha = require('..')
  , suite = new matcha.Suite({
    duration: 2000
  });

suite.bench('basic 1', function (next) {
  var arr = [];
  arr.push({ hello: 'world' });
  next();
});

module.exports = suite;