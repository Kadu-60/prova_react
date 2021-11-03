import React from 'react'
import './Home.css'
import Statistics from '../../components/macro/Statistics/Statistics'
import Charts from '../../components/macro/Charts/Charts'

function Home(props) {

    return(
        <>
        <div class="container-fluid content-top-gap">

            <nav aria-label="breadcrumb">
            <ol class="breadcrumb my-breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
            </nav>
            <h3>Hi John, Welcome back</h3>
            <h6>Very detailed & featured admin.</h6>
            <Statistics/>
            <Charts/>
         </div>

        </>
    )
}

export default Home