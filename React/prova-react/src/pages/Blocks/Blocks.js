import React from 'react'
import './Blocks.css'
import ContentBlock from '../../components/micro/ContentBlock/ContentBlock'
import ContentBlockFeature from '../../components/macro/ContentBlockFeature/ContentBlockFeature'

function Blocks(props) {

    return(
        <div class="container-fluid content-top-gap">

        
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb my-breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Elements</a></li>
            <li class="breadcrumb-item active" aria-current="page">Content Blocks</li>
          </ol>
        </nav>
        
        <div class="cards__heading">
          <h3>Content Blocks</h3>
        </div>

        <ContentBlock titulo="About Content Block" descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis." descricao2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?" imagem="img/template2.jpg"/>
        <ContentBlock titulo="About Content Block" descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis." descricao2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?" imagem="'../../assets/images/template2.jpg'"/>
       
        <ContentBlockFeature titulo="Content Block Features"/>
        <ContentBlock titulo="About Content Block" descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis." descricao2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?" imagem="'../../assets/images/template2.jpg'"/>
       
        
        
        
        
        
        

      </div>
    )
}

export default Blocks