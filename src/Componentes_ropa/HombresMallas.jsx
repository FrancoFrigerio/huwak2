import React ,{Component} from 'react'

import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
class HombresMallas extends Component{
    constructor(props){
        super(props)
        this.state = {
            productos:[]
        }
        const productService = new ProductService()
        productService.getAllProducts().then(data => this.setState({productos : data}))
    }
    render(){
            const productosMallas = this.state.productos.filter(e => e.tipo === "MA")

        return(
        <>
            <ListadoRopa productos ={ productosMallas}></ListadoRopa>
        </>
    )
}
}
export default HombresMallas;