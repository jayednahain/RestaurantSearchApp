import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';
import SearchResultList from '../Components/SearchResultList';
import { fontStyle } from '../Components/Style';

export default function SearchView() {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState([]);
    const [responseCategoryList, setCategoryList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        searchApi()
        getAllCategory()
    }, [])

    const searchApi = async () => {
        try {
            const response = await DummyJsonService.get('search', {
                params: { q: searchKeyWord },
            });
            console.log("Response received: ", response.data.products);
            setResponseList(response.data.products);

        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
    }

    const getAllCategory = async () => {
        try {
            const response = await DummyJsonService.get('category-list', {});
            console.log("Response getAllCategory received: ", response.data);
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
        <View style={{ flex: 1 }}>
            <SearchBar
                searchKeyWord={searchKeyWord}
                onTextChange={(text) => setSearchKeyWord(text)}
                onTextSubmitted={() => {
                    searchApi()
                }}
            />
            {/* <Text style={fontStyle.boldTitle}> `total {responseList.length}`</Text> */}
            
            {errorMessage && renderView()}


            {responseCategoryList.map((categoryItem) => {
                const filteredProducts = responseList.filter(productItem => productItem.category === categoryItem);

                if (filteredProducts.length > 0) {
                    return (
                        <SearchResultList
                            key={categoryItem}
                            title={categoryItem}
                        />
                    );
                }
                return null; 
            })}
        </View>
    )
}

const styles = StyleSheet.create({})