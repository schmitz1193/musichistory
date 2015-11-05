requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min", 
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap"
  },

shim: {
	"bootstrap": ["jquery"]
}
});

require(["bootstrap", 'songs'], 
	function(songs) {

});



