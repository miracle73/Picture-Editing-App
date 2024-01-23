import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import FirstOnboardingImage from '../../assets/images/girl.png'
import Background from '../../assets/images/ThirdBackground.png'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { height, width } = Dimensions.get("screen")

type RootStackParamList = {
    SecondOnboardingScreen: undefined;
    Signup: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'SecondOnboardingScreen', 'Signup'>;


const ThirdOnboarding = () => {
    const navigation = useNavigation<NavigationProp>();

    const firstHandlePress = () => {
        navigation.navigate('SecondOnboardingScreen');
    }

    const secondHandlePress = () => {
        navigation.navigate('Signup');
    }
    return (
        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <ImageBackground source={Background} style={[styles.container, { overflow: 'hidden' }]}
                // imageStyle={{ borderBottomRightRadius: 50, overflow: 'hidden' }}
                >
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: 15
                }}>

                    <Text style={styles.firstText}>skip</Text>


                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 100,


                }}>
                    <Image source={FirstOnboardingImage} />

                </View>



                <Text style={[styles.secondText, { marginTop: 20 }]}>Lets Go!
                </Text>

                <Text style={styles.thirdText}>
                    Start your  journey and explore the album
                    of endless visual tales, where memories
                    meet pixels.
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    marginTop: 50
                }}>
                    <TouchableOpacity style={[styles.roundedContainer,
                    {
                        paddingLeft: 7,
                    }]} onPress={firstHandlePress}>
                        <MaterialIcons color="black" size={25} name="arrow-back-ios" />
                    </TouchableOpacity >

                    <TouchableOpacity style={{
                        backgroundColor: '#5C4DBE',
                        width: 79,
                        height: 40,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20
                    }}
                    onPress={secondHandlePress}>
                        <Text style={styles.fourthText}>Start</Text>
                    </TouchableOpacity >
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: "#434190"
    },
    secondContainer: {
        height: height * 0.3,
        backgroundColor: "#0B0B0B"
    },
    firstText: {
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
        marginRight: 10,
    },
    secondText: {
        fontSize: 26,
        fontWeight: "600",
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF"
    },
    thirdText: {
        fontSize: 15,
        fontWeight: "400",
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF",
        paddingHorizontal: 30,
        marginTop: 10
    },
    fourthText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        textAlign: "center",
        color: "#FFFFFF"
    },
    roundedContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondRoundedContainer: {
        width: 10,
        height: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
    }
})

export default ThirdOnboarding