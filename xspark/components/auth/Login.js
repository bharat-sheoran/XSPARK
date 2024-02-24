import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Button, ImageBackground } from "react-native";
import React, { useState } from 'react';
import axios from "axios";
import { ReqIP } from '@env';
import Background from "./Background";
import { EvilIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {

    const [authData, setAuthData] = useState({
        username: "",
        password: ""
    });

    const handleAuthInputChange = (key, value) => {
        setAuthData({
            ...authData,
            [key]: value
        });
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://${ReqIP}:8080/api/auth/login`, {
                username: authData.username,
                password: authData.password
            });

            if (response.status === 200) {
                await AsyncStorage.setItem('user', JSON.stringify(response.data.userData));
                navigation.navigate("Home");
                Alert.alert('Success', 'Logged in successfully');
            } else {
                Alert.alert('Error', 'Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred while logging in');
        }
    };

    return (
        <Background>
            <View style={{ alignItems: "center", width: 350 }}>
                <Text style={{ color: "#000000", fontSize: 64, fontWeight: '900', marginVertical: 30 }}>Login</Text>
                <View style={{display:'flex',justifyContent: 'center',alignContent:'center', backgroundColor: "#fff", height: 470, width: 300, borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 0.4, paddingTop: 35, alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: "#006400", fontWeight: '900' }}> Welcome Back</Text>
                    <Text style={{ color: 'grey', fontSize: 15, fontWeight: 'bold', marginBottom: 20, }}>  Login to your account</Text>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            value={authData.username}
                            onChangeText={(text) => handleAuthInputChange('username', text)} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={authData.password}
                            onChangeText={(text) => handleAuthInputChange('password', text)}
                            secureTextEntry />
                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                            <Text style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                <Text style={{ color: "#006400", fontWeight: 'bold', fontSize: 14, textDecorationLine: 'underline', }}> Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Background>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Change to 'flex-start'
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 280,
        borderWidth: 0.2,
        borderColor: 'black', // Border color
        color: 'black', // Text color
        marginTop: 10,
        marginBottom: 18,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontSize: 13,
    },
    button: {
        marginTop: 50,
        backgroundColor: '#006400', // Button background color
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 270,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 18,
    },
});
