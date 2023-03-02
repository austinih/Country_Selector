import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Countries from './Countries'
import { useState, useEffect } from 'react'
import CountryDetails from './CountryDetails'
import CountryDetailsV2 from './CountryDetailsV2'
import LangRSLT from './langComponents/LangRSLT'
import NameRSLT from './countryNameComponents/NameRSLT'
import RegionRSLT from './regionComponents/RegionRSLT'
import CurrencyRSLT from './currencyComponents/CurrencyRSLT'


export default function Main () {
    
    const [countries, setCountries] = useState([])


    return (
        <div className='main'>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/AllCountries" element ={<Countries countries={countries} setCountries={setCountries}/>}/>
                <Route path="/AllCountries/:index" element ={<CountryDetails countries={countries} setCountries={setCountries}/>}/>
                
                <Route path="/NameRSLT" element ={<NameRSLT countries={countries} setCountries={setCountries}/>}/>
                <Route path="/NameRSLT/:index" element ={<CountryDetailsV2 countries={countries} setCountries={setCountries}/>}/>

                <Route path="/LangRSLT" element ={<LangRSLT countries={countries} setCountries={setCountries}/>}/>
                <Route path="/LangRSLT/:index" element ={<CountryDetailsV2 countries={countries} setCountries={setCountries}/>}/>

                <Route path="/CurrencyRSLT" element ={<CurrencyRSLT countries={countries} setCountries={setCountries}/>}/>
                <Route path="/CurrencyRSLT/:index" element ={<CountryDetailsV2 countries={countries} setCountries={setCountries}/>}/>

                <Route path="/RegionRSLT" element ={<RegionRSLT countries={countries} setCountries={setCountries}/>}/>
                <Route path="/RegionRSLT/:index" element ={<CountryDetailsV2 countries={countries} setCountries={setCountries}/>}/>
            </Routes>
        </div>
    )
}