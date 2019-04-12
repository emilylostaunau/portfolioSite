/* Copyright 2019 Emily Lostaunau */
/**
 * Init
 * @author Emily Lostaunau
 */

var init = function(){

    'use strict';

    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

    var portfolioContainer = document.getElementById( 'portfolio' );

    if( !portfolioContainer ){
        console.log( 'no container found, returning.' );
        return;
    }

    requestAnimationFrame( function(){
        portfolioContainer.classList.add( 'content' );
    } );

};

window.addEventListener( 'DOMContentLoaded', function(){

    setTimeout( function(){
        init();
    }, 3000 );

}, false );