import { getAllproducName } from "./module/app";
import { galleryindex } from "./module/gallery";


let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__aricle")


input__search.addEventListener("change",async e =>{
    let data = { search : e.target.value}
    input__search.value = null;

    let res = await getAllproducName(data);
    main__article.innerHTML += galleryindex(res);

    
});