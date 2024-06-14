import { menuListCategoryIndex } from "./components/menu.js";
import { galleryindex  } from "./components/gallery.js";
import { getAllProductName, getAllCategory } from "./module/app.js";

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");

addEventListener("DOMContentLoaded", async e =>{
    let data = await getAllCategory();
    nav__ul.innerHTML = await menuListCategoryIndex(data);  
})

input__search.addEventListener("change",async e =>{
    let params = new URLSearchParams(location.search);
    let data = { search : e.target.value}
    input__search.value = null;
    let res = await getAllProductName(data);
    console.log("Response from getAllProductName:", res.data.products)

    main__article.innerHTML = galleryindex(res, params.get ('id'));
    console.log(main__article)
    
});


