import React from 'react'
import './Card.css'

function Card(props) {

    return(
        <>
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-users"> </i>
                    <h3 className="text-primary number">{props.numero}</h3>
                    <p className="stat-text">{props.descricao}</p>
                  </div>
                </div>
        
        </>
    )
}

export default Card