import React, {Component} from 'react'

import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
class HombresVerano extends Component{
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
        const productosInvierno = this.state.productos.filter(e=> e.estacion === "INV")
        
        return(
            <>
                <div>
                        <ListadoRopa productos={productosInvierno}></ListadoRopa>
                </div>
            </>
            )   
    }
}
export default HombresVerano;