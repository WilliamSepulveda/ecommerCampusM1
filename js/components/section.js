export const titleProductDetail = async({ data:dataUpdate } = res)=>{
    return /*html*/`
        <article class="article__detail">
            <div class="detail__head">
            <h1>${dataUpdate.product_title} </h1>
            <div class="product__select">
                <img src="../storage/img/-.svg" id="img">
                <span>1</span>
                <img src="../storage/img/+.svg" id="img">
            </div>
            </div>
            <div class="detail__score">
                ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
                <span>${dataUpdate.product_star_rating}</span>
                <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
            </div>
        </article>`;
}

export const textoProductDetail = async (res) => {
    if (!res || !res.data) {
        console.error("Datos del producto inválidos.");
        return '';
    }
    const { data: dataUpdate } = res;
    return /*html*/`
    <article class="dfgdf">
        <p>${dataUpdate.product_description}</p>
    </article>`;
};

export const colorProductDetail = async({ data:dataUpdate } = res)=>{
    return /*html*/`    
    <article class="product__custom">
    <div class="product__size">
        <h5>Choose Size</h5>
        <div>
            <img src="../storage/img/s.svg" id="imagen" tabindex="0">
            <img src="../storage/img/m.svg" id="imagen" tabindex="0">
            <img src="../storage/img/l.svg" id="imagen" tabindex="0">
            <img src="../storage/img/xl.svg" id="imagen" tabindex="0">
        </div>
    </div>
    <div  class="product__color">
        <h5>${dataUpdate.ships_from}</h5>
        <div>
            <p> ${dataUpdate.Comfort}</p>
        </div>
    </div>
</article>`;
}




export const FooterDetail = async({data: dataUpdate} = res) => {
    if (dataUpdate.product_original_price == null){
        return /*html*/`
        
        <li>
        <a href="checkout.html">
            <img src="../storage/img/shopping-cart.svg">
            <span>Add to card ${dataUpdate.product_price}</span>
        </a>
    </li>
    `}

    return /*html*/ `
    <li>
        <a href="checkout.html">
            <img src="../storage/img/shopping-cart.svg">
            <span id ="precioTotal">Add to card ${dataUpdate.product_price}<sub>${dataUpdate.product_original_price}</sub></del></span>
        </a>
    </li>
    `
};