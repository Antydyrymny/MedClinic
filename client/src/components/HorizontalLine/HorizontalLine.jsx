import HorizontalLineCss from './HorizontalLine.module.css';

function HorizontalLine({ color, height = '2px', withMargin = true }) {
    return (
        <div
            className={`${HorizontalLineCss.line} ${HorizontalLineCss[color]} ${
                withMargin ? HorizontalLineCss.withMargin : null
            }`}
            style={{ height: [height] }}
        />
    );
}

export default HorizontalLine;
