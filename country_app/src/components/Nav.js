import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='navBar'>
            <NavLink to ="/" className='navLink'>Home</NavLink >
            <NavLink to ="/AllCountries" className='navLink'>All Countries</NavLink>
            <NavLink to ="/NameRSLT" className='navLink'>By Name</NavLink>
            <NavLink to ="/LangRSLT" className='navLink'>By Language</NavLink>
        </div>
    )
}