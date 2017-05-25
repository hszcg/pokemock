var express = require( 'express' );
var path = require( 'path' );

// render pokemock specific swagger ui
module.exports = express.Router().use(
  express.static( __dirname + '/../../public' ),
  express.static( __dirname + '/../../node_modules/swagger-ui-dist' )
);
