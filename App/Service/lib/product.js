import { dummyJsonClient } from "../apiClients";

export function getAllProduct(searchKeyWord){
    return dummyJsonClient.get('products/search', { params: { q: searchKeyWord } });
}

export function getAllProductCategory(){
    return dummyJsonClient.get('products/category-list', {});
}