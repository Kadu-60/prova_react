import React from 'react'
import './FormDefault.css'
import Input from '../../micro/Forms/Input/Input'
function FormDefault(props) {

    return(
        <>
        
            <div class="cards__heading">
                        <h3>{props.titulo} <span></span></h3>
                    </div>
            <form className="form">
                {props.children}
            </form>
        
        </>
    )
}

export default FormDefault