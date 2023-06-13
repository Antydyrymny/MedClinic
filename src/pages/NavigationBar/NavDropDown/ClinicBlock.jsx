import { useNavigate } from 'react-router-dom';
import ClinicBlockCss from './ClinicBlock.module.css';

function ClinicBlock({ clinic, opened, close, coloredBackground = true }) {
    const navigate = useNavigate();

    return (
        <div
            className={`${ClinicBlockCss.wrapper} ${
                coloredBackground ? ClinicBlockCss.backgroundStyle : null
            }`}
            onClick={() => {
                opened && close();
                const newUrl = `/contacts?clinic=${clinic.id}`;
                if (window.location.pathname === '/contacts') {
                    navigate(newUrl, { replace: true });
                    window.location.reload();
                } else navigate(newUrl);
            }}
        >
            <p className={ClinicBlockCss.name}>{clinic.name}</p>
            <p className={ClinicBlockCss.title}>Multidisciplinary clinic</p>
            <p className={ClinicBlockCss.address}>{clinic.address}</p>
            <p className={ClinicBlockCss.workHours}>{`from ${clinic.workHours.replace(
                '-',
                'to'
            )}`}</p>
        </div>
    );
}

export default ClinicBlock;
