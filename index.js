var parser = require('vega-parser');
var view = require('vega-view');
var spec = require('./spec.json')

var parsed = parser.parse(spec);
var v = new view.View(parsed).run()

console.log(v._scenegraph)
