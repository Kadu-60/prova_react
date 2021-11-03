import React from 'react'
import './ContentBlock.css'

function ContentBlock(props) {

    return(
        
        <div class="card card_border p-lg-5 p-3 mb-4">
        <div class="card-body py-3 p-0">
          <div class="row">
            <div class="col-lg-6 align-self pr-lg-4">
              <h3 class="block__title mb-lg-4">{props.titulo}</h3>
              <p class="mb-3">{props.descricao}</p>
              <p class="mb-lg-5 mb-3">{props.descricao2}</p>
              <a href="#read" class="btn btn-style btn-primary"> Read More</a>
            </div>
            <div class="col-lg-6 pl-lg-4 mt-lg-0 mt-4">
              <img src={props.imagem} alt="" class="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default ContentBlock
