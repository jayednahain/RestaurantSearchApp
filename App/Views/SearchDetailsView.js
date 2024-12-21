import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import DummyJsonService from '../Service/DummyJsonService'
import { H1 } from '../AppTheme';

export default function SearchDetailsView({ navigation }) {
        
    const [product, setResponseObj] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);


        let route = useRoute();
        const id = route.params?.id

        useEffect(() => {
            if (id) {
              getProductDetails();
            } else {
              setErrorMessage("Product ID is missing.");
            }
          }, [id]);


    renderView = () => {
        return (
            <View>
                <H1 textTitle={errorMessage} />
            </View>
        );
    }


    getProductDetails = async () => {
        try {
            setLoading(true);
            const response = await DummyJsonService.get(`products/${id}`, {});
            console.log("response: ", JSON.stringify(response.data))
            setResponseObj(response.data);
        }
        catch (error) {
            setErrorMessage(`${error}`)
        }
        finally {
            setLoading(false);

        }
    }


    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
      }


    return (
        <View>
            {errorMessage && renderView()}

            {/* <Text>SearchDetailsView : {id} </Text> */}
            <ScrollView style={styles.container}>
            {/* Title and Price */}
            <View style={{paddingBottom:40}}>
            <Text style={styles.title}>{product.title}</Text>
            {/* <Text style={styles.price}>${product.price.toFixed(2)}</Text> */}
            <Text style={styles.stock}>Availability: {product.availabilityStatus}</Text>
            <Text style={styles.sku}>SKU: {product.sku}</Text>

            {/* Images */}
            <ScrollView horizontal style={styles.imageScroll}>
                {product.images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.image} />
                ))}
            </ScrollView>

            {/* Description */}
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.text}>{product.description}</Text>

            {/* Specifications */}
            <Text style={styles.sectionTitle}>Specifications</Text>
            <Text style={styles.text}>Category: {product.category}</Text>
            <Text style={styles.text}>Brand: {product.brand}</Text>
            <Text style={styles.text}>
                Dimensions: {product.dimensions.width}" x {product.dimensions.height}" x{" "}
                {product.dimensions.depth}"
            </Text>
            <Text style={styles.text}>Weight: {product.weight} kg</Text>
            <Text style={styles.text}>Warranty: {product.warrantyInformation}</Text>
            <Text style={styles.text}>Shipping: {product.shippingInformation}</Text>

            {/* Tags */}
            <Text style={styles.sectionTitle}>Tags</Text>
            <View style={styles.tags}>
                {product.tags.map((tag, index) => (
                    <Text key={index} style={styles.tag}>
                        {tag}
                    </Text>
                ))}
            </View>

            {/* Reviews */}
            <Text style={styles.sectionTitle}>Reviews</Text>
            {product.reviews.map((review, index) => (
                <View key={index} style={styles.review}>
                    <Text style={styles.reviewText}>
                        {review.reviewerName} ({review.rating}/5):
                    </Text>
                    <Text style={styles.reviewText}>{review.comment}</Text>
                </View>
            ))}

            {/* Footer */}
            <Text style={styles.sectionTitle}>Additional Information</Text>
            <Text style={styles.text}>Return Policy: {product.returnPolicy}</Text>
            </View>
           
        </ScrollView>
        </View>
    )
}

// const styles = StyleSheet.create({})


// import React from "react";
// import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

// const ProductDetails = () => {
//     const product = {
//         id: 12,
//         title: "Annibale Colombo Sofa",
//         description:
//             "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
//         category: "furniture",
//         price: 2499.99,
//         discountPercentage: 18.54,
//         rating: 3.08,
//         stock: 16,
//         tags: ["furniture", "sofas"],
//         brand: "Annibale Colombo",
//         sku: "LUU95CQP",
//         weight: 3,
//         dimensions: { width: 20.97, height: 19.11, depth: 25.81 },
//         warrantyInformation: "1 month warranty",
//         shippingInformation: "Ships overnight",
//         availabilityStatus: "In Stock",
//         reviews: [
//             {
//                 rating: 5,
//                 comment: "Very satisfied!",
//                 date: "2024-05-23T08:56:21.620Z",
//                 reviewerName: "Tyler Davis",
//             },
//             {
//                 rating: 5,
//                 comment: "Excellent quality!",
//                 date: "2024-05-23T08:56:21.620Z",
//                 reviewerName: "Hannah Robinson",
//             },
//             {
//                 rating: 3,
//                 comment: "Waste of money!",
//                 date: "2024-05-23T08:56:21.620Z",
//                 reviewerName: "Madison Collins",
//             },
//         ],
//         returnPolicy: "7 days return policy",
//         images: [
//             "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
//             "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
//             "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
//         ],
//         thumbnail:
//             "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
//     };

//     return (
       
//     );
// };

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        paddingBottom:10
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    stock: {
        fontSize: 16,
        marginBottom: 4,
    },
    sku: {
        fontSize: 16,
        marginBottom: 16,
    },
    imageScroll: {
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 8,
    },
    text: {
        fontSize: 16,
        marginBottom: 4,
    },
    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 16,
    },
    tag: {
        fontSize: 14,
        paddingHorizontal: 8,
        paddingVertical: 4,
        margin: 4,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4,
    },
    review: {
        marginBottom: 12,
    },
    reviewText: {
        fontSize: 14,
    },
});

