export const galleryindex =()=>{
    console.log(data);
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <section>
            <div class="section__front_page">
                    <img src="storage/img/tennis-jordan.jpg">
                    <img src="storage/img/coraxon.svg">
             </div>
                    <h5>Tennis jordan black and white</h5>
                    <small>Dress modern</small>
            <div class="section__price">
                    <span>$202.990</span>
                <div  class="price__score">
                    <img src="storage/img/star.svg">
                    <p>5.0</p>
            </div>
            </div>
        </section>
        `;
        return plantilla; 
    })
};