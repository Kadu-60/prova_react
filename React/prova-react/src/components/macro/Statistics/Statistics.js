import React from 'react'
import './Statistics.css'
import Card from '../../micro/Card/Card'

function Statistics(props) {

    return(
        <>
        <div className="satistics">
            <div className="row">
                <div class="col-xl-6 pr-xl-2">
                    <div class="row">
                        <Card numero="29.75 M" descricao="Total Users"/>
                        <Card numero="51.25 K" descricao="Daily Visitors"/>
                        
                    </div>

                </div>
                <div class="col-xl-6 pr-xl-2">
                    <div class="row">
                        <Card numero="166.89 M" descricao="Downloads"/>
                        <Card numero="1,250k" descricao="Purchased"/>
                        
                    </div>

                </div>

            </div>
        </div>
        
        </>
    )
}

export default Statistics