import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Countries () {
    
    //Make a state to set data in √
    //Set up a useEffect to control my components lifecycle √
    //Organize API Links / URL √
    //Make API call √
    //Set our data in state and log it √
    //render our data
    //Set up guard
    
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'

        const getCountries = async () => {
            const response = await axios.get(url)
            console.log(response.data)
            setCountries(response.data)
        }

        getCountries()

    },[])

    if (!countries) {
        return <h1> loading please wait</h1>
        
        
    } else {
        return (
            <div>
                <h1>Countries</h1>
                {/* <h2>{countries[3].name.official}</h2> */}
                
                {countries ? countries.map((country, index) => (<div key={index}><h3>{country.name.official}</h3></div>    )):null }
            </div>)

        
        
    }
}