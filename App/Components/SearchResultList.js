import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import ProductListItem from './ProductListItem';
import { useNavigation } from '@react-navigation/native';
import { H3 } from '../AppTheme';
import { UtilityFunctions } from '../UtilityFunctions/UtilityFunctions';

export default function SearchResultList({ title, filteredProductList }) {
    const navigation = useNavigation();
    const renderProductItem = ({ item }) => {
        // console.log(item);
        return (
            <ProductListItem
                onPressCardItem={() => {navigation.navigate('SearchDetailsView',{id: item.id})}}
                item={item} />
        );
    };

    return (
        <View style={{marginBottom:5}}>
            <H3 textTitle={UtilityFunctions.getSentenceWithUpperCaseFirstLetter(`${title} extra`)} textStyle={styles.categoryTitleStyle}/>
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

const styles = StyleSheet.create({
    categoryTitleStyle:{
        fontWeight:'800', color:'black',marginTop:4, marginBottom:2
    }
})