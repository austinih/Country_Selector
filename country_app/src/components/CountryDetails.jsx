import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

//So far only All countries uses this component. If others do not, then I will remove

export default function CountryDetails (props) {
    
    let { index } = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        let selectedCountry = props.countries[index]
        setCountry(selectedCountry)
    },[props.countries, index])
    
    
        return country && country.flags ? (
            <div>
                <img src={country.flags[0]} alt='flag' className='flag'></img>
                <h1 className='countryName'>{country.name.common}</h1>   
                
                <h3>Official Name: {country.name.official}</h3>
                <h3>Capital: {country.capital}</h3>
    
            </div>
        ) : <h1> Loading, please wait</h1>
    
    
}