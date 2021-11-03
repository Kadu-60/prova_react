import React from 'react'
import './CardsFoto.css'

function CardsFoto(props) {

    return(
        
        <div class="card">
            <img src={props.imagem} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{props.titulo}</h5>
                <p class="card-text mb-4">{props.descricao}</p>
            </div>
        </div>
        
    )
}

export default CardsFoto
