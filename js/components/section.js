export const titleProductDetail = async ({ data: dataUpdate } = res) => {
    if (!dataUpdate) {
        console.error("Datos del producto inválidos.");
        return '';
    }
    const template = /*html*/`
        <article class="article__detail">
            <div class="detail__head">
                <h1>${dataUpdate.product_title}</h1>
                <div class="product__select">
                    <img src="../storage/img/-.svg" id="decrement">
                    <span id="numero">1</span>
                    <img src="../storage/img/+.svg" id="increment">
                </div>
            </div>
            <div class="detail__score">
                ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
                <span>${dataUpdate.product_star_rating}</span>
                <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
            </div>
        </article>
    `;
    setTimeout(() => {
        const incrementarNumero = () => {
            const numeroElemento = document.getElementById('numero');
            let numero = parseInt(numeroElemento.textContent);
            numero++;
            numeroElemento.textContent = numero;
        };

        const decrementarNumero = () => {
            const numeroElemento = document.getElementById('numero');
            let numero = parseInt(numeroElemento.textContent);
            if (numero > 1) {
                numero--;
                numeroElemento.textContent = numero;
            }
        };
        document.getElementById('increment').onclick = incrementarNumero;
        document.getElementById('decrement').onclick = decrementarNumero;
    }, 0);
    return template;
};

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
                <h5>${dataUpdate.ships_from}</h5>
                <div>
                    <p>${dataUpdate.Comfort}</p>
                    <img src="../storage/img/Choose Color.svg">
                </div>
            </div>
        </article>`;
}

export const productDetail = async(res)=>{
    let {data} = res;
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
    // console.log(dataUpdate);
    let string1 = dataUpdate.product_description.slice(0, 165);
    let string2 = dataUpdate.product_description.slice(166);


    return /*html*/`
    <details>
        <summary>${(dataUpdate.product_description.length >= 165) ? string1+"..." : string1}</summary>
        <p>${string2}</p>
    </details>`;
}






const renderProductDetail = async ({data:dataUpdate}) => {
    // Función callback para actualizar el precio en el footer
    const actualizarPrecioFooter = (numeroSeleccionado) => {
        const footerElement = document.getElementById('footerDetail');
        footerElement.innerHTML = FooterDetail({ data: dataUpdate, numeroSeleccionado });
    };

    const titleHtml = await titleProductDetail({ data: dataUpdate, onNumeroCambiado: actualizarPrecioFooter });
    const footerHtml = FooterDetail({ data: dataUpdate });

    // Renderizar HTML en el DOM
    const titleContainer = document.getElementById('titleProductDetail');
    const FooterDetail = document.getElementById('FooterDetail');

    titleContainer.innerHTML = titleHtml;
    footerContainer.innerHTML = footerHtml;
};

// Llamar a la función para renderizar el detalle del producto
renderProductDetail();




