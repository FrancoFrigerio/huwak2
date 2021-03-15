import axios from 'axios';

export default class ProductService {

   
    getProductsPromo() {
        return axios.get('https://huwak.herokuapp.com/productos')
        .then(res => res.data.filter(e => e.promo === true ));
    }
    getProductByCodigo(codigo){
        return axios.get('https://huwak.herokuapp.com/productos')
        .then(res => res.data.filter(e => e.codigo === codigo))
        
    }
    getAllProducts(){
        return axios.get('https://huwak.herokuapp.com/productos')
        .then(res => res.data)
    }
    // updateProduct(_id){
    //     return axios.put(`https://huwak.herokuapp.com/updateProducto:${_id}`)
    //     .then(req=>)
    // }
  
}