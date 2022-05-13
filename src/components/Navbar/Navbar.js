import { React, Component } from 'react'
import './Navbar.css'
import Logo from '../../assets/shared/logo.svg'
import Menu from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'
import { Link } from 'react-router-dom'

export default class Navbar2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sidebar: false,
            title: ''
        }
        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.home = this.home.bind(this)
        this.destination = this.destination.bind(this)
        this.crew = this.crew.bind(this)
        this.technology = this.technology.bind(this)
        this.discover = this.discover.bind(this)
    }

    openMenu(e) {
        this.setState({
            sidebar: true
        })
    }

    closeMenu(e) {
        this.setState({
            sidebar: false
        })
    }

    home(e) {
        this.setState({
            title: 'Home'
        })
    }

    destination(e) {
        this.setState({
            title: 'Destination'
        })
    }

    crew(e) {
        this.setState({
            title: 'Crew'
        })
    }

    technology(e) {
        this.setState({
            title: 'Technology'
        })
    }

    discover(e) {
        this.setState({
            title: 'Discover'
        })
    }

    render() {
        return (
            <>
                {/* Desktop & Tablet Navigation Bar */}
                <nav className="navbar">
                    <div><Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link></div>
                    <button id="toggleOpen" className="menu" onClick={this.openMenu}><img src={Menu} alt="Menu" /></button>
                    <hr className="nav-hr" />
                    <nav className="nav-container-tablet">
                        <ul className="nav-ul-tablet">
                            <li>
                                <Link to="/" onClick={this.home}>
                                    <h4 className={this.state.title === 'Home' ? 'nav-h4-active' : 'nav-h4'}><span className="nav-number">00</span>Home</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to="/destination" onClick={this.destination}>
                                    <h4 className={this.state.title === 'Destination' ? 'nav-h4-active' : 'nav-h4'}><span className="nav-number">01</span>Destination</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to="/crew" onClick={this.crew}>
                                    <h4 className={this.state.title === 'Crew' ? 'nav-h4-active' : 'nav-h4'}><span className="nav-number">02</span>Crew</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to="/technology" onClick={this.technology}>
                                    <h4 className={this.state.title === 'Technology' ? 'nav-h4-active' : 'nav-h4'}><span className="nav-number">03</span>Technology</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to="/discover" onClick={this.discover}>
                                    <h4 className={this.state.title === 'Discover' ? 'nav-h4-active' : 'nav-h4'}><span className="nav-number">04</span>Discover</h4>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </nav>
                {/* Mobile Navigation Bar */}
                <nav id="menu" className="sidebar-container" style={this.state.sidebar === false ? { display: "none" } : { display: "block" }}>
                    <button id="toggleClose" className="close" onClick={this.closeMenu}><img src={Close} alt="Close" /></button>
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
}
