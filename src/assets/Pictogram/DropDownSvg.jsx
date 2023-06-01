function DropDownSvg({ color = '#A6ACB4' }) {
    return (
        <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.68774 5.51986L4.41727 6.2038L8 9.5626L11.5827 6.2038L12.3123 5.51986L13.6801 6.97893L12.9506 7.66287L8.68394 11.6629L8 12.3041L7.31606 11.6629L3.04939 7.66287L2.31985 6.97893L3.68774 5.51986Z'
                fill={color}
            ></path>
        </svg>
    );
}

export default DropDownSvg;
