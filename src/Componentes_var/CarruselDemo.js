import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

import ProductService from '../service/ProductService';
import {Link} from 'react-router-dom';

// import './CarouselDemo.css';

const CarouselDemo = () => {
    const [products, setProducts] = useState([]);
   const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

     const productService = new ProductService();
      useEffect(() => {
          productService.getProductsPromo().then(data =>  setProducts(data.slice(0,9)));
     }) ;
     console.log(products)

    const productTemplate = (product) => {
        return (
            <div className="product-item ">
                <div className="product-item-content content1">
                    <div className="p-mb-3 cont_img_carusel">
                        <img src={product.URL_1} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.name} className="product-image imgcarusel" />
                    </div>
                    <div>
                    <h6 className="p-mb-1 ctexto carrusel_nombre">{product.nombre}</h6>
                    <h6 className="p-mt-0 p-mb-3 carrusel_precio">${product.precio},00</h6>
                    {/* <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span> */}
                         <div className="car-buttons p-mt-5">
                         <Link to={`/_compra${product.codigo}`} className="btn boton_inicio" id="linck_carrusel">Ver</Link>
                          {/* <Button label="Lo quiero ! " className="p-button-outlined p-button-success" /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
           <div >
                <Carousel value={products} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={2900} itemTemplate={productTemplate} header={<h5 className="titulo">Conocé nuestros productos en promo! </h5>} />
            </div>
        </div>
        
    );
}
export default CarouselDemo;