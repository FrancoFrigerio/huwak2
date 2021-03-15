import React, {useState, useEffect} from 'react'
import ListadoProducto from './ListadoRopa'
import ProductService from '../service/ProductService'
const Holiister =()=>{
    const [productos, setProductos] = useState([]);
    const productService = new ProductService();

    useEffect(()=>{
        productService.getAllProducts().then(data => setProductos (data))
    });
    const productosHollister = productos.filter(e => e.marca ==='HOLLISTER')
    return(
        <ListadoProducto productos={productosHollister}></ListadoProducto>
    )
}
export default Holiister;