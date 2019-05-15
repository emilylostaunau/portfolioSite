import React, { Component } from 'react';
import Projects from './Projects';
import Social from './Social';
import profile from './assets/profile_pic.jpg';
import Title from './Title.js';


class App extends Component {

    state = { displayBio : false };

   /* constructor(){
        super();
        this.state = { displayBio: false };
        console.log( 'component', this );

        this.toggleDisplayBio = this.toggleDisplayBio.bind( this );
    }*/


    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio } );
    }

    render(){
        return(
            <div>
            	<img src={profile} alt="Emily Lostaunau" id="profilePic"/>
                <h1>Hello!</h1>
                <p>My name is Emily. </p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Los Angeles and code every day.</p>
                            <p>My fave language is JS, and I am learning React</p>
                            <p>I also love music, art and dressage</p>
                            <button onClick={this.toggleDisplayBio}>show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <Social />
            </div>
        )
    }

}

export default App;

