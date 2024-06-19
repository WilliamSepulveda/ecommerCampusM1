import { galleryCategory } from "../js/components/gallery.js";
import {  colorProductDetail, productDetail,  titleProductDetail } from "../js/components/section.js";
import { getProductId } from "../js/module/detail.js";
import {buttonCartDetails} from "../js/components/footer.js"
import { gallerycheckout } from "./components/checkout.js";

let main__section_gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let product__information = document.querySelector(".product__information");
let main__section__color = document.querySelector("#main__section__color");
let section__footer__price = document.querySelector(".footer__ul");
let section__checkout = document.querySelector("#galleryCategory" )

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
   
    
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    product__information.innerHTML = await productDetail(info);
    main__section__color.innerHTML = await colorProductDetail(info);
    section__footer__price.innerHTML = await buttonCartDetails(info);
    let btn_minus = document.querySelector("#btn_minus");
    let btn_plus = document.querySelector("#btn_plus");
    
    
    btn_minus.addEventListener("click",quantity)
    btn_plus.addEventListener("click",quantity)
    section__checkout.innerHTML = await gallerycheckout(info);
})
const quantity = async (e)=>{
    let span_quantity = document.querySelector("#span_quantity");
    let price_discount = document.querySelector("#price_discount");
    let price_original = document.querySelector("#price_original");
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    let res = JSON.parse(localStorage.getItem(id)).data;

    let product_original_price = undefined;
    if(res.product_original_price) product_original_price = Number(res.product_original_price.replace("$", ""));
    let product_price= Number(res.product_price.replace("$", ""));

    
    if(e.target.id == "btn_plus")span_quantity.innerHTML = Number(span_quantity.innerHTML) + 1
    if(e.target.id == "btn_minus" && span_quantity.innerHTML > "1") span_quantity.innerHTML = Number(span_quantity.innerHTML) - 1;

    price_discount.innerHTML = `$${(product_price * Number(span_quantity.innerHTML)).toFixed(2)}`;
    if(product_original_price) price_original.innerHTML = `$${(product_original_price * Number(span_quantity.innerHTML)).toFixed(2)}`;
}












    // let {data} = res;
    // let {
    //     category_path,
    //     about_product,
    //     product_details,
    //     product_information,
    //     product_photos,
    //     product_variations,
    //     rating_distribution,
    //     review_aspects,
    //     ...dataUpdate
    // } = data;
    // console.log(dataUpdate);
