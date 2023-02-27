import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='navBar'>
            <NavLink to ="/" className='navLink'>Home</NavLink >
            <NavLink to ="/Countries" className='navLink'>Countries</NavLink>
            <NavLink to ="/LangRSLT" className='navLink'>Languages</NavLink>
        </div>
    )
}