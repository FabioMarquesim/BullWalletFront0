import React from 'react'
import './style.css'
//import '../../alfa_style.css'

import SideMenu from '../../components/sideMenu/sideMenu'
import PaperCard from '../../components/papersCards/paperCard'

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
                                    <p>115<span> %</span></p> 
                                </div>       
                            </div>
                        </div>
                    </section>
                    <section className="patrimonyContainer">
                        <h1>Patrimônio</h1>
                        <div className="patrimonyData">
                            <div id="totalAvailable">
                                <h2>Saldo disponível</h2>
                                <p><span>R$ </span>1500000.00</p>
                            </div>
                            <div id="totalInvested" >
                                <h2>Total investido</h2>
                                <p><span>R$ </span>150000.00</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="papersContainer">
                    <h1>Papéis</h1>
                    <ul>
                        <li>teste1</li>
                        <li>teste2</li>
                        <li>teste3</li>
                        <li>teste4</li>
                        <li>teste5</li>
                    </ul>
                </section>
                <section className="papersDetailsContainer">
                    <PaperCard/>
                    <PaperCard/>
                    <PaperCard/>
                    <PaperCard/>
                    <PaperCard/>
                    <PaperCard/>
         
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