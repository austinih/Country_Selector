import LangSearch from "./langComponents/LangSearch"

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
                    <LangSearch/>
                
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
                        <p>Interested in a whole Region?</p>
                        <input list='regions'/>
                            <datalist id="regions">
                                <option value="Africa" />
                                <option value="Antartica" />
                                <option value="Asia" />
                                <option value="Europe" />
                                <option value="North America" />
                                <option value="Oceania" />
                                <option value="South America" />

                            </datalist>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}