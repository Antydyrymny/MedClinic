import EmptySquareCheckBoxSvg from '../../assets/Pictogram/EmptySquareCheckBoxSvg';
import CheckedSquareCheckBoxSvg from '../../assets/Pictogram/CheckedSquareCheckBoxSvg';
import EmptyCircleCheckBoxSvg from '../../assets/Pictogram/EmptyCircleCheckBoxSvg';
import CheckedCircleCheckBoxSvg from '../../assets/Pictogram/CheckedCircleCheckBoxSvg';

function CheckboxButton({ square, checked }) {
    return square ? (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            {checked ? <CheckedSquareCheckBoxSvg /> : <EmptySquareCheckBoxSvg />}
        </svg>
    ) : (
        <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            {checked ? <CheckedCircleCheckBoxSvg /> : <EmptyCircleCheckBoxSvg />}
        </svg>
    );
}

export default CheckboxButton;
