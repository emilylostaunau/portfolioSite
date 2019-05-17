import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


const SocialIcon = props => {
    const { alt, image, link } = props.social;

    return(
        <a href={link} style={{marginRight: 20}}><img src={image} style={{ width: 35, height: 35 }} alt={alt}/></a>
    )
};


const Social = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map( SOCIAL_PROFILES => ( 
                    <SocialIcon key={SOCIAL_PROFILES.id} social={SOCIAL_PROFILES} />
                ) )
            }
        </div>
    </div>
)

export default Social;