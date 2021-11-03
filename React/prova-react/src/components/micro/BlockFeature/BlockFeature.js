import React from 'react'
import './BlockFeature.css'

function BlockFeature(props) {

    return(
            <div class="col-md-4 three-grids-columns mt-5">
                <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                <a href="#">

                  <h4>{props.subTitulo}</h4>
                </a>
                <p>{props.descricao}</p>

                <a href="#" class="actionbg">Read More</a>
              </div>
        
    )
}

export default BlockFeature
