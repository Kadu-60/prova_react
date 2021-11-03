import React from 'react'
import './CardsCards.css'

function CardsCards(props) {

    return(
        
                <div class="card p-3">
                  <blockquote class="blockquote mb-0 card-body">
                    <p class="mb-4">{props.descricao}
                    </p>
                    <footer class="blockquote-footer">
                      <small class="text-muted">
                        {props.citacao}
                      </small>
                    </footer>
                  </blockquote>
                </div>
        
    )
}

export default CardsCards




