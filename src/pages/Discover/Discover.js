import React, { useState, useEffect } from 'react'
import './Discover.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Footer from '../../components/Footer/Footer.js'
import API from '../../api/axios.js'
import SelectBox from '../../components/SelectBox'

import DownChevron from '../../assets/discover/down-chevron.svg'
import BrokenImage from '../../assets/discover/broken-image.png'
import format from 'date-fns/format'
import Swal from 'sweetalert2'

const Discover = () => {
    const [launches, setLaunches] = useState([])
    const [launchpads, setLaunchpads] = useState([])
    const [years, setYears] = useState([])
    const [selectYears, setSelectYears] = useState([])
    const [selectedMinYear, setSelectedMinYear] = useState('')
    const [selectedMaxYear, setSelectedMaxYear] = useState('')
    const [selectBox, setSelectBox] = useState([])
    const [selectedLaunchpad, setSelectedLaunchpad] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const selectOptionYear = years.map((item) => {
            return { value: item, label: item };
        });
        setSelectYears(selectOptionYear);
    }, [years])

    useEffect(() => {
        fetchLaunchpads()
        fetchLaunches()
    }, [])

    const fetchLaunchpads = async () => {
        try {
            const res = await API.get('/launchpads')
            setLaunchpads(res.data)
            const selectBoxData = await getLaunchPads(res.data)
            setSelectBox(selectBoxData)
        } catch (err) { }
    }

    const getLaunchPads = async (option) => {
        return option.reduce(
            (list, item, index) => {
                list.push({ value: item.id, label: item.full_name });
                return list;
            },
            [{ value: "", label: "Any" }]
        );
    };

    const getYears = async (option) => {
        return option.reduce(
            (list, item, index) => {
                let year = new Date(item.launch_date_local).getFullYear();
                if (list.indexOf(year) === -1) {
                    list.push(year);
                }
                return list;
            },
            ["Any"]
        );
    };

    const fetchLaunches = async () => {
        try {
            const res = await API.get('/launches')
            setLaunches(res.data)
            const year = await getYears(res.data)
            setYears(year)
        } catch (err) {

        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            let searchCriteria = '?'
            if (search !== '') {
                searchCriteria += 'q=' + search
            }

            if (selectedLaunchpad !== "" && selectedLaunchpad !== 'Any') {
                searchCriteria += '&launch_site.site_id=' + selectedLaunchpad
                console.log('launchpad', selectedLaunchpad)
            }

            if (selectedMinYear !== '' && selectedMinYear !== 'Any') {
                searchCriteria += '&launch_date_local_gte=' + selectedMinYear
                console.log('minyear', selectedMinYear)
            }

            if (selectedMaxYear !== '' && selectedMaxYear !== 'Any') {
                searchCriteria += '&launch_date_local_lte=' + selectedMaxYear
                console.log('maxyear', selectedMaxYear)
            }

            if ((selectedMinYear !== '' && selectedMinYear !== 'Any') && (selectedMaxYear !== '' && selectedMaxYear !== 'Any')) {
                if (selectedMinYear > selectedMaxYear) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Invalid date range',
                        icon: 'error'
                    })
                    return
                }
            }

            const res = await API.get("/launches" + searchCriteria)
            setLaunches(res.data)
        } catch (err) {

        }
    }

    const defaultImgSrc = async (img) => {
        img.target.src = BrokenImage
    }

    return (
        <div className="discover-background">
            <div className="container">
                <Navbar />
                <main className="discover-main" data-aos="fade-up">
                    <header className="page-title-header">
                        <h4>
                            <span className="number-header">04</span>Space savvy
                        </h4>
                    </header>
                    <h5 className="discover-h5">Discover space missions</h5>
                    <div className="discover-down-chevron-container">
                        <a href="#discoverForm">
                            <img src={DownChevron} alt="Go Down" className="discover-down-chevron" />
                        </a>
                    </div>
                    <div className='discover-form-results-container'>
                        <form id="discoverForm" className='discover-form' onSubmit={submitForm}>
                            <div className="discover-keywords">
                                <label htmlFor="" className="discover-form-input-label">Keywords</label>
                                <input type="text" value={search} onInput={(e) => setSearch(e.target.value)} className="discover-form-input-text" placeholder="egFalcon" />
                            </div>
                            <div className="discover-launchpad">
                                <SelectBox
                                    options={selectBox}
                                    name="launchpad"
                                    label="Launch Pad"
                                    placeholder="Any"
                                    optionSelected={(value) => setSelectedLaunchpad(value)}
                                />
                            </div>
                            <div className="discover-years">
                                <div className="discover-min-year">
                                    <SelectBox
                                        options={selectYears}
                                        name="minYear"
                                        label="Min Year"
                                        placeholder="Any"
                                        optionSelected={(value) => setSelectedMinYear(value)}
                                    />
                                </div>
                                <div className="discover-max-year">
                                    <SelectBox
                                        options={selectYears}
                                        name="maxYear"
                                        label="Max Year"
                                        placeholder="Any"
                                        optionSelected={(value) => setSelectedMaxYear(value)}
                                    />
                                </div>
                            </div>
                            <div className="discover-apply-button-container">
                                <button className='discover-apply-button'>Apply</button>
                            </div>
                        </form>
                        <div className="discover-mission-total">
                            {launches && <span>Showing {launches.length} {launches.length > 1 ? 'Missions' : 'Mission'}</span>}
                        </div>
                        <section className="discover-results">
                            {launches.map((launch) => (
                                launch.payloads.map((payload, index) => (
                                    <div key={index} className="discover-result">
                                        <div className="discover-mission-patch"><img src={launch.links.mission_patch} onError={defaultImgSrc} alt="" className="discover-image" /></div>
                                        <div className="discover-rocket-payload-status-details-links-container">
                                            <span className="discover-rocket-payload">{launch.rocket.rocket_name} - {payload.payload_id}</span> <span className={launch.land_success ? "" : "discover-mission-status"}>{launch.land_success ? "" : "Failed Mission"}</span>
                                            <div className="discover-details">
                                                {`Launched ${format(new Date(launch.launch_date_local), "do MMMM yyyy")} at ${format(new Date(launch.launch_date_local), "h:m bb")} from ${launchpads.filter((pad) => launch?.launch_site?.site_id === pad?.id)[0]?.full_name}`}
                                            </div>
                                            <div className="discover-buttons-container">
                                                {Object.keys(launch.links).slice(1).map((item, itemindex) => (
                                                    <a href={launch.links[item]} key={itemindex} target="_blank" rel="noreferrer" className={launch.links[item] !== null ? 'discover-button' : 'discover-button-none'}>
                                                        {item === "article_link" && <button>Article</button>}
                                                        {item === "video_link" && <button>Watch Video</button>}
                                                        {item === "reddit_launch" && <button>Reddit Launch</button>}
                                                        {item === "presskit" && <button>Press Kit</button>}
                                                        {item === "reddit_campaign" && <button>Reddit Campaign</button>}
                                                        {item === "reddit_media" && <button>Reddit Media</button>}
                                                        {item === "reddit_recovery" && <button>Reddit Recovery</button>}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="discover-flight-number-container">
                                            <div className="discover-flight-number">#{launch.flight_number}</div>
                                            <div className="discover-flight-number-label">Flight<br />Number</div>
                                        </div>
                                    </div>
                                ))
                            ))}
                        </section>
                    </div>
                </main>
                <Footer />
            </div >
        </div >
    )
}

export default Discover