import React, {Component} from 'react'

import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
class HombresChombas extends Component{
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
        const productService = new ProductService()
        productService.getAllProducts().then(data => this.setState({productos: data}))
        // const productsHombresVerano = this.state.productos.filter(e=> e.estacion === "VER")
        
    }
    render(){
        const productosChombas = this.state.productos.filter(e=> e.tipo === "CH")
        
        return(
            <>
                <div>
                        <ListadoRopa productos={productosChombas}></ListadoRopa>
                </div>
            </>
            )   
    }
}
export default HombresChombas;