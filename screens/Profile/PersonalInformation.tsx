import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const PersonalInformation = () => {
    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 80 }}>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 30, paddingVertical: 10 }}>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Name: <Text style={{ color: '#FFFFFF' }}> Micheal </Text>  </Text>
                    <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                </View>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Last name: <Text style={{ color: '#FFFFFF' }}> bobman </Text> </Text>
                    <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                </View>
                <View style={styles.container}>
                    <Text style={styles.firstText}> Address </Text>
                    <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                </View>
                <View style={styles.container}>
                    <Text style={styles.firstText}> City </Text>
                    <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                </View>
                <View style={[styles.container, { borderBottomWidth: 0 }]}>
                    <Text style={[styles.firstText, { color: '#FFFFFF' }]}> Nigeria  </Text>
                    <TouchableOpacity>
                        <MaterialIcons color="#414141" size={18} name="arrow-forward-ios" />
                    </TouchableOpacity>


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
        color: "#41414144"
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
export default PersonalInformation