import { React, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/shared/logo.svg'
import Menu from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isActive, setActive] = useState(false);

    function toggleMenu() {
        let menu = document.querySelector("#menu");

        if (!isActive) {
            menu.style.display = 'none';
            setActive(true);
        } else {
            menu.style.display = 'block';
            setActive(false);
        }
    }

    return (
        <>
            {/* Desktop & Tablet Navigation Bar */}
            <nav className="navbar">
                <div><Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link></div>
                <button id="toggleOpen" className="menu" onClick={toggleMenu}><img src={Menu} alt="Menu" /></button>
                <hr className="nav-hr" />
                <nav className="nav-container-tablet">
                    <ul className="nav-ul-tablet">
                        <li>
                            <Link to="/">
                                <h4 className="nav-h4"><span className="nav-number">00</span>Home</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/destination">
                                <h4 className="nav-h4"><span className="nav-number">01</span>Destination</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/crew">
                                <h4 className="nav-h4"><span className="nav-number">02</span>Crew</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/technology">
                                <h4 className="nav-h4"><span className="nav-number">03</span>Technology</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to="/discover">
                                <h4 className="nav-h4"><span className="nav-number">04</span>Discover</h4>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </nav>
            {/* Mobile Navigation Bar */}
            <nav id="menu" className="sidebar-container">
                <button id="toggleClose" className="close" onClick={toggleMenu}><img src={Close} alt="Close" /></button>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to="/">
                            <h4 className="nav-h4"><span className="nav-number">00</span>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/destination">
                            <h4 className="nav-h4"><span className="nav-number">01</span>Destination</h4>
                        </Link>

                    </li>
                    <li>
                        <Link to="/crew">
                            <h4 className="nav-h4"><span className="nav-number">02</span>Crew</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/technology">
                            <h4 className="nav-h4"><span className="nav-number">03</span>Technology</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to="/discover">
                            <h4 className="nav-h4"><span className="nav-number">04</span>Discover</h4>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar