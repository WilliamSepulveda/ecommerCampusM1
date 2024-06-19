export const galleryindex =(res, category)=>{
    let {products} = res.data
    console.log(products);
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <section>
            <div class="section__front_page">
            <a href="views/detail.html?id=${value.asin}">
            <img src="${value.product_photo}">
            </a>
                <img src="storage/img/coraxon.svg">
            </div>
            <h5>${value.product_title}</h5>
            <small>${category}</small>
            <div class="section__price">
                <span>${value.product_price}</span>
                <div  class="price__score">
                    <img src="storage/img/star.svg">
                    <p>${(value.product_star_rating!=null) ? value.product_star_rating : 0}</p>
                </div>
            </div>
        </section>
        `;
    })
    return plantilla;
};

export const galleryCategory = ({data: {product_photos}} = res)=>{
    return /*html*/`
    <article class=" article__product">
                <div  class="product__image">
                ${product_photos.map(value => `<div class="product__image__item"><img src="${value}"></div>`).join('')}
                </div>
                <div class="product__menu">
                    <a href="../">
                        <img id="back" src="/storage/img/back.svg">
                    </a>
                    <img src="../storage/img/Like icon.svg" >
                </div>
            </article>`;
}