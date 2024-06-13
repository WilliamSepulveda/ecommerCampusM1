import { headers } from "../components/env.js";

export const  getAllProductName = async({search:text} = {search:"phone"})=>{
    console.log("un momento.....")
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
    const options ={
        method:"GET",
        Headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getAllCategory = async ()=>{
    const url =  `real-time-amazon-data.p.rapidapi.com/product-category-list? country=US`;

    const options ={
        method:"GET",
        Headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}