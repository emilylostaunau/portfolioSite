import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class SocialIcons extends Component{

    render(){
        console.log( 'social', this.props.social);
        const { alt, image, link } = this.props.social;
        return(
            <a href={link}><img src={image} style={{ width: 20, height: 20 }} alt={alt}/></a>
        )
    }
}

class Social extends Component{

    render(){
        return(
            <div>
                <h2>Social Profiles</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map( SOCIAL_PROFILES => {
                            return ( 
                                <SocialIcons key={SOCIAL_PROFILES.id} social={SOCIAL_PROFILES} />
                            );
                        } )
                    }
                </div>
            </div>
        )
    }

}

export default Social;