import React from 'react'
import {Link} from 'react-router-dom'
const Barra =()=>{
    return(
        <div>
        
        <nav className="navbar  navbar-expand-lg" >
            <div className="container-fluid">
                       <div className="collapse navbar-collapse" >
                            
                              <ul className="navbar-nav" id="ulbarra">
                              <li className="nav-item dropdown">
                               <label className="nav-link dropdown-toggle"id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hombres
                              </label>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                          <li className="label2"><Link to="/hombres/verano" ><label >Verano</label></Link> </li>
                                          <li className="label2"><Link to="/hombres/invierno"><label >invierno</label></Link></li>
                                          <li className="label2"><Link to="/hombres/chombas"><label >chombas</label></Link></li>
                                          <li className="label2"><Link to="/hombres/joggers"><label >joggers</label></Link></li>
                                          <li className="label2"><Link to="/hombres/mallas"><label>mallas</label></Link></li>
                                          <li className="label2"><Link to="/hombres/shorts"><label >shorts</label></Link></li>
                                    </ul>
                              </li>
                             
                              <li className="nav-item dropdown">
                              <label className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mujeres
                              </label>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                          <li className="label2"><Link to="/mujeres/verano" ><label className="label2">Verano</label></Link></li>
                                          <li className="label2"><Link to="/mujeres/invierno" ><label className="label2">Invierno</label></Link></li>
                                          <li className="label2"><Link to="/mujeres/remeras" ><label className="label2">remeras</label></Link></li>
                                          <li className="label2"><Link to="/mujeres/interior" ><label className="label2">interior</label></Link></li>
                                          <li className="label2"><Link to="/mujeres/jeans" ><label className="label2">jeans</label></Link></li>
                                          <li className="label2"><Link to="/mujeres/" ><label className="label2">catalogo</label></Link></li>
                                    </ul>
                              </li>

                              <li className="nav-item dropdown">
                              <label className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Niños
                              </label>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                          <li className="label2"><Link to="/niños/verano" ><label >Verano</label></Link> </li>
                                          <li className="label2"><Link to="/niños/invierno"><label >Invierno</label></Link></li>
                                                            
                                    </ul>
                              </li>
                              <li className="nav-item dropdown">
                              <label className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Marcas
                              </label>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                          <li className="label2"><Link to="/marcas/tommy" ><label >Tommy</label></Link> </li>
                                          <li className="label2"><Link to="/marcas/holliester"><label >Holliester</label></Link></li>
                                          <li className="label2"><Link to="/marcas/lacoste"><label >Lacoste</label></Link></li>
                                    </ul>
                              </li>

                            
                              
                              </ul>
                        </div>
            </div>
</nav>
        
        </div>
    )
}
export default Barra;