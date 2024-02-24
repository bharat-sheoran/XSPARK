import { Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ReqIP } from '@env';
import axios from 'axios';
import { View } from 'react-native-animatable';

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
                    <TouchableOpacity key={orderData._id} onPress={()=>{console.log("Key Clicked")}}>
                        <View key={orderData._id}>
                            <Text>{o.farmer.name}</Text>
                            <Text>Shipping From:{o.fromDelivery}</Text>
                            <Text>Shipping to:{o.toDelivery}</Text>
                            <Text>Deal Price: {o.dealPrice}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}