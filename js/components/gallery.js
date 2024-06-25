export const galleryindex =(res, category)=>{
    let {products} = res.data;

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
};


export const galleryCheckout = async()=>{
    let keys = Object.keys(sessionStorage)
    let plantilla = "";
    keys.forEach(key=>{
        let diccionarios = JSON.parse(sessionStorage.getItem(key));
        if(diccionarios.data){
            let value = diccionarios.data;
            console.log(value);
            plantilla += /*html*/`
            <article class="details__product">
                <div class="product__imagen">
                    <img src="${value.product_photo}">
                </div>
                <div class="product__description">
                    <h3>${(value.product_title).substring(0,10)}...</h3>
                    <small>${value.product_star_rating ? value.product_star_rating : "*No Ratings*"}</small>
                    <span>${value.product_price}</span>
                </div>
                <div class="product__custom">
                    <img src="../storage/img/3puntos.svg">
                    <div class="product__select">
                        <img src="../storage/img/minus.svg" id="decreaseQuantity">
                        <span id ="quantity">1</span>
                        <img src="../storage/img/plus.svg" id="increaseQuantity">
                    </div>
                </div>
            </article>
            `;
        }
    });
    return plantilla;
};

export const galleryBill = async (info) => {
    if (!info || !info.data) {
        return ''; // Salir si no hay información válida
    }

    let precioEntero = parseFloat(info.data.product_price.replace('$', ''));
    let total = info.data * precioEntero;
    console.log(info.data.total)
    return /*html*/`
        <div id="precioTotal">Agregar al carrito $${total.toFixed(2)}</div>
        <div class="bill__total">
            <label>Total (${info.data.product_quantity} artículo${info.data.product_quantity > 1 ? 's' : ''})</label>
            <span>$${total.toFixed(2)}</span>
        </div>
        <div class="bill__fee">
            <label>Gastos de envío</label>
            <span>$0.00</span>
        </div>
        <div class="bill__subtotal">
            <label>Subtotal</label>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
};


export const updateBillDetails = (quantity, total) => {
    const billHTML = /*html*/`
        <div class="bill__total">
            <label>Total (${quantity} artículos)</label>
            <span>$${total.toFixed(2)}</span>
        </div>
        <div class="bill__fee">
            <label>Gastos de envío</label>
            <span>$0.00</span>
        </div>
        <div class="bill__subtotal">
            <label>Subtotal</label>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;

    section_bill.innerHTML = billHTML;
};


