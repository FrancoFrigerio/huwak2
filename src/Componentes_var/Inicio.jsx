import React, {Fragment} from 'react'
import banner from '../images/banner.gif'
import banner2 from '../images/banner2.gif'
import banner3 from '../images/banner3.gif'
import {Link} from 'react-router-dom'
import img from '../images/remera.png'
import img2 from '../images/jogger.png'
import img3 from '../images/chombas.png'
import CarruselDemo from '../Componentes_var/CarruselDemo'
import CarruselCard from '../Componentes_var/CarruselCard'
const Inicio =(props)=>{
    return(
        <Fragment>
          
            <div id="cont" id="cont_banner">
                <div className="cont_banner_2">
                    <Link to="/hombres/mallas" id="link_mallas">
                        <img src={banner} alt="" className="banner" id="img_ban1"/>
                        <img src={banner3} alt="" className="banner" id="img_ban_3"/>
                    </Link>
                </div>
            </div>
        <div id="cont2">
            <div className="cont_banner_2" id="banner2">
                <img src={banner2} alt="" className="banner" id="img_ban"/>
            </div>
        </div>
        <div id="container_inicio">
            <div className="container_e" id="etiquetas">
                <Link to="/hombres/chombas" className="link">
                     <div className="etiqueta"> <span>CHOMBAS</span> <p>desde $1650</p></div>
                </Link>
                <Link to="/hombres/remeras" className="link">
                    <div className="etiqueta"><span>REMERAS</span> <p>desde $1000</p></div>
                </Link>
                <Link to="/hombres/shorts" className="link">
                     <div className="etiqueta"><span>SHORTS</span> <p>desde $1200</p></div>
                </Link>
                <Link to="/hombres/bermudas" className="link">
                    <div className="etiqueta"><span>BERMUDAS</span> <p>desde $1600</p></div>
                </Link>
            </div>
            <div>
                <div className="container_e" id="container_cards">
                    <div className="card">
                        <Link to="/hombres/remeras"className="card_link"><img src={img} alt=""/></Link>
                    </div>
                    <div className="card">
                        <Link to="/hombres/joggers"className="card_link"><img src={img2} alt=""/></Link>
                    </div>
                    <div className="card">
                        <Link to="/hombres/chombas" className="card_link"><img src={img3} alt=""/></Link>
                    </div>
                </div>
                <div id="carrusel_cards">
                    <CarruselCard></CarruselCard>
                </div>
                <div className="container_e" id="container_target">
                    <div className="target_product">
                            <Link to="/_compra57"className="link">
                                <img src="http://files.huwak.com.ar/images/productos/55_1.png" alt="producto" className="primera"></img>
                                <p>MALLA ROSA <span>LACOSTE</span></p>
                                <button className="btn boton_inicio">OFERTA FIN DE TEMPORADA</button>
                           </Link>
                    </div>
                    <div className="target_product">
                            <Link to="/_compra47"className="link">
                                <img src="http://files.huwak.com.ar/images/productos/47_1.png" alt="producto" className="primera"></img>
                                <p>MALLA AMARILLA <span>LACOSTE</span></p>
                                <button className="btn boton_inicio">OFERTA FIN DE TEMPORADA</button>
                            </Link>
                    </div>
                    <div className="target_product">
                            <Link to="/_compra75"className="link">
                                <img src="http://files.huwak.com.ar/images/productos/75_1.png" alt="producto" className="primera"></img>
                                <p>SHORT <span>ADIDAS</span> - VERDE</p>
                                <button className="btn boton_inicio">OFERTA FIN DE TEMPORADA</button>
                            </Link>
                    </div>
                    <div className="target_product">
                            <Link to="/_compra79"className="link">
                                <img src="http://files.huwak.com.ar/images/productos/79_1.png" alt="producto" className="primera"></img>
                                <p>SHORT <span>ADIDAS</span> - NARANJA</p>
                                <button className="btn boton_inicio">OFERTA FIN DE TEMPORADA</button>
                            </Link>
                    </div>
                        
                 </div>
                 
            </div>
        </div>
                <div id="carrusel">
                     <CarruselDemo ></CarruselDemo>
                </div>
        </Fragment>
    )
}
export default Inicio;