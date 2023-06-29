import OptionSelectCss from './OptionSelect.module.css';

function OptionSelect({
    elementOptions,
    options,
    onClick,
    active,
    disabled = [],
    customStyles,
}) {
    return (
        <div
            className={`${OptionSelectCss.wrapper} ${
                customStyles ? customStyles.customOptionsSelectWrapper : null
            }`}
        >
            {elementOptions
                ? options.map((option) => (
                      <div
                          key={option.props.id}
                          onClick={
                              disabled.includes(option.props.id)
                                  ? null
                                  : () => onClick(option.props.id)
                          }
                          className={`${OptionSelectCss.tab} ${
                              customStyles ? customStyles.customOptionsSelectTab : null
                          } ${
                              active === option.props.id ? OptionSelectCss.active : null
                          } ${
                              active === option.props.id && customStyles
                                  ? customStyles.customOptionsSelectActive
                                  : null
                          } ${
                              disabled.includes(option.props.id)
                                  ? OptionSelectCss.disabled
                                  : null
                          } ${
                              disabled.includes(option.props.id) && customStyles
                                  ? customStyles.customOptionsSelectDisabled
                                  : null
                          }`}
                      >
                          {option.props.children}
                      </div>
                  ))
                : options.map((optionName, ind) => (
                      <div
                          key={ind}
                          onClick={
                              disabled.includes(optionName)
                                  ? null
                                  : () => onClick(optionName)
                          }
                          className={`${OptionSelectCss.tab} ${
                              customStyles ? customStyles.customOptionsSelectTab : null
                          } ${active === optionName ? OptionSelectCss.active : null} ${
                              active === optionName && customStyles
                                  ? customStyles.customOptionsSelectActive
                                  : null
                          } ${
                              disabled.includes(optionName)
                                  ? OptionSelectCss.disabled
                                  : null
                          } ${
                              disabled.includes(optionName) && customStyles
                                  ? customStyles.customOptionsSelectDisabled
                                  : null
                          }`}
                      >
                          {optionName}
                      </div>
                  ))}
        </div>
    );
}

export default OptionSelect;
