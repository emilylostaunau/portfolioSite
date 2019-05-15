

directorySystem = ( function( dir ){ 

    'use strict';

    dir.remove = function( name ){

        if( !name ){
            console.warn( 'no name provided, returning' );
            return;
        }

        requestAnimationFrame( function(){
            document.getElementById( DIR_PREPEND + name.replace( / /g, '-' ) ).remove();
        } );

    };

    return dir;

} )( directorySystem || {} );

