import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontStyle } from './Style'

export default function SearchResultList({ title }) {
    return (
        <View>
            <Text style={fontStyle.boldTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})