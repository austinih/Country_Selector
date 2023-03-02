import React, {useContext} from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import DataContext from '../DataContext'



//CountryDetailsV2 is replaces CountryDetails for certain search functions
// Used for: Name, Language,

export default function CountryDetailsV2 (props) {
    
    let { index } = useParams()
    const [country, setCountry] = useState([])
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    let navigate = useNavigate()

    useEffect(() => {
        let selectedCountry = props.countries[index]
        setCountry(selectedCountry)
    },[props.countries, index])
    
    
        return country && country.flags && country.languages ? (
            <div className='details_page'>
                <div className='leftBox' style={{backgroundColor:countryInfo.colorTheme}}></div>
                <div className='image_container' style={{backgroundColor:countryInfo.colorTheme}}>
                    <img src={country.flags.png} alt='flag' className='flag'></img>
                    <img src={country.coatOfArms.png} alt='Coat of Arms' className='coatOfArms' ></img>
                </div>
               

                <div>
                    <h1 className='countryName' style={{backgroundColor:countryInfo.colorTheme}}>{country.name.common}</h1>   
                    <div className='country_facts' style={{borderColor:countryInfo.colorTheme}}>
                        <h3>Official Name: {country.name.official}</h3>
                        <h3>Capital: {country.capital}</h3>
                        <h3>Population: {country.population}</h3>
                        {/* <h3>Currencies: {country.currencies}</h3> */}
                        <h3>Continent: {country.continents}</h3>
                        <h3>Region: {country.region}</h3>
                        <h3>Sub-Region: {country.subregion}</h3>
                        {/* <h3>Languages: {country.languages}</h3> */}
                        {/* <h3>UN Member: {country.unMember}</h3> */}
                        {/* <h3>Landlocked: {country.landlocked}</h3> */}
                        <h3>Bordering Countries: {country.borders}</h3>
                        <h3>Area in km²:{country.area}</h3>
                        <h3>Driving side:{country.car.side}</h3> 
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
                <div className='rightBox' style={{backgroundColor:countryInfo.colorTheme}}></div>
                
            </div>
            
        ) : <h1> Loading, please wait</h1>
    
    
}