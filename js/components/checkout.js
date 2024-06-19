export const gallerycheckout = async (res, category) => {
    let products = (res && res.data && Array.isArray(res.data.products)) ? res.data.products : [];

    console.log(products);
    let plantilla = "";

    products.forEach((value) => {
        plantilla += /*html*/`
        <article class="details__product">
            <div class="product__imagen">
                <img src="${value.product_photo}" >
            </div>
            <div class="product__description">
                <h3>${value.product_title}</h3>
                <small>${category}</small>
                <span>${value.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/3puntos.svg">
                <div class="product__select">
                    <img src="../storage/img/minus.svg">
                    <span>4</span>
                    <img src="../storage/img/plus.svg">
                </div>
            </div>
        </article>`;
    });

    return plantilla;
}
