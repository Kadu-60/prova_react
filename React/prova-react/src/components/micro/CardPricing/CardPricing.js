import React from 'react'
import './CardPricing.css'

function CardPricing(props) {

    return(
        
                <div class="col-md-4 px-2">
                    <div class="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                      <div class="card-header p-0 card-heading">
                        <h4 class="mb-4">{props.plano}</h4>
                      </div>
                      <div class="card-body p-0">
                        <h1 class="card-title pricing-card-title my-price-title">${props.preco}<small
                            class="text-dull">/month</small>
                        </h1>
                        <p>{props.descricao}</p>
                        <ul class="list-unstyled list-pricing mt-3 mb-4">
                          <li>{props.domain} Domain</li>
                          <li>{props.users} users included</li>
                          <li>{props.gb} GB of storage</li>
                          <li>Email support</li>
                          <li>Help center access</li>
                        </ul>
                        <div class="mt-4">
                          <a href="signup.html" class="btn btn-lg btn-outline-primary btn-style border-btn">{props.botao}</a>
                        </div>
                      </div>
                    </div>
                  </div>
        
    )
}

export default CardPricing
