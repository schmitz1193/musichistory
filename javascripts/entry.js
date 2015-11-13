requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min", 
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  },

  shim: {
	"bootstrap": ["jquery"],
	"firebase": {
  		exports: "Firebase"
  	}
	}

});

require(["bootstrap", 'songs'], 
	function(songs) {

});


// requirejs.config({
//   baseUrl: './javascripts',
//   paths: {
//     'q': '../lib/bower_components/q/q'
//   }
// });