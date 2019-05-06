import emailIcon from '../assets/email_icon.png';
import gitHubIcon from '../assets/github_icon.png';
import linkedInIcon from '../assets/linkedin_icon.png';
import twitterIcon from '../assets/twitter_icon.png';

const SOCIAL_PROFILES = [
    {
        id : 1,
        title : 'Email',
        alt : 'Email me!',
        image : emailIcon,
        link : 'mailto:emipouu@gmail.com'
    },
    {
        id : 2,
        title : 'GitHub',
        alt : 'Check out my GitHub Repo.',
        image : gitHubIcon,
        link : 'http://www.github.com/emipou'
    },
    {
        id : 3,
        title : 'LinkedIn',
        alt : 'Mhy LinkedIn page.',
        image : linkedInIcon,
        link : 'http://www.linkedin.com/emipou'
    },
    {
        id : 4,
        title : 'Twitter',
        alt : 'I\'m not really on Twitter.',
        image : twitterIcon,
        link : 'http://www.twitter.com/emipou'
    },
];

export default SOCIAL_PROFILES;
