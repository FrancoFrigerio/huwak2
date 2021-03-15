import React, {Component} from 'react'

import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
class HombresJoggers extends Component{
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
        const productosJoggers = this.state.productos.filter(e=> e.tipo === "JO")
        
        return(
            <>
                <div>
                        <ListadoRopa productos={productosJoggers}></ListadoRopa>
                </div>
            </>
            )   
    }
}
export default HombresJoggers;