import React from 'react'
import './Select.css'

function Select(props) {

    return(
        <>
        <div className="select-container">
            <label>{props.label}</label>
            <select>
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        </>
    )
}

export default Select