import React from 'react'
import './style.css'
import '../../app/bwstyle.css'

export default function sideMenu(){
    return(
        <section className="sideMenuContainer">
            <div className="logo">
                <h1>BW</h1>
            </div>
            <nav className="sideMenu">
                
                <a href="#">Portifólio</a>
                <a href="#">Perfil</a>
                
            </nav>
            <div className="profilePhoto">
                <img src="#" alt="foto perfil"></img>
            </div>
        </section>
    )
}