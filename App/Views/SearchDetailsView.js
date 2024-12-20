import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function SearchDetailsView({navigation}) {
    let route = useRoute()
    const id = route.params?.id


    return (
        <View>
            <Text>SearchDetailsView : {id} </Text>
        </View>
    )
}

const styles = StyleSheet.create({})