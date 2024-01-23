import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import FirstOnboardingImage from '../../assets/images/online-conference.png'
import Background from '../../assets/images/background.png'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { height, width } = Dimensions.get("screen")

type RootStackParamList = {
    FirstOnboardingScreen: undefined;
    ThirdOnboardingScreen: undefined;
    // Add other routes here...
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'FirstOnboardingScreen', 'ThirdOnboardingScreen'>;

const SecondOnboarding = () => {
    const navigation = useNavigation<NavigationProp>();

    const firstHandlePress = () => {
        navigation.navigate('FirstOnboardingScreen');
    }

    const secondHandlePress = () => {
        navigation.navigate('ThirdOnboardingScreen');
    }
    return (

        <>
            <StatusBar backgroundColor='#000' barStyle='light-content' />
            <View style={[styles.container, { overflow: 'hidden' }]}>
                <ImageBackground source={Background} imageStyle={{
                    borderBottomRightRadius: 50,

                }} style={{
                    paddingTop: 30,
                    paddingHorizontal: 20,
                    flex: 1
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginTop: 15,
                    }} onPress={secondHandlePress}>
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

                </ImageBackground>
            </View>
            <View style={styles.secondContainer}>
                <Text style={[styles.secondText, { marginTop: 30 }]}>Share joy,
                </Text>
                <Text style={styles.secondText}>Connect Deeper</Text>
                <Text style={styles.thirdText}>
                    Invite your first circle and start sharing
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    marginTop: 40
                }}>
                    <TouchableOpacity style={[styles.roundedContainer,
                    {
                        paddingLeft: 7,
                    }]} onPress={firstHandlePress}>
                        <MaterialIcons color="black" size={25} name="arrow-back-ios" />
                    </TouchableOpacity >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 70,


                    }}>
                        <View style={styles.secondRoundedContainer}></View>
                        <View style={styles.secondRoundedContainer}></View>
                        <View style={[styles.secondRoundedContainer, {
                            backgroundColor: "#7B61FF"
                        }]}></View>


                        <View style={styles.secondRoundedContainer}></View>

                    </View>
                    <TouchableOpacity style={[styles.roundedContainer, { backgroundColor: '#5C4DBE', paddingLeft: 3, }]} onPress={secondHandlePress}>
                        <MaterialIcons color="white" size={25} name="arrow-forward-ios" />
                    </TouchableOpacity >
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0B0B0B",
        flex: 1,
        height: height * 0.65,
    },
    secondContainer: {
        height: height * 0.35,
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
        paddingHorizontal: 80,
        marginTop: 30
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

export default SecondOnboarding