import React from 'react'

import './style.css'

// props: broker, ticker
export default function paperCard(props){
    return(
        <div className="paperDetails">
            <div className="paperHead">
                <h3>{props.broker}</h3>
                <p><a href='#'>+</a></p>
            </div>
            <p>{props.ticker}</p>
            <div className="positions">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>R$</th>
                            <th>%</th>
                            <th>Qtd</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="rowTitle">Posição atual</td>
                            <td>0,00</td>
                            <td>0,00</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="rowTitle">Posição ideal</td>
                            <td>0,00</td>
                            <td>0,00</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td className="rowTitle">Ajuste Posições</td>
                            <td>0,00</td>
                            <td>0,00</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
    )
}