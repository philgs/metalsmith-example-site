'use strict';

let fs = require( 'fs' );
let path = require( 'path' );
let mkdirp = require( 'mkdirp' );
let metalsmithReplacer = require( './metalsmithReplacer' );

module.exports = function( outputDir, metadataObject ) {
    mkdirp.sync( outputDir );

    let keys = Object.keys( metadataObject );
    for ( let key of keys ) {
        let json = JSON.stringify( metadataObject[ key ], metalsmithReplacer, 2 );
        let filename = key + '.json';
        let filePath = path.resolve( outputDir, filename );
        fs.writeFileSync( filePath, json );
    }
};
