import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

type Routes  = {
    Suscribe: undefined;
    PersonalInformation: undefined;
    Account: undefined;
    Settings: undefined;
    Notifications: undefined;
    // Add other routes here...
  };
type NavigationProp = StackNavigationProp<Record<string, undefined>, keyof Routes, undefined>;


const Account = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.fourthText, { marginTop: 30 }]}>Account</Text>
            <View style={{
                paddingVertical: 15, width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 5
            }}>
                <Text style={styles.secondText}> Photobum standard </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                    <Text style={styles.thirdText}> Upgrade </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Suscribe")}>
                        <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>

            </View>
            <Text style={[styles.fourthText, { marginTop: 30 }]}>Login details</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, paddingVertical: 10, marginTop: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Email:   </Text>
                    <Text style={styles.fifthText}>Michealbobman@gmail.com</Text>
                </View>
                <View style={[styles.container, { borderBottomWidth: 0 }]}>
                    <Text style={[styles.firstText, { color: '#FFFFFF' }]}> Password: </Text>
                    <Text style={styles.fifthText}>********</Text>
                </View>

            </View>
            <View style={{
                paddingVertical: 15, width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', marginTop: 30, paddingHorizontal: 5
            }}>
                <Text style={[styles.secondText, { color: "#FF0000" }]}> Delete account </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    secondText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    thirdText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#414141"
    },
    fourthText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#414141"

    },
    fifthText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#414141"
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: 'rgba(65, 65, 65, 1.0)',
        paddingVertical: 20

    }
})
export default Account