export const gallerycheckout = ({data:dataUpdate}) => {
        return  /*html*/`
            <article class="details__product">
                <div class="product__imagen">
                    <a href="views/checkout.html?id=${dataUpdate.asin}">
                        <img src="${dataUpdate.product_photo}" alt="${dataUpdate.product_title}">
                    </a>
                </div>
                <div class="product__description">
                    <h3>${dataUpdate.product_title}</h3>
                    <small>${dataUpdate.product_title}</small>
                    <span>${dataUpdate.product_price}</span>
                </div>
                <div class="product__custom">
                    <img src="../storage/img/3puntos.svg">
                    <div class="product__select">
                        <img src="../storage/img/minus.svg">
                        <span>${dataUpdate.product_star_rating != null ? dataUpdate.product_star_rating : 0}</span>
                        <img src="../storage/img/plus.svg">
                    </div>
                </div>
            </article>`;
    };

;