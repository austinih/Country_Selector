import LangSearch from "./langComponents/LangSearch"
import { useState } from "react"
import NameSearch from "./countryNameComponents/NameSearch"
import RegionSearch from "./regionComponents/RegionSearch"

export default function Home () {

    const [languageInfo, setLanguageInfo] = useState({
        passedLang: ''
    })
    
    return (
        <div>
            <div >
                <div className="homeGrid">
                    <div className="homeBox" id='nameBox' >
                        <div className="homeBoxContents">
                            <p>Know where you're going?</p>
                            <NameSearch/>
                        </div>
                    </div>
                    <div className="homeBox" id='langBox' >
                        <div className="homeBoxContents">
                            <p>What language do you want to hear?</p>
                            <LangSearch/>
                        </div>
                    </div>
                    
                </div>
                {/* <div className="spacer"></div> */}
                <div className="homeGrid">
                    
                    <div className="homeBox" id='currencyBox' >
                        <div className="homeBoxContents">
                            <p>Looking to spend a specific Currency?</p>
                            <button>Explore</button>
                        </div>
                    </div>
                    <div className="homeBox" id='regionBox' >
                        <div className="homeBoxContents">
                            <p>Interested in a whole Region?</p>
                            <RegionSearch/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}