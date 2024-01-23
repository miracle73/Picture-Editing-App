import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Check from '../../assets/images/rounded-check.png'
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Suscribe = () => {
    const [isSelected, setSelection] = useState(false);
    const [state, setState] = React.useState({
        premium: false,
        standard: false,
    });

    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={styles.firstText}>Subscribe to premium</Text>
            <Text style={styles.secondText}>Enjoy watching HD images</Text>
            <Text style={[styles.secondText, { marginTop: 0, marginBottom: 30 }]}> without restrictions and wuthout ads</Text>
            <ScrollView snapToInterval={viewportWidth} decelerationRate='fast' alwaysBounceHorizontal={true}
                horizontal showsHorizontalScrollIndicator={false} bounces={false} overScrollMode='never'>
                <View style={[styles.container, { borderColor: state.premium ? 'rgba(56, 56, 171, 0.7)' : 'transparent' }]}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.fifthText}>Premium</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={state.premium}
                            onValueChange={value =>
                                setState({
                                    ...state,
                                    premium: value,
                                    standard: false
                                })
                            }
                            color={state ? 'rgba(56, 56, 171, 0.7)' : undefined}
                        />
                    </View>
                    <Text style={styles.fifthText}>$9.99/mo</Text>
                    <View style={[styles.innerContainer, { marginTop: 15 }]}>
                        <Image source={Check} />
                        <Text style={styles.fourthText}>Lorem ipsum</Text>

                    </View>
                    <View style={styles.innerContainer}>
                        <Image source={Check} />
                        <Text style={styles.fourthText}>Lorem ipsum</Text>

                    </View>
                    <View style={styles.innerContainer}>
                        <Image source={Check} />
                        <Text style={styles.fourthText}>Lorem ipsum</Text>

                    </View>
                </View>
                <View style={[styles.container,  { borderColor: state.standard ? 'rgba(56, 56, 171, 0.7)' : 'transparent' }]}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={styles.fifthText}>Standard</Text>
                        <Checkbox
                            style={styles.checkbox}
                            value={state.standard}
                            onValueChange={value =>
                                setState({
                                    ...state,
                                    standard: value,
                                    premium: false
                                })
                            }
                            color={state ? 'rgba(56, 56, 171, 0.7)' : undefined}
                        />
                    </View>
                    <Text style={styles.fifthText}>$9.99/mo</Text>
                    <View style={[styles.innerContainer, { marginTop: 15 }]}>
                        <Image source={Check} />
                        <Text style={styles.fourthText}>Lorem ipsum</Text>

                    </View>
                    <View style={styles.innerContainer}>
                        <Image source={Check} />
                        <Text style={styles.fourthText}>Lorem ipsum</Text>

                    </View>
                    <View style={styles.innerContainer}>
                        <Image source={Check} />
                        <Text style={styles.fourthText}>Lorem ipsum</Text>

                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Subscribe</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    firstText: {
        fontSize: 24,
        fontWeight: "600",
        fontStyle: "normal",
        textAlign: "center",
        color: "rgba(56, 56, 171, 0.7)",

    },
    secondText: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: "400",
        fontStyle: "normal",
        textAlign: "center",
        color: "#D3D3D3"
    },
    thirdText: {
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 5,
        color: "#FFFFFF"
    },
    fourthText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 5,
        color: "#FFFFFF"
    },
    fifthText: {
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        color: "#FFFFFF"
    },
    container: {
        width: viewportWidth * 3 / 5,
        // height: viewportHeight
        height: 250,
        borderRadius: 24,
        paddingTop: 10,
        marginRight: 20,
        paddingHorizontal: 20,
        backgroundColor: "#1E1E1EE0",
        borderStyle: 'solid',
        borderWidth: 2,
        // borderColor: "rgba(56, 56, 171, 0.7)"
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginTop: 3,

    },
    button: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30.5,
        backgroundColor: "#3838AB",
        marginTop: 100,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF"
    },
    checkbox: {
        width: 21,
        height: 21,
        borderRadius: 10
    }
})

export default Suscribe