/* Copyright 2019 Emily Lostaunau */
/**
 * Init
 * @desc Initialize functionality for the page.
 * @author Emily Lostaunau
 */

var init = ( function(){

    'use strict';

    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

    var _getPortfolioContainer = function(){

        return document.getElementById( 'portfolio' );

    };

    var displayOverlay = function( item ){



    };

    var insertEventListener = function( item ){

        item.addEventListener( 'click', function() {
            console.log( 'add click event', item );
            overlay.open( item );
        }, false );

    };

    var bindSectionItems = function(){

        var items = document.getElementsByClassName( 'section__gridItem' );

        for( var i = 0, item; item = items[i]; i++ ){
            if( !item.getAttribute( 'data-item-bound' ) ){
                item.setAttribute( 'data-item-bound', 'true' );
                insertEventListener( item );
            }
        }

    };

    var getSectionName = function( item ){

        var name = document.createElement( 'h3' );
        name.className = 'section__name';
        name.innerHTML = item.name;

        return name;

    };

    var getSectionJobTitle = function( item ){

        var jobTitle = document.createElement( 'h4' );
        jobTitle.className = 'section__jobTitle';
        jobTitle.innerHTML = item.jobTitle;

        return jobTitle;

    };

    var getSectionDesc = function( item ){

        var desc = document.createElement( 'p' );
        desc.className = 'section__desc';
        desc.innerHTML = item.desc;

        return desc;

    };

    var getSectionGridItem = function( gridItem ){

        var item = document.createElement( 'div' );
        item.className = 'section__gridItem';
        item.style.backgroundImage = 'url( images/' + gridItem.file + ' )';
        item.setAttribute( 'data-item-filepath', 'images/' + gridItem.file );
        item.setAttribute( 'data-item-desc', gridItem.desc );

        return item;

    };

    var getSectionGrid = function( item ){

        var grid = document.createElement( 'div' );
        grid.className = 'section__grid';

        for( var i = 0, gridItem; gridItem = item.items[i]; i++ ){
            grid.appendChild( getSectionGridItem( gridItem ) );
        }

        return grid;

    };

    var applySection = function( section ){

        if( !section ){
            return;
        }

        var portfolioContainer = _getPortfolioContainer();

        requestAnimationFrame( function(){
            portfolioContainer.appendChild( section );

            requestAnimationFrame( function(){
                bindSectionItems();
            } );

        } );

    };

    var renderSection = function( item ){

        var section = document.createElement( 'section' );
        section.id = 'section__' + item.name.toLowerCase().replace( / /g, '' );
        section.className = 'page__section';

        section.appendChild( getSectionName( item ) );
        section.appendChild( getSectionJobTitle( item ) );
        section.appendChild( getSectionDesc( item ) );
        section.appendChild( getSectionGrid( item ) );

        applySection( section );

    };

    var displayItems = function(){

        if( !portfolioData ){
            console.log( 'data not available, returning.' );
            return;
        }

        for( var i = 0, item; item = portfolioData[i]; i++ ){
            renderSection( item );
        }

    };

    var applyHeader = function( headerContainer ){

        var portfolioContainer = _getPortfolioContainer();

        if( !headerContainer || !portfolioContainer ){
            return;
        }

        requestAnimationFrame( function(){
            portfolioContainer.appendChild( headerContainer );
        } );

    };

    var renderHeader = function(){

        var headerContainer = document.createElement( 'header' );
        headerContainer.id = 'header';
        headerContainer.innerHTML = '<h1 id="header__title">emily lostaunau<br>' +
            '<span id="header__titleSub">Frontend Web Developer &#183; UI Engineer &#183; UX Design</span></h1>';

        applyHeader( headerContainer );

    };

    var animateIntro = function(){

        var portfolioContainer = _getPortfolioContainer();

        if( !portfolioContainer ){
            console.log( 'no container found, returning.' );
            return;
        }

        requestAnimationFrame( function(){
            portfolioContainer.classList.add( 'content' );
            renderHeader();
            displayItems();
        } );
    };

    return animateIntro;

} )();

window.addEventListener( 'DOMContentLoaded', function(){

    setTimeout( function(){
        init();
    }, 3000 );

}, false );