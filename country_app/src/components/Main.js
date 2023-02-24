import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Countries from './Countries'

export default function Main () {
    return (
        <div className='main'>
            <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/countries" element ={<Countries/>}/>
            </Routes>
        </div>
    )
}