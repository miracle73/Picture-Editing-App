import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import LoginIcon from '../../assets/images/Login.png'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import fetchData from "../../utils/helpers/fetchData"
import { PICSHUB_BACKEND_URL } from '@env'
import { useAuthStore } from '../Auth/auth.store'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import Picture from '../../assets/images/model.png'

type Routes  = {
    Suscribe: undefined;
    PersonalInformation: undefined;
    Account: undefined;
    Settings: undefined;
    Notifications: undefined;
    // Add other routes here...
  };
type NavigationProp = StackNavigationProp<Record<string, undefined>, keyof Routes, undefined>;


const UserProfile = () => {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation<NavigationProp>();

    // const {userToken} = useAuthStore();
    // console.log(userToken);
    useEffect(() => {
        const fetchToken = async () => {
            setLoading(true)
            const res = await fetchData(`${PICSHUB_BACKEND_URL}/accounts/user-details/`, {
                method: 'GET', 
            }, )

            console.log(res)
            setLoading(false);
        };

        fetchToken();
    }, [])
    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.firstText}>Profile</Text>
            </View> */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: 100, borderRadius: 50, height: 100, opacity: 0.5, backgroundColor: "#D9D9D9",
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}>
                      <Image source={Picture} style={{width: '100%', height: '100%'}} resizeMode='contain' />
                </View>
            </View>

            <Text style={[styles.secondText, { paddingTop: 10 }]}>Micheal bobman</Text>
            <Text style={styles.thirdText}>Michealbobman@gmail.com</Text>

            <View style={{
                paddingVertical: 15, width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', marginTop: 30, paddingHorizontal: 5
            }}>
                <Text style={styles.fourthText}> Photobum standard </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                    <Text style={styles.fifthText}> Upgrade </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Suscribe")}>
                        <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 30, paddingVertical: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.fourthText}> Personal Information </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("PersonalInformation")}>
                        <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                    </TouchableOpacity>
 
                </View>
                <View style={styles.container}>
                    <Text style={styles.fourthText}> Account </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                        <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <Text style={styles.fourthText}> Settings </Text>
                    <TouchableOpacity  onPress={() => navigation.navigate("Settings")}>
                        <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>
                <View style={[styles.container, { borderBottomWidth: 0 }]}>
                    <Text style={styles.fourthText}> Notification </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
                        <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
                <Image source={LoginIcon} />
                <Text style={styles.sixthText}> Logout </Text>
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    firstText: {
        fontSize: 24,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    secondText: {
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: -0.40799999237060547,
        textAlign: "center",
        color: "#FFFFFF"
    },
    thirdText: {
        fontSize: 14,
        fontWeight: "400",
        fontStyle: "normal",
        letterSpacing: -0.40799999237060547,
        textAlign: "center",
        color: "#D3D3D3"
    },
    fourthText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    fifthText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#414141"
    },
    sixthText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#F11515"
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: 'rgba(65, 65, 65, 1.0)',
        paddingVertical: 15

    }
})

export default UserProfile