import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DataContext from '../../DataContext';



export default function LangRSLT (props) {
    
    const { countryInfo, setCountryInfo } = useContext(DataContext)

    // let language = "korean"

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/lang/${countryInfo.spokenLanguage}`

        const getCountries = async () => {
            const response = await axios.get(url)
            console.log(response.data)
            props.setCountries(response.data)
            console.log(countryInfo.spokenLanguage)
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
            <div>
                <h1 style={{textDecoration: 'underline', textDecorationColor: 'rgb(16, 220, 64)', textDecorationThickness: '5px'}}>All Countries </h1>
                <div className='countryList'>
                    {props.countries ? props.countries.map((country, index) => (
                        <div key={index} className="countryCard" onClick={()=> showCountry(index)}>
                            <h3 className='countrySelect'>{country.name.common}</h3>
                        </div>    )):null }
                </div>
            </div>)

        
        
    }
}