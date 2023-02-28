import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";



export default function CountryDetails (props) {
    
    let { index } = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        let selectedCountry = props.countries[index]
        setCountry(selectedCountry)
    },[props.countries, index])
    
    // console.log(country.name.common)
    // if (!props.countries) {
    //     return <h1> loading please wait</h1>
    // } else {

    return (
        <div>
            <div className="flagContainer" style={{background: `url(${country.flags[0]}) no-repeat center center` }}>
            </div>    
                <h1 className='countryName'>{country.name.common}</h1>   
            
            <h3>Capital: {country.capital}</h3>

        </div>
    )
    // }
}