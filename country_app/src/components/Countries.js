import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Countries (props) {
    
    //Make a state to set data in √
    //Set up a useEffect to control my components lifecycle √
    //Organize API Links / URL √
    //Make API call √
    //Set our data in state and log it √
    //render our data
    //Set up guard
    
    

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
        navigate(`${index}`)
        console.log(`${index}`)
        
    }

    if (!props.countries) {
        return <h1> loading please wait</h1>
        
        
    } else {
        return (
            <div>
                <h1>Countries</h1>
                {/* <h2>{countries[3].name.official}</h2> */}
                
                {props.countries ? props.countries.map((country, index) => (
                    <div key={index} className="countryCard" onClick={()=> showCountry(index)}>
                        <h3>{country.name.common}</h3>
                    </div>    )):null }
            </div>)

        
        
    }
}