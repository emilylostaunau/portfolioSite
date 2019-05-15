import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a user experience designer',
    'a music lover',
    'a learner of all things',
    'a dressage enthusiast'
]

class Title extends Component {

    state = { titleIndex: 0 };

    animateTitle = () => {
        setInterval( () => {

            const titleIndex = ( this.state.titleIndex + 1 ) % TITLES.length;
            this.setState({ titleIndex });

        }, 4000 );
    }

    componentDidMount(){

        console.log( 'title component has mounted' );
        this.animateTitle();

    }

    render(){

        const title = TITLES[this.state.titleIndex];

        return(
            <p>I am {title}</p>
        )

    }

}

export default Title;