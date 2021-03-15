import React, {useState, useEffect} from 'react'
import ProductService from '../service/ProductService'
import ListadoRopa from './ListadoRopa'
const Tommy =()=>{
const [products, setProducts] = useState([]);

const productService = new ProductService();
useEffect(()=>{
        productService.getAllProducts().then(data => setProducts(data))
    });
    console.log(products)
    const productosTommy = products.filter(e => e.marca === 'TOMMY HILFIGER')
    return(
       <>
        <ListadoRopa productos ={productosTommy}></ListadoRopa>
       </>
    )
}
export default Tommy;