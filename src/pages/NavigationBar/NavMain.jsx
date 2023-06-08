// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from './logo/Logo';
// import NavMainCss from './NavMain.module.css';
// import NavFirstBar from './NavFirstBar/NavFirstBar';

// function NavMain() {
//     const [dropDownIsActive, setDropDownIsActive] = useState(false);

//     return (
//         <nav className={NavMainCss.navMain}>
//             <NavFirstBar
//                 opened={dropDownIsActive}
//                 onHamburgerClick={() => setDropDownIsActive(!dropDownIsActive)}
//             />
//             <ul>
//                 <li>
//                     <Link to='/'>Home</Link>
//                 </li>
//                 <li>
//                     <Link to='/app/step1'>Make an appointment</Link>
//                 </li>
//                 <li>
//                     <Link to='/doctors'>Doctors</Link>
//                 </li>
//                 <li>
//                     <Link to='/services'>Services</Link>
//                 </li>
//                 <li>
//                     <Link to='/about'>About us</Link>
//                 </li>
//                 <li>
//                     <Link to='/contacts'>Contacts</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default NavMain;
