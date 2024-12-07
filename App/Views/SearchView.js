import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'

export default function SearchView() {
    const [searchKeyWord, setSearchKeyWord] = useState("")

    return (
        <View>
            <SearchBar
                searchKeyWord={searchKeyWord}
                onTypingChange={(text) => setSearchKeyWord(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})