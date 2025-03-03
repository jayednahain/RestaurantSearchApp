import { ActivityIndicator, Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import DummyJsonService from '../Service/DummyJsonService';
import SearchResultList from '../Components/SearchResultList';
import { H1 } from '../AppTheme';
import { dummyJsonService } from '../Service/apiServices';
import { getAllProduct, getAllProductCategory } from '../Service/lib/product';

function SearchView(props) {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [responseList, setResponseList] = useState([]);
    const [responseCategoryList, setCategoryList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasErrorOnRequest] = useState(false);

    useEffect(() => {
        getAllProductAndProductCategory()
    }, [])

    useEffect(() => {
        if (searchKeyWord.length >= 3) {
            getAllProductAndProductCategory();
        }
    }, [searchKeyWord]);

    const getAllProductAndProductCategory = async () => {

        setIsLoading(true);
        setHasErrorOnRequest(false);

        const promiseProduct = getAllProduct(searchKeyWord);
        const promiseCategory = getAllProductCategory();

        await Promise.all([promiseProduct, promiseCategory])
            .then(([productResponse, categoryResponse]) => {

                setResponseList(productResponse.data.products);
                setCategoryList(categoryResponse.data);

            }).catch((error) => {
                
                setErrorMessage(error.message);
                setHasErrorOnRequest(true);

                console.log("error!")
                console.log("productResponse : ", error)

            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const flatListData = responseCategoryList.map(categoryItem => {
        const filteredProducts = responseList.filter(
            productItem => productItem.category === categoryItem
        );
        if (filteredProducts.length > 0) {
            return {
                category: categoryItem,
                filteredProducts,
            };
        }
        return null;
    }).filter(item => item !== null);

    const onPressTryAgain = () => {
        setSearchKeyWord("")
        getAllProductAndProductCategory()
    }

    const renderEmptyView = () => {
        return (<View style={{ flex: 1 }}>
            <H1 textTitle={"No data found"} />
            {renderButtonTryAgain()}
        </View>);
    }

    const renderButtonTryAgain = () => {
        return (<Button title='Try again' onPress={onPressTryAgain} />);
    }

    const renderErrorMessage = () => {
        return (<View style={{ flex: 1, alignItems: 'center', }}>
            <H1 textTitle={errorMessage} />
            {renderButtonTryAgain()}
        </View>);
    }

    const renderFlatList = () =>{
        return(
            <FlatList
                ListEmptyComponent={renderEmptyView()}
                data={flatListData}
                keyExtractor={(item) => item.category}
                renderItem={({ item }) => (
                    <SearchResultList
                        key={item.category}
                        title={item.category}
                        filteredProductList={item.filteredProducts}
                    />
                )}
            />
        );
    }

    return (
        <View style={{ flex: 1, paddingLeft: 20, backgroundColor: 'white' }}>
            <SearchBar
                searchKeyWord={searchKeyWord}
                onTextChange={(text) => setSearchKeyWord(text)}
                onTextSubmitted={() => {
                    getAllProductAndProductCategory()
                }}
                onPressResetButton={onPressTryAgain}
                resetButtonActiveStatus={searchKeyWord.length >= 3 ? false : true}
            />

            { isLoading && <ActivityIndicator style={{ flex: 5 }} size="large" color="blue" />}
            { hasError  && !isLoading && renderErrorMessage()}
            { !hasError && !isLoading && renderFlatList()}

        </View>
    )
}

export default SearchView;

const styles = StyleSheet.create({})