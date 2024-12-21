import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';
import SearchResultList from '../Components/SearchResultList';

function SearchView(props) {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState([]);
    const [responseCategoryList, setCategoryList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    // const [isCategoryLoading, setIsCategoryLoading] = useState(true);

    useEffect(() => {
        // getAllProducts()
        getSearchedProductList()
        getAllProductCategory()
    }, [])

    //getSearchedProductList

    ///products

    const getAllProducts = async () =>{
        try {

            // https://dummyjson.com/products
            const response = await DummyJsonService.get('products', {});
            setResponseList(response.data.products);

        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
    }

    const getSearchedProductList = async () => {
        try {
            const response = await DummyJsonService.get('products/search', {
                params: { q: searchKeyWord },
            });
            setResponseList(response.data.products);

        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
    }

    const getAllProductCategory = async () => {
        try {
            const response = await DummyJsonService.get('products/category-list', {});
            setCategoryList(response.data)
        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
    }

    renderView = () => {
        return (
            <View>
                <Text>{errorMessage}</Text>
            </View>
        );
    }

    const flatListData = responseCategoryList.map(categoryItem => {

            const filteredProducts = responseList.filter(
                productItem => productItem.category === categoryItem
            );
            
            if (filteredProducts.length > 0) {
                return {
                    category: categoryItem,
                    filteredProducts,
                };
            }
            
            return null;
        })
        .filter(item => item !== null);


    return (
        <View style={{ flex: 1, paddingLeft: 20, backgroundColor: 'white' }}>
            <SearchBar
                searchKeyWord={searchKeyWord}
                onTextChange={(text) => setSearchKeyWord(text)}
                onTextSubmitted={() => {
                    getSearchedProductList()
                }}
            />
            
            {errorMessage && renderView()}
            <FlatList
                data={flatListData}
                keyExtractor={(item) => item.category}
                renderItem={({ item }) => (
                    <SearchResultList
                        // navigation={props.navigation}
                        key={item.category}
                        title={item.category}
                        filteredProductList={item.filteredProducts}
                    />
                )}
            />

        </View>
    )
}

export default  SearchView;

const styles = StyleSheet.create({})