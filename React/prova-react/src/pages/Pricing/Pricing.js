import React from 'react'
import './Pricing.css'
import CardPricing from '../../components/micro/CardPricing/CardPricing'
import CardPricing2 from '../../components/micro/CardPricing2/CardPricing2'

function Pricing(props) {

    return(
        <>
        <div className="container">
        <div class="card card_border mb-5">
            <div class="cards__heading">
              <h3>Pricing Tables -<span> Version 1</span></h3>
            </div>
            <div class="card-body">
                <div class="row px-2">
                    <CardPricing plano="Free" preco="0" descricao="Descricao do plano" domain="1" users="10" gb="2" botao="Get started"/>
                    <CardPricing plano="Regular" preco="49" descricao="Descricao do plano" domain="10" users="20" gb="10" botao="Get started"/>
                    <CardPricing plano="Premium" preco="199" descricao="Descricao do plano" domain="30" users="30" gb="15" botao="Get started"/>
                  
                  
                  
                </div>
                
            </div>
        </div>
        <div class="pricing-version-2">
          <div class="card card_border mb-5">
            <div class="cards__heading">
              <h3>Pricing Tables -<span> Version 2</span></h3>
            </div>
            <div class="card-body">
              <div class="row px-2">
                <CardPricing2 preco="19" plano="Free" domain="1" features="Ultimate Features" responsive="Responsive Ready" editor="Editor Ready Builder" blocks="Unlimited UI Blocks" support="24/7 Support System" />
                <CardPricing2 preco="29" plano="Regular" domain="10" features="Ultimate Features" responsive="Responsive Ready" editor="Editor Ready Builder" blocks="Unlimited UI Blocks" support="24/7 Support System" />
                <CardPricing2 preco="39" plano="Premium" domain="15" features="Ultimate Features" responsive="Responsive Ready" editor="Editor Ready Builder" blocks="Unlimited UI Blocks" support="24/7 Support System" />
               

              </div>
            </div>
          </div>
        </div>
        
            
            
        </div>
        </>
    )
}

export default Pricing