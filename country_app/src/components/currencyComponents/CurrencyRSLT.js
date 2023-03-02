import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DataContext from '../../DataContext';
import CurrencySearch from './CurrencySearch';



export default function CurrencyRSLT (props) {
    
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    
    

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/currency/${countryInfo.countryCurrency}`

        const getCountries = async () => {
            const response = await axios.get(url)
            console.log(response.data)
            props.setCountries(response.data)
        }

        getCountries()

    },[])

    let navigate = useNavigate()

    const showCountry = (index) => {
        navigate(`${index}`)
        console.log(`${index}`)
    }

    if (!props.countries) {
        return <h1> loading please wait</h1>
        
        
    } else {
        return (
            <div className='countryContainer' style={{borderLeft: '150px solid #FE7F2D',
                borderRight: '150px solid #FE7F2D'}} >
                
                <div className='newSearchBar' >
                    <div className="spacer"></div>
                    <CurrencySearch setCountries={props.setCountries} />
                    <h4>Click "Search" twice to update results</h4>
                </div>
                <h1 className='listTitle' style={{textDecoration: 'underline', textDecorationColor: '#FE7F2D', textDecorationThickness: '5px'}}>Countries that Accept "{countryInfo.countryCurrency}" </h1>
                
                <div className='countryList'>
                    {props.countries ? props.countries.map((country, index) => (
                        <div key={index} className="countryCard" onClick={()=> showCountry(index)} style={{borderColor: '#FE7F2D'}}>
                            <h3 className='countrySelect'>{country.name.common}</h3>
                        </div>    )):null }
                </div>
                
            </div>)

        
        
    }
}