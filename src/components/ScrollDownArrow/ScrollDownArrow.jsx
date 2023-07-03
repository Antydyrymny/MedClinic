import { Link as ScrollLink } from 'react-scroll';
import DropDownSvg from '../../assets/Pictogram/DropDownSvg';
import ScrollDownArrowCss from './ScrollDownArrow.module.css';

function ScrollDownArrow({
    to,
    offset,
    duration = 800,
    smooth = true,
    svgColor = '#14D9CF',
}) {
    return (
        <div className={ScrollDownArrowCss.arrowWrapper}>
            <div className={ScrollDownArrowCss.arrow} onClick={null}>
                <ScrollLink
                    to={to}
                    spy={true}
                    smooth={smooth}
                    offset={offset}
                    duration={duration}
                >
                    <DropDownSvg color={svgColor} />
                </ScrollLink>
            </div>
        </div>
    );
}

export default ScrollDownArrow;
