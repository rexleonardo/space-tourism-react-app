import React, { Component, useState } from 'react'
import './Technology.css'
import Navbar from '../../components/Navbar/Navbar.js'
import VehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import VehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import SpaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import SpaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import CapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'
import CapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'

export default class Technology extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            title: '',
            imageLandscape: '',
            imagePortrait: '',
            description: ``
        }
        this.vehicle = this.vehicle.bind(this)
        this.spaceport = this.spaceport.bind(this)
        this.capsule = this.capsule.bind(this)
    }

    vehicle(e) {
        this.setState({
            clicked: true,
            title: 'Launch vehicle',
            imageLandscape: VehicleLandscape,
            imagePortrait: VehiclePortrait,
            description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
            it's quite an awe-inspiring sight on the launch pad!`
        })
    }

    spaceport(e) {
        this.setState({
            clicked: true,
            title: 'Spaceport',
            imageLandscape: SpaceportLandscape,
            imagePortrait: SpaceportPortrait,
            description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
            by analogy to the seaport for ships or airport for aircraft. Based in the
            famous Cape Canaveral, our spaceport is ideally situated to take advantage
            of the Earth’s rotation for launch.`
        })
    }

    capsule(e) {
        this.setState({
            clicked: true,
            title: 'Space capsule',
            imageLandscape: CapsuleLandscape,
            imagePortrait: CapsulePortrait,
            description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
            capsule to reenter the Earth's atmosphere without wings. Our capsule is where
            you'll spend your time during the flight. It includes a space gym, cinema,
            and plenty of other activities to keep you entertained.`
        })
    }

    render() {
        return (
            <div className="technology-background">
                <div className="container">
                    <Navbar />
                    <main data-aos="fade-up">
                        <header className="page-title-header">
                            <h4><span className="number-header">03</span>Space launch 101</h4>
                        </header>
                        <div className="technology-panel-container">
                            <section className="technology-left-panel">
                                <figure>
                                    <img src={this.state.clicked ? this.state.imageLandscape : VehicleLandscape} alt="Rocket" className="technology-image" />
                                    <img src={this.state.clicked ? this.state.imagePortrait : VehiclePortrait} alt="Rocket"
                                        className="technology-image-desktop" />
                                </figure>
                            </section>
                            <section className="technology-right-panel">
                                <nav className="technology-navbar-container">
                                    <ul className="technology-navbar">
                                        <li><button className={this.state.title === '' || this.state.title === 'Launch vehicle' ? 'technology-navbar-active' : 'technology-navbar-inactive'} onClick={this.vehicle}>1</button></li>
                                        <li><button className={this.state.title === 'Spaceport' ? 'technology-navbar-active' : 'technology-navbar-inactive'} onClick={this.spaceport}>2</button></li>
                                        <li><button className={this.state.title === 'Space capsule' ? 'technology-navbar-active' : 'technology-navbar-inactive'} onClick={this.capsule}>3</button></li>
                                    </ul>
                                </nav>
                                <section className="technology-details">
                                    <h6>The terminology...</h6>
                                    <h5 className="technology-title">{this.state.clicked ? this.state.title : 'Launch vehicle'}</h5>
                                    <p className="technology-p">{this.state.clicked ? this.state.description : `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                                            it's quite an awe-inspiring sight on the launch pad!`}</p>
                                </section>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}