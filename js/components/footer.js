export const FooterDetail = async ({ data: dataUpdate } = {}) => {
    if (!dataUpdate || !dataUpdate.product_price) {
        console.error("Datos del producto inválidos.");
        return ''; // En caso de datos inválidos, devuelve una cadena vacía
    }

    if (dataUpdate.product_original_price == null) {
        return `
        <li>
            <a href="checkout.html">
                <img src="../storage/img/shopping-cart.svg">
                <span>Add to card ${dataUpdate.product_price}</span>
            </a>
        </li>
        `;
    } else {
        return `
        <li>
            <a href="checkout.html">
                <img src="../storage/img/shopping-cart.svg">
                <span id="precioTotal">Add to card ${dataUpdate.product_price}<sub>${dataUpdate.product_original_price}</sub></span>
            </a>
        </li>
        `;
    }
};