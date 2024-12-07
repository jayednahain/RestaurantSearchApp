import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';

export default function SearchView() {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState("");
    const [errorMessage , setErrorMessage] = useState("")
    //'https://dummyjson.com/products/search?q=phone'
    
    const searchApi = async () => {
        try{
            const response = await DummyJsonService.get('/search',{ q : searchKeyWord })
            setResponseList(response.data.products)
        }
        catch(error) { 
            setErrorMessage(`${error}`)
        }    
    }

    renderView = () =>{
        return (
            <View>
                <Text>{errorMessage}</Text>
            </View>
        );
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
           {errorMessage && renderView()}
        </View>
    )
}

const styles = StyleSheet.create({})