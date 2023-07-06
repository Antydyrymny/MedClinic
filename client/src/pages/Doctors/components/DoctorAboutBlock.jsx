import { Link } from 'react-router-dom';
import AboutBlockCss from './DoctorAboutBlock.module.css';

function DoctorAboutBlock({ doctor }) {
    return (
        <div className={AboutBlockCss.wrapper}>
            <div className={AboutBlockCss.firstColumn}>
                <div className={AboutBlockCss.block}>
                    <h3 className={AboutBlockCss.heading}>Certificates</h3>
                    <ul className={AboutBlockCss.list}>
                        {doctor.certificates.split(', ').map((cert, ind) => (
                            <li key={ind} className={AboutBlockCss.listItem}>
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={AboutBlockCss.block}>
                    <h3 className={AboutBlockCss.heading}>Education</h3>
                    <ul className={AboutBlockCss.list}>
                        {doctor.education.split(', ').map((ed, ind) => (
                            <li key={ind} className={AboutBlockCss.listItem}>
                                {ed}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={AboutBlockCss.block}>
                    <h3 className={AboutBlockCss.heading}>Specializations</h3>
                    <ul className={AboutBlockCss.list}>
                        {doctor.speciality.map((spec) => (
                            <li key={spec.id} className={AboutBlockCss.listItem}>
                                {spec.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={AboutBlockCss.secondColumn}>
                <div className={AboutBlockCss.block}>
                    <h3 className={AboutBlockCss.heading}>Professional interests</h3>
                    <ul className={AboutBlockCss.list}>
                        {doctor.professionalInterests.split(', ').map((profInt, ind) => (
                            <li key={ind} className={AboutBlockCss.listItem}>
                                {profInt[0].toUpperCase() + profInt.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={AboutBlockCss.block}>
                    <h3 className={AboutBlockCss.heading}>Pricing Details</h3>
                    <table className={AboutBlockCss.table}>
                        <tbody className={AboutBlockCss.tbody}>
                            <tr className={AboutBlockCss.row}>
                                <td className={AboutBlockCss.priceTableName}>
                                    Initial appointment
                                </td>
                                <td>
                                    <Link
                                        to={`/app/step1?doctorId=${doctor.id}`}
                                        className={AboutBlockCss.priceTableLink}
                                    >
                                        Schedule
                                    </Link>
                                </td>
                                <td className={AboutBlockCss.price}>
                                    {doctor.price + ' usd'}
                                </td>
                            </tr>
                            <tr className={AboutBlockCss.row}>
                                <td className={AboutBlockCss.priceTableName}>
                                    Follow-up appointment
                                </td>
                                <td>
                                    <Link
                                        to={`/app/step1?doctorId=${
                                            doctor.id
                                        }&followUp=${true}`}
                                        className={AboutBlockCss.priceTableLink}
                                    >
                                        Schedule
                                    </Link>
                                </td>
                                <td className={AboutBlockCss.price}>
                                    {doctor.price - 20 + ' usd'}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DoctorAboutBlock;
