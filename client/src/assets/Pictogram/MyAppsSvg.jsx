import React from 'react';

function MyAppsSvg({ width = '1.25rem', height = '1.25rem' }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            stroke='#625f6e'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <polyline points='9 11 12 14 22 4'></polyline>
            <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'></path>
        </svg>
    );
}

export default MyAppsSvg;
