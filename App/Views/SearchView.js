import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';

export default function SearchView() {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState("");
    //'https://dummyjson.com/products/search?q=phone'
    
    const searchApi = async () => {
        const response = await DummyJsonService.get('/search',{
            q : searchKeyWord
        })
        console.log("response : ", JSON.stringify(response.data.products.length))
        setResponseList(response.data.products)
    }
    

    return (
        <View style ={{flex:1}}>
            <SearchBar
                searchKeyWord={searchKeyWord}
                onTextChange={(text) => setSearchKeyWord(text)}
                onTextSubmitted={() => {
                    searchApi()
                }}
            />
           <Text> `total {responseList.length}`</Text>
        </View>
    )
}

const styles = StyleSheet.create({})