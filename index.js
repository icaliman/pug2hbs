'use strict';

var lex = require('jade-lexer');
var parse = require('jade-parser');
var beautify = require('js-beautify').html;
var walk = require('./lib/walk');

module.exports = function (input, opts) {
  try {
    var ast = parse(lex(input));
    var html = walk(opts, ast);
    
  } catch (e) {
    throw new Error("NOTHING");
  }

  return beautify(html, {
    indent_size: 2,
    indent_handlebars: true
  });
};
