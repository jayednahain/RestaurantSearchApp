import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductListItem({ item , onPressCardItem }) {
    
    


    let { title, thumbnail, rating, reviews } = item ;
    return (
        <TouchableOpacity disabled= {onPressCardItem ?false :true} onPress={onPressCardItem} style={styles.cardContainer}>
            <Image style={{ width: 150, height: 100, alignSelf: 'center', borderRadius: 5 }} source={{ uri: thumbnail }} />
            <Text style={{ width: 130, fontWeight: '600', fontSize: 14, color: 'black' }} 
            ellipsizeMode='tail' numberOfLines={1} >{ 
                title}</Text>
            <Text style={{ fontSize: 10 }}>Rating {rating} , Reviews {reviews.length} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 10,
        borderWidth: 0.3, 
        borderRadius: 5,
        borderColor: 'gray',
        backgroundColor: "#ECEBDE",
        paddingHorizontal: 5,
        paddingVertical: 5
    }
})