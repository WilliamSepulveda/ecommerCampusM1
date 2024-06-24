export const menuListCategoryIndex = (res) => {
    let { data = [] } = res || {}; // Default to an empty array if res or res.data is undefined
    let plantilla = "";
    
    data.forEach((value, index) => {
        plantilla += /*html*/ `
            <li title="${value.name}">
                <a href="?id=${value.id}">
                    <img src="storage/img/category.svg">
                    <span>${value.name}</span>
                </a>
            </li>
        `;
    });

    return plantilla;
};
