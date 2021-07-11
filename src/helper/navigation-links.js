import React from 'react'
import {Link} from 'react-router-dom'


const navLinks = [
    { name: 'Games', route: '/', id: Math.random() },
    { name: 'Creators', route: '/creators', id: Math.random() },
]


 const mapOver = () => {
     return (
     <ul>
        {navLinks.map((link) => {
            return (
                <Link key={link.id} to={link.route}> {link.name} </Link>
            )
        })}
        </ul>
     )
}


export default mapOver