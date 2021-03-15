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
        const productosVerano = this.state.productos.filter(e=> e.estacion === "VER")
        console.log(productosVerano.length)
        return(
            <>
                <div>
                        <ListadoRopa productos={productosVerano}></ListadoRopa>
                </div>
            </>
            )   
    }
}
export default HombresVerano;