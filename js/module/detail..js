import { galleryCategory } from "../components/gallery.js";
import { titleProductDetail } from "../components/section.js";
import { getProductId } from "../module/detail.js";

let main__section__gallery = document.querySelector("main__section__gallery");
let main__section__title = document.querySelector("#main__section__title");

addEventListener("DOMContentLoaded", async(e)=>{
    
    let params = new URLSearchParams(location.search);
    console.log(params.get("id"));
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    let {info} = JSON.parse(localStorage.getItem(id));
    main__section__gallery.innerHTML = await galleryCategory(JSON.parse(localStorage.getItem({id})))
    main__section__title.innerHTML = await titleProductDetail(info);
    
    
    
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