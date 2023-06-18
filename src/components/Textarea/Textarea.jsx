import TextareaCss from './Textarea.module.css';

function Textarea({ placeholder, onChange, rows, customStyles = null }) {
    return (
        <div className={TextareaCss.wrapper}>
            <textarea
                placeholder={placeholder}
                className={`${TextareaCss.textArea} ${
                    customStyles ? customStyles.customTextArea : null
                }`}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
                name={placeholder}
                autoComplete='false'
            />
        </div>
    );
}

export default Textarea;
