import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductListItem({ item }) {
    let {title } = item
    return (
        <View style={{marginRight:10, borderWidth:0.5, borderRadius:2, borderColor:'gray'}}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})