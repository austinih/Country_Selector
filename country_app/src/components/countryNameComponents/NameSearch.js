import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext'

export default function NameSearch () {
    
    const { countryInfo, setCountryInfo } = useContext(DataContext)
    const initialState = {countryName:''}
    const [formState, setFormState] = useState(initialState)

    let navigate = useNavigate()

    const getResults = () => {
        navigate(`/NameRSLT`)
    }

    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        // do something with the data in the component state
        console.log(formState)
        setCountryInfo(formState)
        console.log(countryInfo)
        getResults()
        
        
  };
    
    return (      
    

        <div className="homeBox" style={{backgroundColor: 'rgb(16, 220, 64)'}}>
            <p>Know where you're going?</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="countryName"></label>
                <input id="countryName" type="text" onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    
    )
}