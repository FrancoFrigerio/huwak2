import React from 'react'
 const InformacionCompra =(props)=>{
     return(
        <div className="container">
         <div id="cont_listado">
                {props.productos.map(e=>
                    <article className="articulos">
                       
                            <img src={e.URL_1} alt={e.ALT}></img>
                            <div className="descripcion_listado">
                                <h6>{e.nombre}</h6>
                                <h6>{e.marca}</h6>
                               
                            </div>
                            <div className="cont_info_compra">
                                <a className="btn btn-success mt-3 btn_info_compra w-100 h-25" id="first" target="_blanck" href={`https://api.whatsapp.com/send?phone=543856874481&text=Hola%2C%20quer%C3%ADa%20la%20compra%20del%20producto%20${e.URL_1}`}><p><span><i class="fab fa-whatsapp"></i></span>Si, es lo que compre!</p></a>
                                <a className="btn btn-danger mt-3 btn_info_compra w-100 h-25" target="_blanck" href="https://api.whatsapp.com/send?phone=543856874481&text=Hola%2C%20hice%20la%20compra%20pero%20hubo%20un%20error"><p><span><i class="fab fa-whatsapp"></i></span>Hubo algun error</p></a>
                            </div>
                    </article>
                    )}
               
            </div>
        </div>
     )
 }
 export default InformacionCompra;