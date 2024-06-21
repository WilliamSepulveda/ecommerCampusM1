export const menuListCategoryIndex = (res) => {
    let {data} = res;
    let plantilla = "";

    if (Array.isArray(data)) {
        data.forEach((value, index) => {
            plantilla += /*html*/`
            <li title="${value.name}">
                <a href="?id=${value.id}" >
                    <img src="storage/img/category.svg" >
                    <span> ${value.name} </span>
                </a>
            </li>
            `;
        });
    } else {
        console.error("data is not an array or is undefined");
    }

    return plantilla;
}
