import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import "./navbar.css"
import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar-container">
            <div className='navigation-container'>
                <div className="navigation-card">
                    <NavLink to="/" className="tab" isActive={() => location.pathname === "/"}><HomeIcon /></NavLink>
                    <NavLink to="/info-personal" className="tab" isActive={() => location.pathname === "/info-personal"}><PersonIcon /></NavLink>
                    <NavLink to="/contador" className="tab" isActive={() => location.pathname === "/contador"}><AvTimerIcon /></NavLink>
                    <NavLink to="/colores" className="tab" isActive={() => location.pathname === "/colores"}><ColorLensIcon /></NavLink>
                    <NavLink to="/emojis" className="tab" isActive={() => location.pathname === "/emojis"}><AddReactionIcon /></NavLink>
                    <NavLink to="/adivinanzas" className="tab" isActive={() => location.pathname === "/adivinanzas"}><LiveHelpIcon /></NavLink>
                </div>
            </div>
        </nav>
    )
}

