export const titleProductDetail = async({ data:dataUpdate } = res)=>{
    return /*html*/`
        <article class="article__detail">
            <div class="detail__head">
                <h1>${dataUpdate.product_title}</h1>
                <div class="product__select">
                <img src="../storage/img/-.svg" id="img" >
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


{/* <section  id="main__section__title" class="main__section">
                <article class="article__detail"></article>
                <div class="detail__head">
                    <h1>Camiseta jordan black</h1>
                    <div class="product__select">
                        <img src="../storage/img/-.svg" id="img" >
                        <span>1</span>
                        <img src="../storage/img/+.svg" id="img">
                    </div>
                </div>
                <div  class="detail__score">
                    <img src="../storage/img/star.svg" >
                    <img src="../storage/img/star.svg" >
                    <img src="../storage/img/star.svg" >
                    <img src="../storage/img/star.svg" >
                    <img src="../storage/img/star.svg" >
                    <span>5.0</span>
                    <a href="#">(7932 reviews)</a>
                </div>
            </article> */}