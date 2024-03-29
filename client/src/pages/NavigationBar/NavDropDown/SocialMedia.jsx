import YoutubeSvg from 'src/assets/Pictogram/YoutubeSvg';
import InstagramSvg from 'src/assets/Pictogram/InstagramSvg';
import TelegramSvg from 'src/assets/Pictogram/TelegramSvg';
import GithubSvg from '../../../assets/Pictogram/GithubSvg';
import LinkedInSvg from '../../../assets/Pictogram/LinkedInSvg';
import leetcode24px from '/src/assets/Pictogram/LeetcodeIcon24px.png';
import SocialMediaCss from './SocialMedia.module.css';

function SocialMedia({
    heading = 'Find Us on Social Media',
    personal = false,
    horizontal = false,
}) {
    return (
        <div
            className={`${SocialMediaCss.wrapper} ${
                horizontal ? SocialMediaCss.horizontal : null
            }`}
        >
            {heading && (
                <div
                    className={`${SocialMediaCss.heading} ${
                        horizontal ? SocialMediaCss.horizontalHeading : null
                    }`}
                >
                    {heading}
                </div>
            )}
            <div className={SocialMediaCss.icons}>
                {!personal && (
                    <>
                        <a
                            href={'https://www.youtube.com'}
                            target='_blank'
                            rel='noreferrer'
                            className={SocialMediaCss.link}
                        >
                            <YoutubeSvg />
                        </a>
                        <a
                            href={'https://www.instagram.com'}
                            target='_blank'
                            rel='noreferrer'
                            className={SocialMediaCss.link}
                        >
                            <InstagramSvg />
                        </a>
                        <a
                            href={'https://www.telegram.org'}
                            target='_blank'
                            rel='noreferrer'
                            className={SocialMediaCss.link}
                        >
                            <TelegramSvg />
                        </a>
                    </>
                )}
                {personal && (
                    <>
                        <a
                            href={
                                'https://www.linkedin.com/in/konstantin-danovich-30729b288/'
                            }
                            target='_blank'
                            rel='noreferrer'
                            className={SocialMediaCss.link}
                        >
                            <LinkedInSvg />
                        </a>
                        <a
                            href={'https://github.com/Antydyrymny'}
                            target='_blank'
                            rel='noreferrer'
                            className={SocialMediaCss.link}
                        >
                            <GithubSvg />
                        </a>
                        <a
                            href={'https://leetcode.com/KDanovich/'}
                            target='_blank'
                            rel='noreferrer'
                            className={SocialMediaCss.link}
                        >
                            <img src={leetcode24px} alt='leetcode icon' />
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}

export default SocialMedia;
