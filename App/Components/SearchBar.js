import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

export default function SearchBar({searchKeyWordValue ,onTypingChange}) {
    return (
        <View>
            
            <TextInput
                value={searchKeyWordValue}
                style = {{
                    borderWidth:0.2,
                    borderRadius:5,
                    borderColor: 'black',
                    paddingHorizontal: 20,
                    paddingVertical:10
                    
                }}
                placeholder='Search Product'
                onChangeText={onTypingChange}

            />
        </View>
    )
}

const styles = StyleSheet.create({})