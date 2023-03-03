import React, {useContext} from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import DataContext from '../DataContext'
import { JsonFunction } from 'react-router-dom';


export default function CountryDetailsV2 (props) {
    
    let { index } = useParams()
    const [country, setCountry] = useState([])
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    let navigate = useNavigate()

    useEffect(() => {
        let selectedCountry = props.countries[index]
        setCountry(selectedCountry)
    },[props.countries, index])
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
        return country && country.flags && country.languages ? (
            <div className='details_page'>
                <div className='leftBox' style={{backgroundColor:countryInfo.colorTheme}}></div>
                <div className='image_container' >
                    <img src={country.flags.png} alt='flag' className='flag'></img>
                    <img src={country.coatOfArms.png} alt='Coat of Arms' className='coatOfArms' ></img>
                </div>
                <div>
                    <h1 className='countryName' style={{backgroundColor:countryInfo.colorTheme}}>{country.name.common}</h1>   
                    <div className='country_facts' style={{borderColor:countryInfo.colorTheme}}>
                        <h3><span style={{color:countryInfo.colorTheme}}>Official Name:</span> {country.name.official}</h3>
                        <h3><span style={{color:countryInfo.colorTheme}}>Capital:</span> {country.capital}</h3>
                        <h3><span style={{color:countryInfo.colorTheme}}>Region:</span> {country.region}</h3>
                        <h3><span style={{color:countryInfo.colorTheme}}>Sub-Region:</span> {country.subregion}</h3>
                        <h3><span style={{color:countryInfo.colorTheme}}>Population:</span> {country.population}</h3>
                        <h3><span style={{color:countryInfo.colorTheme}}>Area in km²:</span> {country.area}</h3>
                        <h3><span style={{color:countryInfo.colorTheme}}>Driving side:</span> {country.car.side}</h3> 
                        <a href={country.maps.googleMaps} target="_blank" >Google Maps Link</a>
                        <button className="backBtn" onClick={() => navigate(-1)}>Back</button>
                        {/* <h3>Currencies: {country.currencies}</h3> */}
                        {/* <h3>Languages: {country.languages}</h3> */}
                        {/* <h3>UN Member: {country.unMember}</h3> */}
                        {/* <h3>Landlocked: {country.landlocked}</h3> */}
                        {/* <h3><span style={{color:countryInfo.colorTheme}}>Bordering Countries:</span> {country.borders}.</h3> */}
                    </div>
                </div>
                <div className='rightBox' style={{backgroundColor:countryInfo.colorTheme}}></div>
                
            </div>
            
        ) : <h1> Loading, please wait</h1>
    
    
}