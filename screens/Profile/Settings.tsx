import { View, Switch, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type Routes  = {
    Language: { language: string };
    Country: { country: string };
    Timezone: { timezone: string };
    Currency: { currency: string };
    Notifications: undefined;
    Settings: undefined;
    // Add other routes here...
  };
type NavigationProp = StackNavigationProp<Record<string, undefined>, keyof Routes, undefined>;

type SettingsRouteProp = RouteProp<Routes, 'Settings'>;
const Settings = ({ route }: { route: SettingsRouteProp }) => {

    const { language, currency, timezone, country } = route.params || {};
    const navigation = useNavigation<NavigationProp>();
    const [isEnabled, setIsEnabled] = useState(false);
    const [secondIsEnabled, secondSetIsEnabled] = useState(false);
    const [thirdIsEnabled, thirdSetIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    const secondToggleSwitch = () => {
        secondSetIsEnabled(previousState => !previousState);
    };
    const thirdToggleSwitch = () => {
        thirdSetIsEnabled(previousState => !previousState);
    };
    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.fourthText, { marginTop: 30 }]}>Account</Text>
            <View style={{
                paddingVertical: 15, width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingHorizontal: 5
            }}>
                <Text style={styles.secondText}> Language  </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                    <Text style={styles.thirdText}> {language ? language : "English"} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Language")}>
                        <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                    </TouchableOpacity>

                </View>

            </View>
            <Text style={[styles.fourthText, { marginTop: 30 }]}>Location</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, paddingVertical: 10, marginTop: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Country  </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Text style={styles.fifthText}> {country ? country : "Nigeria"} </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Country")}>
                            <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Timezone   </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Text style={styles.fifthText}> {timezone ? timezone : "(UTC +01:00) Lagos"} </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Timezone")}>
                            <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={[styles.container, { borderBottomWidth: 0 }]}>
                    <Text style={styles.firstText}> Currency</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                        <Text style={styles.fifthText}> {currency ? currency : "NGN"}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Currency")}>
                            <MaterialIcons color="#414141" size={16} name="arrow-forward-ios" />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
            <Text style={[styles.fourthText, { marginTop: 30 }]}>My albums</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, paddingVertical: 10, marginTop: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Enable comment   </Text>
                    <Switch
                        trackColor={{ false: "#FFFFFF", true: "#3838AB" }}
                        thumbColor={isEnabled ? "#FFFFFF" : "#3838AB"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Enable download   </Text>
                    <Switch
                        trackColor={{ false: "#FFFFFF", true: "#3838AB" }}
                        thumbColor={secondIsEnabled ? "#FFFFFF" : "#3838AB"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={secondToggleSwitch}
                        value={secondIsEnabled}
                    />
                </View>
                <View style={[styles.container, { borderBottomWidth: 0 }]}>
                    <Text style={styles.firstText}> Enable Share option </Text>
                    <Switch
                        trackColor={{ false: "#FFFFFF", true: "#3838AB" }}
                        thumbColor={thirdIsEnabled ? "#FFFFFF" : "#3838AB"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={thirdToggleSwitch}
                        value={thirdIsEnabled}
                    />
                </View>

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
        paddingVertical: 10

    }
})

export default Settings