import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';
import SearchResultList from '../Components/SearchResultList';

export default function SearchView() {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState("");
    const [errorMessage , setErrorMessage] = useState("")
    //'https://dummyjson.com/products/search?q=phone'

    useEffect(()=>{
        searchApi()
    },[])
    
    const searchApi = async () => {
        try{
            const response = await DummyJsonService.get('search', {
                params: { q: searchKeyWord },
            });            
            console.log("Response received: ", response.data.products);
            setResponseList(response.data.products);

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
           <SearchResultList/>
           {errorMessage && renderView()}
        </View>
    )
}

const styles = StyleSheet.create({})