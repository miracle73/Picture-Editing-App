import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import FirstOnboardingImage from '../../assets/images/creative-learning.png'
import SecondOnboardingImage from '../../assets/images/creative-learning2.png'
import Background from '../../assets/images/background.png'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { height, width } = Dimensions.get("screen")

type RootStackParamList = {
  SecondOnboardingScreen: undefined;
  Home: undefined;
  // Add other routes here...
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'SecondOnboardingScreen', 'Home'>;

const FirstOnboarding = () => {
  const navigation = useNavigation<NavigationProp>();

  const firstHandlePress = () => {
    navigation.navigate('Home');
  }

  const secondHandlePress = () => {
    navigation.navigate('SecondOnboardingScreen');
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
            marginTop: 15
          }} onPress={secondHandlePress}>
            <Text style={styles.firstText}>skip</Text>


          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
            paddingHorizontal: 10


          }}>
            <Image source={FirstOnboardingImage} />
            <Image source={SecondOnboardingImage} style={{ marginTop: 200 }} />

          </View>

        </ImageBackground>
      </View>
      <View style={styles.secondContainer}>
        <Text style={[styles.secondText, { marginTop: 30 }]}>Craft Stories,
        </Text>
        <Text style={styles.secondText}>  Unleash Creativity</Text>
        <Text style={styles.thirdText}>
          From snapshots to masterpieces, tell your story with <Text style={{ color: '#3838AB' }}>PICSHUB</Text>
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 40
        }}>
          <TouchableOpacity style={[styles.roundedContainer, {
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
            <View style={[styles.secondRoundedContainer, {
              backgroundColor: "#7B61FF"
            }]}></View>

            <View style={styles.secondRoundedContainer}></View>
            <View style={styles.secondRoundedContainer}></View>

          </View>
          <TouchableOpacity style={[styles.roundedContainer, {
            backgroundColor: '#5C4DBE',
            paddingLeft: 3,
          }]} onPress={secondHandlePress}>
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

export default FirstOnboarding
