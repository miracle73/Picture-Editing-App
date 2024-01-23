import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginIcon from '../../assets/images/Login.png'
import CrownIcon from '../../assets/images/Crown.png'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
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



const PremiumProfile = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: 100, borderRadius: 50, height: 100, opacity: 0.5, backgroundColor: "#D9D9D9",
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Image source={Picture} style={{width: '100%', height: '100%'}} resizeMode='contain' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={[styles.secondText, { paddingTop: 10, }]}>Micheal bobman</Text>
                <Image source={CrownIcon} style={{ marginTop: 10, marginLeft: 3 }} />
            </View>

            <Text style={styles.thirdText}>Michealbobman@gmail.com</Text>

            <View style={{
                paddingVertical: 15, width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', marginTop: 30, paddingHorizontal: 5
            }}>
                <Text style={styles.fourthText}> Photobum <Text style={{ color: '#3838AB' }}>Premium</Text> </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                    <Text style={styles.fifthText}> Upgrade </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Suscribe")}>
                        <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 30, paddingVertical: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.fourthText}> Personal information </Text>
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
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
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


export default PremiumProfile