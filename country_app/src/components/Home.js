export default function Home () {
    return (
        <div>
            <div >
                <div className="homeGrid">
                    <div className="homeBox" style={{backgroundColor: 'rgb(16, 220, 64)'}}>
                        <p>Know where you're going?</p>
                        <input />
                        <button>Search</button>
                    </div>
                    <div className="homeBox" style={{backgroundColor: 'rgb(158, 60, 208)'}}>
                        <p>What language do you want to hear?</p>
                        <input list='languages'/>
                            <datalist id="languages">
                                <option value="French" />
                                <option value="Korean" />
                            </datalist>
                        <button>Search</button>
                    </div>
                    <div className="homeBox" style={{backgroundColor: 'rgb(237, 29, 29)'}}>
                        <p>Planning to drive?</p>
                        <button className='driveBtns'>Left</button>
                        <button className='driveBtns'>Right</button>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="homeGrid">
                    <div className="homeBox" style={{backgroundColor: 'dodgerblue'}}>
                        <p>Love the Beach?</p>
                        <button>Explore</button>
                    </div>
                    <div className="homeBox" style={{backgroundColor: 'rgb(254, 107, 3)'}}>
                        <p>Afraid of the Ocean?</p>
                        <button>Explore</button>
                    </div>
                    <div className="homeBox" style={{backgroundColor: 'gold'}}>
                        <p>How'd you like to explore the whole Continent?</p>
                        <input list='regions'/>
                            <datalist id="regions">
                                <option value="North America" />
                                <option value="South America" />
                                <option value="Europe" />
                                <option value="Asia" />
                                <option value="Africa" />
                                <option value="Australia" />

                            </datalist>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}