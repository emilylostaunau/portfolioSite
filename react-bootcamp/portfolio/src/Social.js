import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class SocialIcon extends Component{

    render(){
        const { alt, image, link } = this.props.social;
        return(
            <a href={link} style={{marginRight: 20}}><img src={image} style={{ width: 35, height: 35 }} alt={alt}/></a>
        )
    }
}

class Social extends Component{

    render(){
        return(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map( SOCIAL_PROFILES => {
                            return ( 
                                <SocialIcon key={SOCIAL_PROFILES.id} social={SOCIAL_PROFILES} />
                            );
                        } )
                    }
                </div>
            </div>
        )
    }

}

export default Social;