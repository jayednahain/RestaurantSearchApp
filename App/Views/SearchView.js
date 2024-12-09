import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';
import SearchResultList from '../Components/SearchResultList';
import { fontStyle } from '../Components/Style';

export default function SearchView() {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState([]);
    const [responseCategoryList, setCategoryList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    // const [isCategoryLoading, setIsCategoryLoading] = useState(true);



    useEffect(() => {
        searchApi()
        getAllCategory()
    }, [])

    const searchApi = async () => {
        try {
            const response = await DummyJsonService.get('search', {
                params: { q: searchKeyWord },
            });
            setResponseList(response.data.products);

        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
    }

    const getAllCategory = async () => {
        try {
            const response = await DummyJsonService.get('category-list', {});
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


    return (
        <View style={{ flex: 1 , paddingLeft:20 , backgroundColor:'white' }}>
            <SearchBar
                searchKeyWord={searchKeyWord}
                onTextChange={(text) => setSearchKeyWord(text)}
                onTextSubmitted={() => {
                    searchApi()
                }}
            />
            {/* <Text style={fontStyle.boldTitle}> `total {responseList.length}`</Text> */}
            
            {errorMessage && renderView()}

            <ScrollView>
                {responseCategoryList.map((categoryItem) => {
                    const filteredProducts = responseList.filter(productItem => productItem.category === categoryItem);

                    if (filteredProducts.length > 0) {
                        return (
                            <SearchResultList
                                key={categoryItem}
                                title={categoryItem}
                                filteredProductList ={filteredProducts}
                            />
                        );
                    }
                    return null; 
                })}
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({})