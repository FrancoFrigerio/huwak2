import React, {Component} from 'react'

import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
class HombresShorts extends Component{
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
        const productosShorts = this.state.productos.filter(e=> e.tipo === "SH")
        
        return(
            <>
                <div>
                        <ListadoRopa productos={productosShorts}></ListadoRopa>
                </div>
            </>
            )   
    }
}
export default HombresShorts;