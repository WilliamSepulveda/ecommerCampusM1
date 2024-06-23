export const titleProductDetail = async({ data:dataUpdate } = res)=>{
    return /*html*/`
        <article class="article__detail">
            <div class="detail__head">
                <h1>${dataUpdate.product_title}</h1>
                <div class="product__select">
                    <img id="btn_minus" src="../storage/img/-.svg">
                    <span id="span_quantity">1</span>
                    <img id="btn_plus" src="../storage/img/+.svg" >
                </div>
            </div>
            <div class="detail__score">
                ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
                <span>${dataUpdate.product_star_rating}</span>
                <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
            </div>
        </article>`;
}

export const colorProductDetail = async ({ data: dataUpdate } = res) => {
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
                <h5>type</h5>
                <div>
                    <p>color</p>
                    <img src="../storage/img/Choose Color.svg">
                </div>
            </div>
        </article>`;
}

export const productDetail = async (res) => {
    let { data } = res;
    let {
        category_path,
        about_product,
        product_details,
        product_information,
        product_photos,
        product_variations,
        rating_distribution,
        review_aspects,
        ...dataUpdate
    } = data;

    // Verificar si product_description es null o está vacío
    if (!dataUpdate.product_description) {
        return undefined;
    }

    // Obtener las partes de la descripción del producto
    let string1 = dataUpdate.product_description.slice(0, 165);
    let string2 = dataUpdate.product_description.slice(165);

    // Devolver el template HTML
    return /*html*/`
        <details>
            <summary>${(dataUpdate.product_description.length > 165) ? string1 + "...ver más " : string1}</summary>
            <p>${string2}</p>
        </details>
    `;
};





