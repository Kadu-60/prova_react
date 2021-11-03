import React from 'react'
import BlockFeature from '../../micro/BlockFeature/BlockFeature'
import './ContentBlockFeature.css'

function ContentBlockFeature(props) {

    return(
        
        <div class="card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <h3 class="block__title mb-lg-4">{props.titulo}</h3>
            <div class="row feature-3 text-center">
              <BlockFeature subTitulo="Web Design" descricao="Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur." />
              <BlockFeature subTitulo="Graphic Design" descricao="Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur." />
              <BlockFeature subTitulo="Web Development" descricao="Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur." />
              
              
              
            </div>
          </div>
        </div>
        
    )
}

export default ContentBlockFeature
