import React from 'react'
import './Cards.css'
import CardsCards from '../../components/micro/CardsCards/CardsCards'
import CardsFoto from '../../components/micro/CardsFoto/CardsFoto'
import CardGrid from '../../components/micro/CardGrid/CardGrid'

function Cards(props) {

    return(
        <>
        <div className="container CardsCont">
        <div class="card card_border mb-5">
            <div class="cards__heading">
              <h3>Card Columns</h3>
            </div>
            <div class="card-body">
              <div class="card-columns">
                  <CardsFoto imagem="../assets/images/cart.jpg" titulo="Card title that wraps to a new line" descricao="This is a longer card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer."/>
                <CardsCards descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                      ante." citacao="Someone famous in Source Title"/>
                <CardsFoto imagem="" titulo="Card title" descricao="This card has supporting text below as a natural lead-in to additional
                      content."/>
                <CardsCards descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat." citacao="Someone famous in Source Title"/>
                
                <CardsCards descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat." citacao="Someone famous in Source Title"/>
                
                <CardsCards descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat." citacao="Someone famous in Source Title"/>
                <CardsCards descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat." citacao="Someone famous in Source Title"/>
              </div>
            </div>
          </div>
          <div class="card card_border mb-5">
            <div class="cards__heading">
              <h3>Grid Columns</h3>
            </div>
            <div class="card-body">
              <div class="row row-cols-1 row-cols-md-2">
                <CardGrid imagem="" titulo="Card title" descricao="This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer."/>
                <CardGrid imagem="" titulo="Card title" descricao="This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer."/>
                <CardGrid imagem="" titulo="Card title" descricao="This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer."/>
                <CardGrid imagem="" titulo="Card title" descricao="This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer."/>
                
                
                
              </div>
            </div>
          </div>
        </div>
         
        </>
    )
}

export default Cards