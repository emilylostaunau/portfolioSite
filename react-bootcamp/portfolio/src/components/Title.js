import React, { Component } from 'react';

const TITLES = [
    'a software engineer',
    'a user experience designer',
    'a music lover',
    'a learner of all things',
    'a dressage enthusiast'
]

class Title extends Component {

    state = { 
        titleIndex  : 0, 
        fadeIn      : true 
    };

    animateTitle = () => {
        this.titleInterval = setInterval( () => {

            const titleIndex = ( this.state.titleIndex + 1 ) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true});
            setTimeout( () => this.setState({ fadeIn : false }), 2000 );

        }, 4000 );
    }

    componentDidMount(){
        this.timeout = setTimeout( () => this.setState({ fadeIn : false }), 2000 );
        this.animateTitle();
    }

    componentWillUnmount = () => {
        clearInterval( this.titleInterval );
        clearTimeout( this.timeout );
    }

    render(){
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[this.state.titleIndex];

        return(
            <p className={fadeIn ? 'titleFadeIn' : 'titleFadeOut'}>I am {title}</p>
        )

    }

}

export default Title;