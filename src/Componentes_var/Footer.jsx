import React from 'react'

import mp from '../images_servidor/mp.png'
import n_pos from '../images_servidor/n_pos.png'
import bna from '../images_servidor/bna.png'
//tarjetas
import amex from '../images_servidor/amex.png'
import cabal from '../images_servidor/cabal.png'
import cmr from '../images_servidor/cmr.png'
import cordobesa from '../images_servidor/cordobesa.png'
import mastercard from '../images_servidor/mastercard.png'
import naranja2 from '../images_servidor/naranja2.png'
import visa from '../images_servidor/visa.png'

import { Link } from 'react-router-dom'
const Footer =()=>{
    return(
        <>
        <div id="cont_footer">
           
           <h4 className="carrusel_precio" id="titulo_footer">MEDIOS DE PAGO</h4>
            <div className="cont" id="tipos_pago">
            
                <div id="m_pago" className="form_pago">
                    <span><img src={mp} alt="mp"></img></span>
                    <p>Ingresa a MercadoPago y realizá el pago, luego nos informas que hagamnos el envío</p>
                    {/* <p>Luego nos informas que hagamnos el envío</p> */}
                </div>
                <div id="n_pos" className="form_pago"> 
                    <span><img src={n_pos} alt="n_pos"></img></span>
                    <div id="tarjetas">
                        <img src={amex} alt="amex"/>
                        <img src={cabal} alt="cabal"/>
                        <img src={cmr} alt="cmr"/>
                        <img src={cordobesa} alt="cordobesa"/>
                        <img src={mastercard} alt="mastercard"/>
                        <img src={naranja2} alt="naranja2"/>
                        <img src={visa} alt="visa"/>
                    </div>

                </div>
                <div id="bna" className="form_pago">
                    <span><img src={bna} alt="bna"></img></span>
                    <p>Una vez que finalices la trasferencia/deposito, mandanos el compobante</p>                    
                    
                </div>
            </div>
          
            <div id="quienes_contacto">
                <div id="compra_segura" className="cont2 cont ">
                    <h6>SITIO SEGURO</h6>
                      <i class="fas fa-lock"></i> <span>Protegemos tus datos</span>
                </div>
                <div className="cont2 cont " id="quienes">
                <h6>¿QUIENES SOMOS?</h6>
                    <a target="_blanck" href="https://www.instagram.com/marialuzcisneros_/"><p><span><i class="fab fa-instagram"></i></span> marialuzcisneros_</p></a>
                    <a target="_blanck" href="https://www.instagram.com/frigerio_franco/"><p><span><i class="fab fa-instagram"></i></span> frigerio_franco</p></a>
                </div>
                <div className="cont2 cont " id="footer_links">
                    <h6>SECCIONES</h6>
                    <Link  className="footer_link"><i class="fas fa-arrow-circle-up"></i>Inicio</Link>
                    <Link to="/politica_envios" className="footer_link"> <i class="fas fa-paper-plane"></i>Politica de Envios</Link>
                    <Link to="/ComoComprar"className="footer_link"><i class="fas fa-question-circle"></i>¿Como comprar?</Link>
                </div>
                
                
                 <div className="cont2 cont " id="contacto">
                    <h6>CONTÁCTANOS</h6>
                        <a href="mailto:contacto@huwak.com.ar"><p><span><i class="fas fa-envelope"></i></span> contacto@huwak.com.ar</p></a>
                        <a target="_blanck" href="https://api.whatsapp.com/send?phone=+64 9 386 687-4481"><p><span><i class="fab fa-whatsapp"></i></span>Consultas/Informes de pago/Stock</p></a>
                </div>
           </div> 
            
        </div>
        </>
    )
}
export default Footer