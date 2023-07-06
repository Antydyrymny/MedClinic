function BackArrowSvg({ color = '#545A66' }) {
    return (
        <svg
            width='8'
            height='14'
            viewBox='0 0 8 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.89211 1.62107L7.20816 2.35061L2.84936 7L7.20816 11.6494L7.8921 12.3789L6.43303 13.7468L5.74909 13.0173L0.749089 7.68394L0.107895 7L0.749089 6.31606L5.74909 0.982726L6.43303 0.253189L7.89211 1.62107Z'
                fill={color}
            ></path>
        </svg>
    );
}

export default BackArrowSvg;
