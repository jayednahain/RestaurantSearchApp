import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ProductListItem({ item }) {
    
    
    capitalizeFirstLetter = (world) =>{
        return String(world[0]).toUpperCase() + String(world).slice(1);
    }

    let { title, thumbnail, rating, reviews } = item
    return (
        <View style={styles.cardContainer}>
            <Image style={{ width: 150, height: 100, alignSelf: 'center', borderRadius: 5 }} source={{ uri: thumbnail }} />
            <Text style={{ width: 130, fontWeight: '600', fontSize: 14, color: 'black' }} ellipsizeMode='tail' numberOfLines={1} >{ capitalizeFirstLetter(title)}</Text>
            <Text style={{ fontSize: 10 }}>Rating {rating} , Reviews {reviews.length} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 10, borderWidth: 0.3, borderRadius: 5, borderColor: 'gray', backgroundColor: "#ECEBDE",
        paddingHorizontal: 5,
        paddingVertical: 5
    }
})