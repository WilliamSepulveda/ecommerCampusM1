export const menuListCategoryIndex = (res) => {
    let { data } = res;
    console.log(data);
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
        console.error('Data is not an array:', data);
    }

    return plantilla;
}