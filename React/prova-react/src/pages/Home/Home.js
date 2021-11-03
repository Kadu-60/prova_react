import React from 'react'
import './Home.css'
import Statistics from '../../components/macro/Statistics/Statistics'
import Charts from '../../components/macro/Charts/Charts'

function Home(props) {

    return(
        <>
         <h3>Hi John, Welcome back</h3>
         <h6>Very detailed & featured admin.</h6>
         <Statistics/>
         <Charts/>

        </>
    )
}

export default Home