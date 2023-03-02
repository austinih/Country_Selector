import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DataContext from '../DataContext'

export default function Countries (props) {
    
    const { countryInfo, setCountryInfo } = useContext(DataContext)


       useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'

        const getCountries = async () => {
            const response = await axios.get(url)
            console.log(response.data)
            props.setCountries(response.data)
        }

        getCountries()

    },[])

    let navigate = useNavigate()

    const showCountry = (index) => {
        countryInfo.colorTheme = '#233D4D'
        navigate(`${index}`)
        
        
    }

    if (!props.countries) {
        return <h1> loading please wait</h1>
        
        
    } else {
        return (
            <div className='countryContainer' style={{borderLeft: '150px solid #233D4D',borderRight: '150px solid #233D4D'}}>
                <div className="spacer"></div>
                <h1 style={{textDecoration: 'underline', textDecorationColor: '#233D4D', textDecorationThickness: '5px' }}>All Countries </h1>
                <div className='countryList'>
                    {props.countries ? props.countries.map((country, index) => (
                        <div key={index} className="countryCard" onClick={()=> showCountry(index) } style={{borderColor: '#233D4D'}}>
                            <h3 className='countrySelect'>{country.name.common}</h3>
                        </div>    )):null }
                </div>
            </div>)

    }
}