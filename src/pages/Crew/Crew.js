import React, { Component } from 'react'
import './Crew.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Slider from 'react-slick'
import Commander from '../../assets/crew/image-douglas-hurley.webp'
import Specialist from '../../assets/crew/image-mark-shuttleworth.webp'
import Pilot from '../../assets/crew/image-victor-glover.webp'
import Engineer from '../../assets/crew/image-anousheh-ansari.webp'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Crew extends Component {
    render() {

        const settings = {
            adaptiveHeight: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
            <div className="crew-background">
                <div className="container">
                    <Navbar />
                    <main data-aos="fade-up">
                        <header className="page-title-header">
                            <h4>
                                <span className="number-header">01</span>Meet your crew
                            </h4>
                        </header>
                        <Slider {...settings}>
                            <div>
                                <div className="crew-panel-container">
                                    <div className="crew-left-panel" data-aos="fade-left">
                                        <img src={Commander} className='crew-image' alt='Commander' />
                                    </div>
                                    <div className="crew-right-panel" data-aos="fade-right">
                                        <hr className='crew-hr' />
                                        <h3 className='crew-h3'>Commander</h3>
                                        <h5 className='crew-h5'>Douglas Hurley</h5>
                                        <p className='crew-p'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                                            and former NASA astronaut. He launched into space for the third time as
                                            commander of Crew Dragon Demo-2.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="crew-panel-container">
                                    <div className="crew-left-panel">
                                        <img src={Specialist} className='crew-image' alt='Specialist' />
                                    </div>
                                    <div className="crew-right-panel">
                                        <hr className='crew-hr' />
                                        <h3 className='crew-h3'> Mission Specialist</h3>
                                        <h5 className='crew-h5'>Mark Shuttleworth</h5>
                                        <p className='crew-p'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                                            the Linux-based Ubuntu operating system. Shuttleworth became the first South
                                            African to travel to space as a space tourist.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="crew-panel-container">
                                    <div className="crew-left-panel">
                                        <img src={Pilot} className='crew-image' alt='Pilot' />
                                    </div>
                                    <div className="crew-right-panel">
                                        <hr className='crew-hr' />
                                        <h3 className='crew-h3'>Pilot</h3>
                                        <h5 className='crew-h5'>Victor Glover</h5>
                                        <p className='crew-p'>Pilot on the first operational flight of the SpaceX Crew Dragon to the
                                            International Space Station. Glover is a commander in the U.S. Navy where
                                            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
                                            station systems flight engineer.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="crew-panel-container">
                                    <div className="crew-left-panel">
                                        <img src={Engineer} className='crew-image' alt='Engineer' />
                                    </div>
                                    <div className="crew-right-panel">
                                        <hr className='crew-hr' />
                                        <h3 className='crew-h3'>Flight Engineer</h3>
                                        <h5 className='crew-h5'>Anousheh Ansari</h5>
                                        <p className='crew-p'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                                            Ansari was the fourth self-funded space tourist, the first self-funded woman to
                                            fly to the ISS, and the first Iranian in space.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </main>
                </div >
            </div >
        )
    }
}