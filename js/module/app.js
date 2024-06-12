import{Headers} from "";

export const  getAllproducName = async({search:text} = {search:"phone"})=>{
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL'

    const options ={
        method:"GET",
        Headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}

export const getAllCategory = async ()=>{
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL'

    const options ={
        method:"GET",
        Headers
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}