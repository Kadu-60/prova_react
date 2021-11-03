import React from 'react'
import './Charts.css'
import CardChart from '../../micro/CardChart/CardChart'

function Charts(props) {

    return(
        <>
        <div class="chart">
          <div class="row">
            <CardChart descricao="Bar Chart" update="Updated 2 hours ago"/>
            <CardChart descricao="Line Chart" update="Updated just now"/>
            
          </div>
        </div>
        
        </>
    )
}

export default Charts