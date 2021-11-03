import React from 'react'
import './Charts.css'

function Charts(props) {

    return(
        <>
        <div class="chart">
          <div class="row">
            <div class="col-lg-6 pr-lg-2 chart-grid">
              <div class="card text-center card_border">
                <div class="card-header chart-grid__header">
                  Bar Chart
                </div>
                <div class="card-body">
                  
                  <div id="container">
                    <canvas id="barchart"></canvas>
                  </div>
                  
                </div>
                <div class="card-footer text-muted chart-grid__footer">
                  Updated 2 hours ago
                </div>
              </div>
            </div>
            <div class="col-lg-6 pl-lg-2 chart-grid">
              <div class="card text-center card_border">
                <div class="card-header chart-grid__header">
                  Line Chart
                </div>
                <div class="card-body">
                  
                  <div id="container">
                    <canvas id="linechart"></canvas>
                  </div>
                  
                </div>
                <div class="card-footer text-muted chart-grid__footer">
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default Charts