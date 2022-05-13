import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-background">
            <div className="container">
                <Navbar />
                <main className="home-main" data-aos="fade-up">
                    <section className="home-texts first-panel" data-aos="fade-right">
                        <header>
                            <h4 className="home-h4">So, you want to travel to</h4>
                            <h1>Space</h1>
                        </header>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!</p>
                    </section>
                    <section className="explore-container second-panel" data-aos="fade-left">
                        <Link to="/destination" className="explore-button">Explore</Link>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Home