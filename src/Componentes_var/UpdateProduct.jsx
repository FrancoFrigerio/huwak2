import React from 'react'

const UpdateProduct =()=>{
    return(
        <>
          <h3>Componente de actualizacion de productos</h3>
          <form className="container col-6">
              <label for="_id" className="col-3">Ingrese el id</label>
              <input 
              className="block-d col-6"
              type="text"
              placeholder=" aqui va la Id del producto"
              name="_id"
              id="_id"></input>
              <button className="btn btn-warning block-d w-100">Enviar</button>
          </form>
        </> 
        
    )
}
export default UpdateProduct;
