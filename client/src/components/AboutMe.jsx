import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/AboutMe.css'

export default function AboutMe() {
    return(
        <div className='about'>
            <h1>Hola! soy Gonzalo Lorenzón, estudio en la academia Henry y este es mi Proyecto Individual de Dogs! donde podras conocer, crear, investigar, divertirte y más importante poder conocer posiblemente a tu próximo compañero canino! Espero que te guste fue hecho con mucho amor! 💖 </h1>
            <Link to ='/home'>
                <button className='button'>Back</button>
            </Link>
            <h4 className='linkedin'>LINKEDIN: Gonzalo Lorenzon</h4>
            <h4 className='github'>GITHUB: Zalo7</h4>
            <h4 className='discord'>DISCORD: Zalo7#8436</h4>
        </div>
    )
}