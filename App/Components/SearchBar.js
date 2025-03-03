import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';

export default function SearchBar({searchKeyWordValue ,onTextChange ,onTextSubmitted ,onPressResetButton ,resetButtonActiveStatus}) {
    return (
        <View style ={{paddingRight:20, flexDirection:'row'}}> 
            
            <TextInput
                value={searchKeyWordValue}
                style = {{
                    width:"85%",
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
            <Button disabled={resetButtonActiveStatus} title='reset' onPress={onPressResetButton}/>
        </View>
    )
}

const styles = StyleSheet.create({})