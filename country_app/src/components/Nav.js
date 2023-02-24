import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/Countries">Countries</NavLink>
        </div>
    )
}