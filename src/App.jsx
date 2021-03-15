import React, { Component, Fragment} from 'react'
import './App.css';
import logo from './logos/logo.png'

import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

//Componentes BarraNav
import Barra from './barraNav/Barra';
import SideBar from './ComponentesNav/Sidebar';

//Componentes_var
import Inicio from './Componentes_var/Inicio';
import Footer from './Componentes_var/Footer';
import ComponenteCompra from './Componentes_var/Componente_compra';
import DatosBancarios from './Componentes_var/DatosBancarios';
import PoliticaEnvios from './Componentes_var/Politica_envios';
import PaginaConstruccion from './Componentes_var/Pagina_construccion'
import CompraAprobada from './Componentes_var/Compra_aprobada'
import ComoComprar from './Componentes_var/ComoComprar'
import UpdateProduct from './Componentes_var/UpdateProduct'
//Componentes_ropa
import HombresVerano from './Componentes_ropa/HombresVerano'
import HombresInvierno from './Componentes_ropa/HombresInvierno'
import HombresChombas from './Componentes_ropa/HombresChombas'
import HombresJoggers from './Componentes_ropa/HombresJoggers'
import HombresMallas from './Componentes_ropa/HombresMallas'
import HombresShorts from './Componentes_ropa/HombresShorts'
import HombresRemeras from './Componentes_ropa/HombresRemeras'
import Tommy from './Componentes_ropa/Tommy'
import Hollister from './Componentes_ropa/Hollister'
import Lacoste from './Componentes_ropa/Lacoste'
// import MujeresJeans from './Componentes_ropa/MujeresJeans'

class App extends Component{
    constructor(props){
        super(props)
        this.state ={
            productos : []
        }
        axios.get('https://huwak.herokuapp.com/productos')
        .then(response =>{
            this.setState({productos : response.data})
        }).catch(error =>{
            console.log(error)
        })
    }
      
        render(){
           
            return(
               <Fragment> <Router>
               <header> 
                  
                   <Link to="/">
                        <div id="logo">
                            <img src={logo} alt="logo" id="inicio"/> 
                        </div>
                    </Link>
                   <div id="redes">
                    <a href="https://www.instagram.com/huwak_/" target="_blanck">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
               </header>
              
             
                     <div id="barra">
                          <Barra/>
                     </div>
                    
                      <div id="sideBar">
                             <SideBar></SideBar>
                        </div>
                        <main>
                        <Route exact path= "/">
                           <Inicio></Inicio>
                        </Route>
                  
                  <Route exact path= "/hombres/verano">
                     <HombresVerano></HombresVerano>
                  </Route>
                  <Route exact path= "/hombres/invierno">
                     <HombresInvierno></HombresInvierno>
                  </Route>
                  <Route exact path= "/hombres/chombas">
                     <HombresChombas></HombresChombas>
                  </Route>
                  <Route exact path= "/hombres/joggers">
                    <HombresJoggers></HombresJoggers>
                  </Route>
                  <Route exact path= "/hombres/mallas">
                   <HombresMallas></HombresMallas>
                  </Route>
                  <Route exact path= "/hombres/shorts">
                  <HombresShorts></HombresShorts>
                  </Route>
                  <Route exact path= "/hombres/remeras">
                  <HombresRemeras></HombresRemeras>
                  </Route>
                  <Route exact path= "/hombres/bermudas">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>

                  <Route exact path= "/mujeres/verano">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/mujeres/invierno">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/mujeres/remeras">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/mujeres/interior">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/mujeres/jeans">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/mujer/">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>

                  <Route exact path= "/niños/verano">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/niños/invierno">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>


                  <Route exact path= "/marcas/tommy">
                  <Tommy></Tommy>
                  </Route>
                  <Route exact path= "/marcas/holliester">
                  <Hollister></Hollister>
                  </Route>
                  <Route exact path= "/marcas/lacoste">
                  <Lacoste></Lacoste>
                  </Route>



                
                  <Route exact path= "/PoliticaEnvios">
                    <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/datos_bancarios">
                     <DatosBancarios></DatosBancarios>
                  </Route>
                  <Route exact path= "/ComoComprar">
                  <PaginaConstruccion></PaginaConstruccion>
                  </Route>
                  <Route exact path= "/Compra_aprobada:codigo">
                     <CompraAprobada></CompraAprobada>
                  </Route>
                <Route exact path= "/_compra:codigo">
                     <ComponenteCompra></ComponenteCompra>
                  </Route>
                  <Route exact path= "/updateProduct">
                    <UpdateProduct></UpdateProduct>
                  </Route>
            </main>
             <Footer></Footer>
              </Router>
              </Fragment>
            )
    }
}
export default App;