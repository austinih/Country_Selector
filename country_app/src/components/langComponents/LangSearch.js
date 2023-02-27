import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function LangSearch () {
    
    

    const initialState = {language:''}
    let chosenLanguage = ''
    const [formState, setFormState] = useState(initialState)

    let navigate = useNavigate()

    const getResults = () => {
        navigate(`/LangRSLT`)
    }

    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        // do something with the data in the component state
        console.log(formState)
        chosenLanguage = formState
        getResults()
        
        // getResults(chosenLanguage)
        // clear the form
        setFormState(initialState);
  };
    
    return (      


        <div className="homeBox" style={{backgroundColor: 'rgb(158, 60, 208)'}}>
            <p>What language do you want to hear?</p>
            <form onSubmit={handleSubmit}>
                <input id="language" type="text" onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}