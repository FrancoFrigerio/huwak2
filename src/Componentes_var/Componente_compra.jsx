import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ProductService from '../service/ProductService'
import { withRouter } from "react-router-dom";
class Componente_compra extends Component{
    constructor(props){
        super(props)
            this.state = {
                        estado:true,
                        producto:{},
                        
                        
            }
             const {codigo} = this.props.match.params
         const productService = new ProductService()
                productService.getProductByCodigo(parseInt(codigo)).then(data => this.setState({producto : data[0]}))
       
           
          
    }
    
    render(){
       
           return(
           <>
        
            <div id="cont_comp_compra">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={this.state.producto.URL_1}class="d-block w-100" alt={this.state.producto.ALT}></img>
                        </div>
                        <div class="carousel-item">
                            <img src={this.state.producto.URL_2} class="d-block w-100" alt={this.state.producto.ALT}></img>
                        </div>
                        <div class="carousel-item">
                            <img src={this.state.producto.URL_3} class="d-block w-100" alt={this.state.producto.ALT}></img>
                        </div>
                    </div>
                    <span class="carousel-control-prev btn-carrusel" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                        <i class="fas fa-arrow-alt-circle-left "></i>
                        <span class="visually-hidden"></span>
                    </span>
                    <span class="carousel-control-next btn-carrusel" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                       <i class="fas fa-arrow-alt-circle-right"></i>
                       <span class="visually-hidden"></span>
                   
                    </span>
                </div>
                
                <div id="info_pago">
                     <div id="detalles">
                        <h4>{this.state.producto.nombre}</h4>
                        <h5>{this.state.marca}</h5>
                        <h3>Precio de lista: <span>${this.state.producto.precio},00</span></h3>
                     </div>
                     <div id="talle">
                        <h5>TALLE: <span> {this.state.producto.talle} </span></h5>
                     </div>

                     <div id="pagos">
                    {
                             this.state.producto.stock?
                         
                         <div>
                            <div className="compra_pagos" id="pagos_mp">
                                <p> Mercado pago: precio de lista + comisión = <span> ${this.state.producto.precio_mp},00</span></p>
                                <a href={this.state.producto.link_mp} target="_blanck"className="btn btn-primary w-50">Pagar</a>
                            </div>
                            
                            <div className="compra_pagos" id="pagos_bna">
                                <p>Transferencia/depósito: Precio de lista</p>
                                <Link to="/datos_bancarios">        
                                        <button className="btn w-60 btn_bna">Datos Bancarios</button>
                                </Link>
                            </div>
                            <div className="compra_pagos" id="compra_npos">
                            <p>Si quieres realizar el pago con Npos, debes informarnos y nos pondremos en contacto con vos 
                            <a target="_blanck" href="https://api.whatsapp.com/send?phone=543856874481&text=Hola%2C%20quiero%20saber%20como%20pagar%20con%20npos%20un%20producto">
                                    <i class="fab fa-whatsapp" id="compra_ws"></i>
                           </a>
                            </p>
                                <i class="far fa-credit-card tarjeta"></i>
                                <i class="fab fa-cc-mastercard tarjeta"></i>
                                <i class="fab fa-cc-visa tarjeta"></i>
                            </div>
                        </div>
                            :
                        <div id="sin_stock">
                            <i class="fas fa-exclamation-circle"></i>
                            <p>Por ahora estamos sin Stock, pero ponte en contacto con nosotros para avisarte cuando repongamos</p>
                            <a target="_blanck" href="https://api.whatsapp.com/send?phone=543856874481&text=Hola%2C%20quiero%20saber%20cuando%20tendran%20nuevamente%20disponible%20este%20producto.%20Gracias">
                                <i class="fab fa-whatsapp" id="sin_stock_wpp"></i>
                            </a>
                         </div>
                    }
                     </div>
                </div>
        </div>
    </>
        )
    }
}
export default withRouter (Componente_compra);
