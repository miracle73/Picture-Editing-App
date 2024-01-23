import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import CustomText from '../../components/Element/Text'
import CustomSvg from '../../components/Element/Svg'
import Phone from '../../assets/images/phone.png'
import Cloud from '../../assets/images/cloud.png'
import Camera from '../../assets/images/camera.png'
import Background from '../../assets/images/background.png'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { height, width } = Dimensions.get("screen")

type RootStackParamList = {
  FirstOnboardingScreen: undefined;
  // Add other routes here...
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'FirstOnboardingScreen'>;
const OnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('FirstOnboardingScreen');
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
          }} onPress={handlePress}>
            <Text style={styles.firstText}>skip</Text>


          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 200,
            marginBottom: 100,
            position: 'relative' // Add this line
          }}>
            <Image source={Cloud} style={{ position: 'absolute', marginLeft: 120, marginTop: 50 }} />
            <Image source={Camera} style={{ position: 'absolute', marginLeft: 20, marginTop: 50 }} />

          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',


          }}>
            <Image source={Phone} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.secondContainer}>
        <Text style={[styles.secondText, { marginTop: 30 }]}>Capture memories,
        </Text>
        <Text style={styles.secondText}> worth sharing</Text>
        <Text style={styles.thirdText}>
          Never let precious moments fade away.<Text style={{ color: '#3838AB' }}> PICSHUB </Text>  let’s you effortlessly capture and relive life’s treasures
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: width * 0.4,
          paddingRight: 20,
          marginTop: 30
        }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 70,


          }}>
            <View style={[styles.secondRoundedContainer, {
              backgroundColor: "#7B61FF"
            }]}></View>
            <View style={styles.secondRoundedContainer}></View>
            <View style={styles.secondRoundedContainer}></View>
            <View style={styles.secondRoundedContainer}></View>

          </View>
          <TouchableOpacity style={[styles.roundedContainer, { backgroundColor: '#5C4DBE', paddingLeft: 3, }]} onPress={handlePress}>
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
    marginTop: 20
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

export default OnboardingScreen