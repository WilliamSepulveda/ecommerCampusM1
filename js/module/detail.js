import { headers } from "../components/env.js";
import { galleryCategory } from "../components/gallery.js";

export const getProductId = async({id:idCategory})=>{
    console.log("Esperando .......");
    console.log(idCategory)
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${idCategory}&country=US`;
    
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}