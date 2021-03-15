import React from 'react'
import {Link} from 'react-router-dom'
import img from '../images/remera.png'
import img2 from '../images/jogger.png'
import img3 from '../images/chombas.png'
const CarruselCard =()=>{
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
       <Link to="/hombres/remeras"className="card_link"><img src={img} alt=""/></Link>
    </div>
    <div class="carousel-item">
      <Link to="/hombres/joggers"className="card_link"><img src={img2} alt=""/></Link>
    </div>
    <div class="carousel-item">
      <Link to="/hombres/chombas" className="card_link"><img src={img3} alt=""/></Link>
    </div>
  </div>
</div>
    )
}
export default CarruselCard;