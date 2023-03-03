import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'
import axios from 'axios'


export default function RegionSearch (props) {
    
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    const value = {countryRegion:'Africa'}
    const [formState, setFormState] = useState(value)
    let navigate = useNavigate()

    const url = `https://restcountries.com/v3.1/region/${countryInfo.countryRegion}`
    const getCountries = async () => {
        const response = await axios.get(url)
        console.log('countries', response.data)
        props.setCountries(response.data)
    }
    const getResults = () => {
        console.log('results')
        navigate(`/RegionRSLT`)
    }
    const handleChange = event => {
        setFormState({countryRegion: event.target.value})
        console.log(formState)
    }
    const handleSubmit = async event => {
        event.preventDefault();
        // do something with the data in the component state
        countryInfo.countryRegion = formState.countryRegion
        countryInfo.colorTheme = '#23beb6'
        getCountries()
        getResults()        
  };
    
    //I used the following site to learn how to do a <Select> form
    //https://reactjs.org/docs/forms.html

    return (      
            <form onSubmit={handleSubmit}>
                <label htmlFor="countryRegion">
                    <select value={formState.countryRegion} onChange={handleChange} >  
                        <option value="Africa">Africa</option>
                        <option value="Americas" >Americas</option>
                        <option value="Antarctic" >Antarctic</option>
                        <option value="Asia" >Asia</option>
                        <option value="Europe" >Europe</option>
                        <option value="Oceania" >Oceania</option>
                    </select>  
                </label>  
                <button type='submit'>Search</button>
            </form>
    )
}