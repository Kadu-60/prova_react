import React from 'react'
import './Formulario.css'
import Input from '../../components/micro/Forms/Input/Input'
import FormDefault from '../../components/macro/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import Select from '../../components/micro/Forms/Select/Select'

function Formulario(props) {

    return(
        <div class="container-fluid content-top-gap">

        
                <nav aria-label="breadcrumb" class="mb-4">
                <ol class="breadcrumb my-breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Forms</li>
                </ol>
                </nav>

                <div class="card card_border py-2 mb-4">
                    <div class="card-body">
                    <FormDefault titulo="Forms">
                        <Input label="Email address" type="text" placeholder="Enter email" small="We'll never share your email with
                                    anyone else."/>
                        <Input label="Password" type="password"  placeholder="Password" />
                        <Input label="Check me out" type="checkbox"/>
                        <Button label="Submit" onclick="submit" class="btn btn-primary"/>
                        
                    </FormDefault>
                        
                    </div>
                </div>
                <div class="card card_border py-2 mb-4">
                    <div class="card-body">
                    <FormDefault>
                    <div class="row">
                        <div class="form-group col-md-6">
                        <Input label="Email address" type="text" placeholder="Enter email"/>
                        </div>
                        <div class="form-group col-md-6">
                        <Input label="Password" type="password"  placeholder="Password" />
                        
                        </div>
                    </div>
                        <Input label="Address" type="text" placeholder="123 Adress" />
                        <Input label="Address" type="text" placeholder="Apartment, studio, or floor" />
                        <div class="form-row">
                            <div class="form-group col-md-6">
                            <Input label="City" type="text"/>
                            </div>
                            <div class="form-group col-md-4">
                               <Select label="State"/>
                            </div>
                            <div class="form-group col-md-2">
                            <Input label="Zip" type="text"/>
                            </div>
                        </div>
                        <Input label="Check me out" type="checkbox"/>
                        <Button label="Sign in" onclick="submit" class="btn btn-primary"/>
                        
                    </FormDefault>
                        
                    </div>
                </div>
                
       
        </div>
    )
}

export default Formulario