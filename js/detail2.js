import { galleryCategory } from "../js/components/gallery.js";
import { textoProductDetail, titleProductDetail } from "../js/components/section.js";
import { getProductId } from "../js/module/detail.js";

let main__section_gallery = document.querySelector("#main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");
let main__section__description = document.querySelector("#main__section__description");

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    main__section__description.innerHTML = await textoProductDetail(info);
    
    
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
})
