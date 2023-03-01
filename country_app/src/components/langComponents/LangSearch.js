import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
import axios from 'axios'

export default function LangSearch (props) {
    
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    const initialState = {spokenLanguage:''}
    const [formState, setFormState] = useState(initialState)
    let navigate = useNavigate()

    const url = `https://restcountries.com/v3.1/lang/${countryInfo.spokenLanguage}`

    const getCountries = async () => {
        const response = await axios.get(url)
        console.log(response.data)
        props.setCountries(response.data)
    }
    const getResults = () => {
        navigate(`/LangRSLT`)
    }

    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState)
        setCountryInfo(formState)
        getCountries()
        getResults()
  };
    
    return (      


        
            <form onSubmit={handleSubmit}>
                <label htmlFor="spokenLanguage"></label>
                <input id="spokenLanguage" type="text" onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
        
    )
}