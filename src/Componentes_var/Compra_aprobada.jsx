import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import InformacionCompra from '../Componentes_var/InformacionCompra'
import ProductService from '../service/ProductService'
const Compra_aprobada =()=>{
 const {codigo} = useParams();
    const [products, setProducts] = useState([])
 const productService = new ProductService();
  useEffect(()=> productService.getProductByCodigo(parseInt(codigo)).then (data => setProducts(data)))
  
    return(
      <>
      <div className="container cont_aprobada">
          <div className="datosCompra">
             <h6>Corrobora los siguientes datos, si todo está bien, coordinamos el envío</h6>
              <div>
                 <InformacionCompra productos={products}></InformacionCompra>
              </div>
              
          </div>
      
      </div>
      </>
    )
}
export default Compra_aprobada;