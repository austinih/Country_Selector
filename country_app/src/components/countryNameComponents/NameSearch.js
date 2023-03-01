import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
import axios from 'axios'

export default function NameSearch (props) {
    console.log(props)
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    const initialState = {countryName:''}
    const [formState, setFormState] = useState(initialState)


    const url = `https://restcountries.com/v3.1/name/${countryInfo.countryName}`
    const getCountries = async () => {
        const response = await axios.get(url)
        console.log('countries', response.data)
        props.setCountries(response.data)
    }

    

    let navigate = useNavigate()


    const getResults = () => {
        console.log('results')
        navigate(`/NameRSLT`)
    }

    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    
    }
    
    const handleSubmit = async event => {
        event.preventDefault();
        // do something with the data in the component state
        console.log(formState)
        setCountryInfo(formState)
        countryInfo.colorTheme ='rgb(16, 220, 64)'
        console.log(countryInfo)
        getCountries()
        getResults()        
  };
    
    return (      
            <form onSubmit={handleSubmit}>
                <label htmlFor="countryName"></label>
                <input id="countryName" type="text" onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
    )
}