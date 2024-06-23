import { getProductId } from "../module/detail.js";
import { galleryCheckout, galleryBill,updateBillDetails } from "../components/gallery.js";

document.addEventListener("DOMContentLoaded", async () => {
    let mainSectionCheckout = document.querySelector("#main__section__checkout");
    let sectionBill = document.querySelector("#section_bill");

    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    
    // Obtener información del producto
    let info = JSON.parse(sessionStorage.getItem(id));
    if (!info) {
        info = await getProductId({ id });
        sessionStorage.setItem(id, JSON.stringify(info));
    }

    // Renderizar secciones del checkout y factura
    mainSectionCheckout.innerHTML = await galleryCheckout();
    sectionBill.innerHTML = await galleryBill(info);

    // Selección de elementos del DOM
    let decreaseButton = document.querySelector("#decreaseQuantity");
    let increaseButton = document.querySelector("#increaseQuantity");
    let quantitySpan = document.querySelector("#quantity");
    let precioTotal = document.querySelector("#precioTotal");

    // Función para actualizar el precio y detalles de la factura
    const updatePrice = (quantity) => {
        if (!info || !info.data) {
            return; // Salir si no hay información válida
        }

        let precioEntero = parseFloat(info.data.product_price.replace('$', ''));
        let precioTotalContent = `Agregar al carrito $${(quantity * precioEntero).toFixed(2)}`;

        if (info.data.product_original_price !== null) {
            let precioOriginal = parseFloat(info.data.product_original_price.replace('$', ''));
            precioTotalContent += `<del><sub>$${(quantity * precioOriginal).toFixed(2)}</sub></del>`;
        }

        if (precioTotal) {
            precioTotal.innerHTML = precioTotalContent;
        }

        // Actualizar los detalles de la factura
        updateBillDetails(quantity, quantity * precioEntero);
    };



    if (decreaseButton) {
        decreaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantity -= 1;
                quantitySpan.textContent = quantity;
                updatePrice(quantity);
            }
        });
    }

    if (increaseButton) {
        increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity += 1;
            quantitySpan.textContent = quantity;
            updatePrice(quantity);
        });
    }

    // Inicializar precio y detalles de la factura al cargar la página
    updatePrice(parseInt(quantitySpan.textContent));
});


