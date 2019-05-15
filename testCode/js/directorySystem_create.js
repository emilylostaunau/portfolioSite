
directorySystem = ( function( dir ){ 

    'use strict';

    var createDirectoryHome = function(){

        document.body.insertAdjacentHTML( 'beforeend', '<div id="' + DIRECTORY_HOME + '"><h1>Directories</h1></div>' );

    };

    var createNewDirectory = function( name, parent ){

        var subChar = '';
        if( parent ){
            var parentDir = document.getElementById( DIR_PREPEND + parent.replace( / /g, '-' ) ).getAttribute( 'data-dir-label' );
            subChar = parentDir.substr( 0, parentDir.indexOf(' ') ) + '- ';
        }

        var newDir = document.createElement( 'div' );
        newDir.id = DIR_PREPEND + name.replace( / /g, '-' );
        newDir.setAttribute( 'data-dir-label', subChar + name.replace( / /g, '-' ) );
        newDir.innerHTML = subChar + name;

        return newDir;

    };

    dir.create = function( name, parent ){

        if( !name ){
            console.warn( 'no name provided, returning' );
            return;
        }

        //create
        var directoryHome = document.getElementById( DIRECTORY_HOME );
        if( !directoryHome ){
            createDirectoryHome();
        }

        if( parent ){

            var parentDir = document.getElementById( DIR_PREPEND + parent.replace( / /g, '-' ) );
            requestAnimationFrame( function(){
                parentDir.appendChild( createNewDirectory( name, parent ) );
            } );
        }
        else{
            directoryHome = document.getElementById( DIRECTORY_HOME );

            requestAnimationFrame( function(){
                directoryHome.appendChild( createNewDirectory( name ) );
            } );
        }

    };

    return dir;

} )( directorySystem || {} );

