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
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?" imagem="'../../assets/images/template2.jpg'"/>
        <ContentBlock titulo="About Content Block" descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt labore veritatis." descricao2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusa ntium corrupti
                  neque sunt
                  praesentium aut, labore veritatis. Eaque, similique aspernatur. Perferendis doloremque ut
                  praesentium vel voluptatum quasi dolor explicabo nobis ex?" imagem="'../../assets/images/template2.jpg'"/>
       
        <ContentBlockFeature titulo="Content Block Features"/>
       
        
        
        
        
        <div class="w3l-about1 card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <h3 class="block__title mb-lg-4">Content Block Features with photo</h3>
            <div class="row cwp23-content">
              <div class="col-md-6 cwp23-text">
                <div class="row cwp23-text-cols">
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                    <a href="#url">Web design</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                    <a href="#url">Graphic design</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-signal icon-fea" aria-hidden="true"></span>
                    <a href="#url">Web development</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                  <div class="col-md-6 column mt-4">
                    <span class="fa fa-laptop icon-fea" aria-hidden="true"></span>
                    <a href="#url">Webdesign</a>
                    <p>Type your text here... Lorem ipsum dolor sit amet. </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mt-md-0 mt-5 cwp23-img">
                <img src="assets/images/template2.jpg" class="img-fluid rounded" alt=""/>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    )
}

export default Blocks