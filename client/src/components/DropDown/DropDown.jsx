import { useState } from 'react';
import DropDownSvg from 'src/assets/Pictogram/DropDownSvg';
import DropDownCss from './DropDown.module.css';

function DropDown({
    options,
    activeId,
    onClick,
    customStyle = null,
    customOptions = null,
    customActive = null,
}) {
    const styles = customStyle || DropDownCss;
    const [isChoosing, setIsChoosing] = useState(false);

    return (
        <div className={styles.wrapper} onClick={() => setIsChoosing(!isChoosing)}>
            <div className={styles.mainBar}>
                <div className={styles.activeOption}>
                    {customActive ||
                        options.find((option) => option.id === activeId)?.name}
                </div>
                <div
                    className={`${styles.arrow} ${
                        isChoosing ? styles.arrowChoosing : null
                    }`}
                >
                    <DropDownSvg />
                </div>
            </div>
            {!isChoosing ? null : (
                <div className={styles.options}>
                    {customOptions ||
                        options.map((option, ind) => (
                            <div
                                key={ind}
                                className={styles.optionBar}
                                onClick={onClick(option)}
                            >
                                {option.name}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
