import React, {useEffect, useState} from 'react'
import ProductoService from '../service/ProductService'
import ListadoRopa from '../Componentes_ropa/ListadoRopa'
const Lacoste =()=>{
    const [products, setProducts] = useState([])
    const productService = new ProductoService();

    useEffect(()=>{
        productService.getAllProducts().then(data => setProducts(data))
    })
    const productosLacoste = products.filter( e=> e.marca === 'LACOSTE')
    return(
            <ListadoRopa productos ={productosLacoste}></ListadoRopa>
    )
}
export default Lacoste;