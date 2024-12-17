import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontStyle } from './Style'
import ProductListItem from './ProductListItem';
import { useNavigation } from '@react-navigation/native';

export default function SearchResultList({ title, filteredProductList }) {
    const navigation = useNavigation();
    const renderProductItem = ({ item }) => {
        return (
            <ProductListItem
                onPressCardItem={() => {navigation.navigate('SearchDetailsView')}}
                item={item} />
        );
    };

    return (
        <View style={{marginBottom:5}}>
            <Text style={[fontStyle.boldTitle,{marginBottom:2}]}>{title}</Text>
            <FlatList
                horizontal={true}
                data={filteredProductList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProductItem}
                showsHorizontalScrollIndicator={false}
            />  
        </View>
    )
}

const styles = StyleSheet.create({})