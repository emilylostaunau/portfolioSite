/* Copyright 2019 Emily Lostaunau */
/**
 * Overlay
 * @author Emily Lostaunau
 */

overlay = ( function( overlay ){

    'use strict';

    var _getOverlayElem = function(){

        return document.getElementById( 'overlay' );

    };

    var bindCloseOverlay = function(){

        var overlayElem = _getOverlayElem();

        overlayElem.addEventListener( 'click', overlay.close, false );

        window.addEventListener( 'keyup', function(e){

            if( e.keyCode === 27 ){
                overlay.close();
            }

        }, false );


    };

    var applyOverlay = function( overlayElem ){

        if( !overlayElem ){
            return;
        }

        overlay.close();

        requestAnimationFrame( function(){
            document.body.appendChild( overlayElem );

            requestAnimationFrame( function(){
                bindCloseOverlay();
            } );
        } );


    };

    var renderOverlay = function( item ){

        var overlayElem = document.createElement( 'div' );
        overlayElem.id = 'overlay';

        var img = document.createElement( 'img' );
        img.src = item.getAttribute( 'data-item-filepath' );
        img.id = 'overlay__img';
        overlayElem.appendChild( img );

        var span = document.createElement( 'span' );
        span.id = 'overlay__desc';
        span.innerHTML = item.getAttribute( 'data-item-desc' );
        overlayElem.appendChild( span );

        applyOverlay( overlayElem );

    };

    var closeOverlay = function(){

        var overlayElem = _getOverlayElem();

        if( !overlayElem ){
            return;
        }

        requestAnimationFrame( function(){
            overlayElem.remove();
        } );

    };

    // Make private methods public
    overlay.open = renderOverlay;
    overlay.close = closeOverlay;

    return overlay;

} )( {} );

