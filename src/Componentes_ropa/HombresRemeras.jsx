import React, {Component} from 'react'

import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
class HombresRemeras extends Component{
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
        const productService = new ProductService()
        productService.getAllProducts().then(data => this.setState({productos: data}))
        // const productsHombresRemeras = this.state.productos.filter(e=> e.estacion === "VER")
        
    }
    render(){
        const productosRemeras = this.state.productos.filter(e=> e.tipo === "RE")
        
        return(
            <>
                <div>
                        <ListadoRopa productos={productosRemeras}></ListadoRopa>
                </div>
            </>
            )   
    }
}
export default HombresRemeras;