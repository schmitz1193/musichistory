requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min", 
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap",
    "lodash": "../lib/bower_components/lodash/lodash.min"
  },

shim: {
	"bootstrap": ["jquery"]
}
});

require(["bootstrap", 'songs'], 
	function(songs) {

});



