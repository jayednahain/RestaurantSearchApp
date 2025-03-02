import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';
import SearchResultList from '../Components/SearchResultList';
import { H1 } from '../AppTheme';

function SearchView(props) {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState([]);
    const [responseCategoryList, setCategoryList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    // const [isCategoryLoading, setIsCategoryLoading] = useState(true);

    useEffect(() => {
        getAllProductAndProductCategory()
    }, [])

    useEffect(() => {
        if (searchKeyWord.length >= 3) {
            getAllProductAndProductCategory();
        }
    }, [searchKeyWord]);


    const getAllProductAndProductCategory = async () => {
        setIsLoading(true);
        const promiseProduct = DummyJsonService.get('products/searc', {params: { q: searchKeyWord }});
        const promiseCategory = DummyJsonService.get('products/category-list', {});

        await Promise.all([promiseProduct, promiseCategory])
            .then(([productResponse, categoryResponse]) => {
                console.log("productResponse : ", productResponse)

                setResponseList(productResponse.data.products);
                setCategoryList(categoryResponse.data);
            
            }).catch((error) => {
                setErrorMessage(error.message);
                console.log("error!")
                console.log("productResponse : ", error)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const getSearchedProductList = async () => {
        try {
            const response = await DummyJsonService.get('products/search', {
                params: { q: searchKeyWord },
            });
            console.log(response.data.products)
            setResponseList(response.data.products);
        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
    }

    const renderView = () => {
        return (
            <View style={{ flex: 1 }}>
                <H1 textTitle={errorMessage}></H1>
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

            {isLoading && <ActivityIndicator style={{ flex: 5 }} size="large" color="blue" />}
            {!isLoading && <FlatList
                ListEmptyComponent={renderView}
                data={flatListData}
                keyExtractor={(item) => item.category}
                renderItem={({ item }) => (
                    <SearchResultList
                        key={item.category}
                        title={item.category}
                        filteredProductList={item.filteredProducts}
                    />
                )}
            /> } 

        </View>
    )
}

export default SearchView;

const styles = StyleSheet.create({})