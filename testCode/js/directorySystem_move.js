

directorySystem = ( function( dir ){ 

    'use strict';

    var moveDir = function( name, newParent ){

        //TODO: Resolve if moving subdir containing subdirs
        //      This currently has not been tested
        
        var parentDir = ( newParent ? DIR_PREPEND + newParent : DIRECTORY_HOME ).replace( / /g, '-' );

        if( !document.getElementById( DIR_PREPEND + name ) ){
            console.warn( 'directory does not exist, returning' );
            return;
        }

        requestAnimationFrame( function(){
            document.getElementById( parentDir ).appendChild( document.getElementById( DIR_PREPEND + name ) );
            var prependHyphens = newParent ? parentDir.substr( 0, parentDir.indexOf(' ') ) + '- ' : '';
            document.getElementById( DIR_PREPEND + name ).textContent = prependHyphens + name;
            document.getElementById( DIR_PREPEND + name ).setAttribute( 'data-dir-label', prependHyphens + name );
        } );
        
    };

    dir.move = function( name, newParent ){

        if( !name ){
            console.warn( 'no name provided, returning' );
            return;
        }

        moveDir( name, newParent );

    };

    return dir;

} )( directorySystem || {} );

