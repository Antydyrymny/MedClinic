import logout from './logout24px.png';

function LogoutSvg({ onClick }) {
    return (
        <svg
            style={{ cursor: 'pointer' }}
            onClick={onClick}
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <rect
                x='0.5'
                y='0.5'
                width='39'
                height='39'
                rx='19.5'
                stroke='url(#paint1_linear_185_968)'
            ></rect>
            <defs>
                <linearGradient
                    id='paint0_linear_185_968'
                    x1='9.5'
                    y1='20.1661'
                    x2='30.485'
                    y2='20.1661'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#2F7EEB'></stop>
                    <stop offset='1' stopColor='#18BEE7'></stop>
                </linearGradient>
                <linearGradient
                    id='paint1_linear_185_968'
                    x1='1.47359e-09'
                    y1='20.3174'
                    x2='40'
                    y2='20.3174'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#5C58F2'></stop>
                    <stop offset='1' stopColor='#2FC5EE'></stop>
                </linearGradient>
            </defs>
            <image
                x='8'
                y='8'
                width='24'
                height='24'
                xlinkHref={logout}
                alt='logout'
            ></image>
        </svg>
    );
}

export default LogoutSvg;
