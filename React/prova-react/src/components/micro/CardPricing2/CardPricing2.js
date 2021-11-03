import React from 'react'
import './CardPricing2.css'

function CardPricing2(props) {

    return(
        
        <div class="col-lg-4 col-md-6 px-2 mb-4">
        <div class="card text-center card__hover">
          <div class="card-header">
            <h3 class="display-4"><span class="currency">$</span>{props.preco}<span class="period">/month</span></h3>
          </div>
          <div class="card-block">
            <h4 class="card-title">
              {props.plano}
            </h4>
            <ul class="list-group">
              <li class="list-group-item">{props.domain} Domain</li>
              <li class="list-group-item">{props.features}</li>
              <li class="list-group-item">{props.responsive}</li>
              <li class="list-group-item">{props.editor}</li>
              <li class="list-group-item">{props.blocks}</li>
              <li class="list-group-item">{props.support}</li>
            </ul>
            <a href="#" class="btn btn-style btn-primary mt-4">Choose Plan</a>
          </div>
        </div>
      </div>
        
    )
}

export default CardPricing2
