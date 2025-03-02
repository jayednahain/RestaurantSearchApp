import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

export default function SearchBar({searchKeyWordValue ,onTextChange ,onTextSubmitted}) {
    return (
        <View style ={{paddingRight:20}}> 
            
            <TextInput
                value={searchKeyWordValue}
                style = {{
                    color:'black',
                    borderWidth:0.2,
                    borderRadius:5,
                    borderColor: 'black',
                    paddingHorizontal: 20,
                    paddingVertical:10
                    
                }}
                placeholder='Search Product'
                onChangeText={onTextChange}
                onEndEditing={onTextSubmitted}

            />
        </View>
    )
}

const styles = StyleSheet.create({})