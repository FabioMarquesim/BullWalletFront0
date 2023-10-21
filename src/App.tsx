import React from 'react'
import './App.css'
import './app/bwstyle.css'
import './components/papersCards/style.css'

import SideMenu from './components/sideMenu/sideMenu'
import Papers from './components/papersCards/papers'

const  gestaoPortifolio = ()=> {
    return(
        <div className="gestaoContainer">
            <section className="sideMenu">
                <SideMenu/>
            </section>
            <section className="gestaoContent">
                <section className="classesAndPatrimonyContainer">
                    <section className="classesContainer">
                        <h1>Classes</h1>
                        <div className="labelPercentageContainer">
                            <div className="labelContainer">
                                <h2>Ações</h2>
                                <h2>FII</h2>
                                <h2>ETF</h2>
                            </div>
                            <div className="percentageContainer"> 
                                <div className="percentage">
                                    <p>15<span> %</span></p>
                                </div>
                                <div className="percentage">
                                    <p>48<span> %</span></p> 
                                </div>  
                                <div className="percentage">
                                    <p>37<span> %</span></p> 
                                </div>       
                            </div>
                        </div>
                    </section>
                    <section className="patrimonyContainer">
                        <h1>Patrimônio</h1>
                        <div className="patrimonyData">
                            <div id="totalAvailable">
                                <h2>Saldo disponível</h2>
                                <p><span>R$ </span>1,500.00</p>
                            </div>
                            <div id="totalInvested" >
                                <h2>Total investido</h2>
                                <p><span>R$ </span>150,000.00</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="papersContainer">
                    <h1>Papéis</h1>
                </section>
                <section className="papersDetailsContainer">
                    <Papers/>
                    <div className="paperDetails paperAddDetails">
                        <span>+</span>
                        <span>Adicionar um novo papel</span>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default gestaoPortifolio;