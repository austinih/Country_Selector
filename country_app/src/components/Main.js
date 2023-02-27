import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Countries from './Countries'
import { useState, useEffect } from 'react'
import CountryDetails from './CountryDetails'
import LangRSLT from './langComponents/LangRSLT'
import LandLocked from './LandLocked'


export default function Main () {
    
    const [countries, setCountries] = useState([])


    return (
        <div className='main'>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/countries" element ={<Countries countries={countries} setCountries={setCountries}/>}/>
                <Route path="/countries/:index" element ={<CountryDetails countries={countries} setCountries={setCountries}/>}/>
                <Route path="/LangRSLT" element ={<LangRSLT countries={countries} setCountries={setCountries}/>}/>
                <Route path="/CountryLandLocked" element ={<LandLocked countries={countries} setCountries={setCountries}/>}/>
            </Routes>
        </div>
    )
}