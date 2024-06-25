// export const openRequest = indexedDB.open("storage",1);





// openRequest.onupgradeneeded = function(){
//     let db = openRequest.result;
//     console.log(db);
//     if (!db.objectStoreNames.contains('about_product')) {
//     db.createObjectStore('about_product', {keyPath: 'id'});
//     }
//     if (!db.objectStoreNames.contains('product_information')) {
//         db.createObjectStore('product_information', {keyPath: 'ASIN'});
//     }
// };
// openRequest.onsuccess = function(){
//     let db = openRequest.result;
//     let {about_product, product_information} = data;
//     console.log(product_information)
// }

// let transaction2 = db("about_product", "readwrite");
// let product_information = transaction2.objectStore("product_information");
// product_information.add(product_information);