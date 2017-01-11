'use strict';

var vm = require('./server/validator.js')
var test = require('tape');

test("validator accepts valid email, a scale of 15 and positive feedback", function(t) {
  var actual = vm.validator({feedback: 'amazing awesome smart student so good', scale: 15, email: 'valid@email'});
  var expected = true;
    t.equal(actual, expected);
    t.end();
});

test("validator rejects unfilled email, a scale of 15 and positive feedback", function(t) {
  var actual = vm.validator({feedback: 'amazing awesome smart student so good', scale: 15, email: 'notvalid'});
  var expected = false;
    t.equal(actual, expected);
    t.end();
});

test("validator rejects valid email, a scale of 9 and positive feedback", function(t) {
  var actual = vm.validator({feedback: 'amazing awesome smart student so good', scale: 9, email: 'valid@email'});
  var expected = false;
    t.equal(actual, expected);
    t.end();
});
