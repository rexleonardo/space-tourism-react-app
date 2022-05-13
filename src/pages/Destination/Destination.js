import React, { Component } from 'react';
import './Destination.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Moon from '../../assets/destination/image-moon.webp'
import Mars from '../../assets/destination/image-mars.webp'
import Europa from '../../assets/destination/image-europa.webp'
import Titan from '../../assets/destination/image-titan.webp'
import '../../assets/destination/image-moon.webp'

export default class Destination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            title: '',
            image: '',
            description: ``,
            averageDistance: '',
            travelTime: ''
        }
        this.moon = this.moon.bind(this)
        this.mars = this.mars.bind(this)
        this.europa = this.europa.bind(this)
        this.titan = this.titan.bind(this)
    }

    moon(e) {
        this.setState({
            clicked: true,
            title: 'Moon',
            image: Moon,
            description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
            averageDistance: '384,400 km',
            travelTime: '3 days'
        })
    }

    mars(e) {
        this.setState({
            clicked: true,
            title: 'Mars',
            image: Mars,
            description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
            averageDistance: '225 mil. km',
            travelTime: '9 months'
        })
    }

    europa(e) {
        this.setState({
            clicked: true,
            title: 'Europa',
            image: Europa,
            description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
            averageDistance: '628 mil. km',
            travelTime: '3 years'
        })
    }

    titan(e) {
        this.setState({
            clicked: true,
            title: 'Titan',
            image: Titan,
            description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
            averageDistance: '1.6 bil. km',
            travelTime: '7 years'
        })
    }

    render() {
        return (
            <div className="destination-background">
                <div className="container">
                    <Navbar />
                    <main className="destination-main" data-aos="fade-up">
                        <header className="page-title-header">
                            <h4>
                                <span className="number-header">01</span>Pick your destination
                            </h4>
                        </header>
                        <div className="destination-panel-container">
                            <section className="destination-left-panel">
                                <figure><img src={this.state.clicked ? this.state.image : Moon} alt="Moon" className="destination-image" data-aos="fade-right" /></figure>
                            </section>
                            <section className="destination-right-panel" data-aos="fade-left">
                                <nav className="destination-navbar-container">
                                    <ul className="destination-navbar">
                                        <li>
                                            <button className={this.state.title === '' || this.state.title === 'Moon' ? 'destination-navbar-active' : 'destination-navbar-inactive'} onClick={this.moon}><h6>Moon</h6></button>
                                        </li>
                                        <li>
                                            <button className={this.state.title === 'Mars' ? 'destination-navbar-active' : 'destination-navbar-inactive'} onClick={this.mars}><h6>Mars</h6></button>
                                        </li>
                                        <li>
                                            <button className={this.state.title === 'Europa' ? 'destination-navbar-active' : 'destination-navbar-inactive'} onClick={this.europa}><h6>Europa</h6></button>
                                        </li>
                                        <li>
                                            <button className={this.state.title === 'Titan' ? 'destination-navbar-active' : 'destination-navbar-inactive'} onClick={this.titan}><h6>Titan</h6></button>
                                        </li>
                                    </ul>
                                </nav>
                                <header>
                                    <h2>{this.state.clicked ? this.state.title : 'Moon'}</h2>
                                </header>
                                <section>
                                    <p className="destination-p">{this.state.clicked ? this.state.description : `See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                                            regain perspective and come back refreshed. While you’re there, take in some history
                                            by visiting the Luna 2 and Apollo 11 landing sites.`}</p>
                                </section>
                                <hr />
                                <section className="destination-information-container">
                                    <section className="destination-details">
                                        <h6>Avg. distance</h6>
                                        <h5 className="destination-value">{this.state.clicked ? this.state.averageDistance : '384,400 km'}</h5>
                                    </section>
                                    <section className="destination-details">
                                        <h6>Est. travel time</h6>
                                        <h5 className="destination-value">{this.state.clicked ? this.state.travelTime : '3 days'}</h5>
                                    </section>
                                </section>
                            </section>
                        </div>
                    </main>
                </div >
            </div >
        );
    }
}