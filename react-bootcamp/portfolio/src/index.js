import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css'; 

ReactDOM.render( 
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>, 
    document.getElementById( 'root' ) 
);

/* 
new Promise( (resolve, reject ) => {

    return reject( new Error('no bears' ));

    setTimeout( () => {
        console.log('bears');
        resolve( 'bears, beets, battlestar' );
    }, 2000 );

} )
.then( ( quote ) => {
    console.log( quote);
})
.catch( error => console.log( 'error', error ));

 */