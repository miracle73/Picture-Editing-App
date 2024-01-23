import { View, Text, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const Notifications = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [secondIsEnabled, secondSetIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    const secondToggleSwitch = () => {
        secondSetIsEnabled(previousState => !previousState);
    };
    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.secondText, { marginTop: 30 }]}>My albums</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 10, paddingVertical: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Comment </Text>
                    <Switch
                        trackColor={{ false: "#FFFFFF", true: "#3838AB" }}
                        thumbColor={isEnabled ? "#FFFFFF" : "#3838AB"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={[styles.container, { borderBottomWidth: 0 }]}>
                    <Text style={styles.firstText}> New photos in album </Text>
                    <Switch
                        trackColor={{ false: "#FFFFFF", true: "#3838AB" }}
                        thumbColor={secondIsEnabled ? "#FFFFFF" : "#3838AB"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={secondToggleSwitch}
                        value={secondIsEnabled}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    firstText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF"
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

    },
    secondText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#414141"

    },
})

export default Notifications