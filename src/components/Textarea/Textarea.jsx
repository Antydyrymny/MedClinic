import TextareaCss from './Textarea.module.css';

function Textarea({ placeholder, onChange, rows }) {
    return (
        <div className={TextareaCss.wrapper}>
            <textarea
                placeholder={placeholder}
                className={TextareaCss.textArea}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
            />
        </div>
    );
}

export default Textarea;
