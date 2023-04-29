import TextareaCss from './Textarea.module.css';

function Textarea({ placeholder, onChange }) {
    return (
        <div className={TextareaCss.wrapper}>
            <textarea
                placeholder={placeholder}
                className={TextareaCss.text}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default Textarea;
