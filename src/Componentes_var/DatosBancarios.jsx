 import React from 'react'
 
 const DatosBancarios =()=>{
     return(
         <>
            <div className="container cont_datos_bancarios">
                <div className="cont_datos">
                    <h6>Estos datos te van a servir...</h6>
                    <p><i class="fas fa-angle-double-right"></i><span>Titular: </span> FRIGERIO FRANCO</p>
                    <p><i class="fas fa-angle-double-right"></i><span>Banco: </span> NACION</p>
                    <p><i class="fas fa-angle-double-right"></i><span>Nro de Cuenta: </span> 2301188609</p>
                    <p><i class="fas fa-angle-double-right"></i><span>Sucursal: </span> 1440</p>
                    <p><i class="fas fa-angle-double-right"></i><span>Tipo de cuenta:</span> CORRIENTE</p>
                    <p><i class="fas fa-angle-double-right"></i><span>CBU: </span> 0110230930023011886097</p>
                    <h6>Para identificar tu pago recuerda escribir en el detalle</h6>
                    <p> <span><i class="fas fa-hand-point-right"></i></span> Tu nombre completo</p>
                    <p> <span><i class="fas fa-hand-point-right"></i></span> Nombre del producto comprado</p>
                </div>
                <div className="cont_datos">
                    <h6>Avisar pago, recuerda que vamos a necesitar los siguientes datos</h6>
                    <p><i class="fas fa-angle-double-right"></i>Numero de comprobante</p>
                    <p><i class="fas fa-angle-double-right"></i>Fecha</p>
                    <p><i class="fas fa-angle-double-right"></i>Banco Origen</p>
                    <p><i class="fas fa-angle-double-right"></i>Titular de la cuenta</p>
                    <p><i class="fas fa-angle-double-right"></i>Foto del comprobante</p>
                    <button className="btn btn-success aviso_pago">
                        <a target="_blanck"href="https://api.whatsapp.com/send?phone=543856874481&text=Hola%2Cqueria%20informar%20los%20datos%20del%20pago%20realizado%3A%0A%F0%9F%91%89Nro%20de%20comprobante%3A%0A%F0%9F%91%89Fecha%3A%20%0A%F0%9F%91%89Banco%20de%20Origen%3A%0A%F0%9F%91%89Titular%3A%0A
                        -----%0AA%20continuaci%C3%B3n%20enviare%20una%20foto%20%20del%20comprobante.%20Saludos.%0A">
                            <i class="fab fa-whatsapp"></i>
                            
                        </a>
                    </button>
                </div>
            </div>
         </>
     )
 }
 export default DatosBancarios;