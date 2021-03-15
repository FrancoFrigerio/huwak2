import React from 'react'
import {Link} from 'react-router-dom'
const ListadoRopa =(props)=>{
    return(
       <>
       <div id="cont_listado">
                {props.productos.map(e=>
                    <article className="articulos">
                        <Link to={`/_compra${e.codigo}`}>
                            <img src={e.URL_1} alt={e.ALT}></img>
                            <div className="descripcion_listado">
                                <h6>{e.marca}</h6>
                                <h6>{e.nombre}</h6>
                                <p>${e.precio},00</p>
                            </div>
                            <span className="btn boton_inicio btn_listado">Ver</span>
                        </Link>
                    </article>
                    )}
               
            </div>
       </>
    )
}
export default ListadoRopa;