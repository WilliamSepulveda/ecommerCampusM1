export const galleryindex =(res, category)=>{
    console.log(data);
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <section>
            <div class="section__front_page">
                    <img src="${value.product_photo} ">
                    <img src="storage/img/coraxon.svg">
             </div>
                    <h5>${value.product__title}/h5>
                    <small>${category}</small>
            <div class="section__price">
                    <span>${value.product_price} </span>
                <div  class="price__score">
                <p>${(value.product_star_rating!=null) ? value.product_star_rating : 0}</p>

                   
            </div>
            </div>
        </section>
        `;
        return plantilla; 
    })
};