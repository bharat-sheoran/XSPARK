import { Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, StyleSheet } from 'react';
import { ReqIP } from '@env';
import axios from 'axios';
import { View, Pressable, ImageBackground, MaterialIcons } from 'react-native-animatable';

export default function OrderDetails({ PId, TId }) {

    const [orderData, setOrderData] = useState([]);

    const getOrder = async () => {
        try {
            const response = await axios.get(`http://${ReqIP}:8080/order/${PId}/${TId}`);
            setOrderData(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getOrder();
    }, []);

    console.log(orderData);
    return (
        <View>
            {orderData.map((o) => {
                return (
                    <View style = {{ margin: 10 }}>
                        <Pressable style={{ flexDirection: "row" }}>
                            <View>
                                <ImageBackground
                                    imageStyle={{ borderRadius: 6 }}
                                    style={{ aspectRatio: 5 / 6, height: 100 }}
                                    source={require("./data/assets/d1.jpg")}
                                >
                                {/* <AntDesign style={{position:"absolute",top:10,right:10}} name="hearto" size={24} color="black"/> */}
                                </ImageBackground>
                            </View>

                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Trader 1</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
                                    <MaterialIcons name="stars" size={24} color="green" />
                                    <Text syle={{ marginLeft: 3, frontSize: 25, fontWeight: "400" }}>4.6</Text>
                                    <Text style={{ marginLeft: 3 }}>.</Text>
                                    <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>Approx 6-9 Month</Text>
                                </View>
                                <Text style={{ frontSize: 17, color: "grey" }}>Shipping From : Punjab</Text>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: 5,
                                    }}>
                                    <View style={{
                                        backgroundColor: "#FFB6C1",
                                        width: 22,
                                        height: 22,
                                        borderRadius: 11,
                                        alignItemsL: "center",
                                        justifyContent: "center",
                                    }}>
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 13,
                                                fontWeight: 'bold',
                                                color: "white",
                                            }}>Rs</Text>
                                    </View>

                                    <Text style={{
                                        marginTop: 3,
                                        marginLeft: 4,
                                        fontSize: 14,
                                        fontWeight: "500",
                                    }}>29000 for 50 Kg.
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                )
            })}
        </View >
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 16
    },
    deleteButtonText: {
        color: '#000',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
    },
    content: {
        padding: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    details: {
        fontSize: 16,
        marginBottom: 5,
    },
    detailLabel: {
        fontWeight: 'bold',
    },
    clockContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    bookNowButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom: 20,
    },
    b2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 30,
    }
});