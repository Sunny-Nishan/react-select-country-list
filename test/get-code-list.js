'use strict'

var test = require('tap').test
var countries = require('../')()
var data = require('../data.json')

test('get all country labels with code as key', function (t) {
  var list = countries.getValueList()

  t.type(list, Object, 'country list is an object')
  t.equal(Object.keys(list).length, data.length, 'country list should be as many as countries')
  t.equal(list['is'], 'Iceland', 'IS code must be equal to Iceland')
  t.end()
})
