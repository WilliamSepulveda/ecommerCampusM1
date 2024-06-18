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



export const colorProductDetail = async ({ data: dataUpdate } = res) => {
    if (dataUpdate === undefined) {
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
                    <h5>Ships From Default Value</h5>
                    <div>
                        <p>Comfort Default Value</p>
                        <img src="../storage/img/Choose Color.svg">
                    </div>
                </div>
                <ul>
                    <li>
                        <a href="../views/checkout.html">
                            <img src="../storage/img/shopping-cart.svg">
                            <span>Add to Cart | $100.99 <del><sub>$190.99</sub></del> </span>
                        </a>
                    </li>
                </ul>
            </article>`;
    }


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
                    <p>${dataUpdate.Comfort}</p>
                    <img src="../storage/img/Choose Color.svg">
                </div>
            </div>
        </article>`;
}


const expandirTexto = (descripcionCompletaId, leerMasOptionId) => {
    const descripcionCompleta = document.getElementById(descripcionCompletaId).textContent;
    document.getElementById(descripcionCompletaId).innerHTML = descripcionCompleta;
    document.getElementById(leerMasOptionId).style.display = 'none'; 
};

export const textoProductDetail = async (res) => {
    if (!res || !res.data) {
        console.error("Datos del producto inválidos.");
        return '';
    }
    const { data: dataUpdate } = res;

    return /*html*/`
        <article class="dfgdf">
            <p id="descripcionProducto">${dataUpdate.product_description.substring(0, 100)}... 
                <strong id="leerMasOption" style="cursor: pointer; color: blue;">Leer más.</strong>
            </p>
        </article>
        <script>
            // Manejar el clic en "Leer más" utilizando la función expandirTexto
            document.getElementById('leerMasOption').onclick = function() {
                expandirTexto('descripcionProducto', 'leerMasOption');
            };
        </script>
    `;
};




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