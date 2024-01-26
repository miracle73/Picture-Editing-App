// import { enableScreens } from 'react-native-screens';

// enableScreens()

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import HomeScreen from '../../screens/Home';
import FirstOnboarding from '../../screens/Onboarding/FirstOnboarding';
import SecondOnboarding from '../../screens/Onboarding/SecondOnboarding';
import ThirdOnboarding from '../../screens/Onboarding/ThirdOnboarding';
import SigninScreen from '../../screens/Auth/Signin';
import SignupScreen from '../../screens/Auth/Signup';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPassword';
import NewPasswordScreen from '../../screens/Auth/ForgotPassword/NewPassword';
import VerificationScreen from '../../screens/Auth/ForgotPassword/Verification';
import UserProfile from '../../screens/Profile/UserProfile';
import PremiumProfile from '../../screens/Profile/PremiumProfile';
import PersonalInformation from '../../screens/Profile/PersonalInformation';
import Account from '../../screens/Profile/Account';
import Settings from '../../screens/Profile/Settings';
import Language from '../../screens/Profile/Language';
import Country from '../../screens/Profile/Country';
import Currency from '../../screens/Profile/Currency';
import Timezone from '../../screens/Profile/Timezone';
import Notifications from '../../screens/Profile/Notifications';
import Suscribe from '../../screens/Profile/Suscribe';
import OnboardingScreen from '../../screens/Onboarding/Onboarding';

const Stack = createNativeStackNavigator();

const headerOptions = { headerShown: true, headerTransparent: true, headerTitle: "Forgot password", headerTintColor: 'white' };

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="OnboardingScreen" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "black" } }} >
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="PremiumProfile" component={PremiumProfile} options={{ ...headerOptions, headerTitle: "Profile", }} />
                <Stack.Screen name="UserProfile" component={UserProfile} options={{
                    ...headerOptions, headerTitle: "Profile",
                }} />


                <Stack.Screen name="Suscribe" component={Suscribe} options={{ ...headerOptions, headerTitle: "Suscribe", headerTitleAlign: 'center', }} />

                <Stack.Screen name="PersonalInformation" component={PersonalInformation} options={{ ...headerOptions, headerTitle: "Personal information", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Account" component={Account} options={{ ...headerOptions, headerTitle: "Account", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Settings" component={Settings} options={{ ...headerOptions, headerTitle: "Settings", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Language" component={Language} options={{ ...headerOptions, headerTitle: "Language", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Country" component={Country} options={{ ...headerOptions, headerTitle: "Country", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Currency" component={Currency} options={{ ...headerOptions, headerTitle: "Currency", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Timezone" component={Timezone} options={{ ...headerOptions, headerTitle: "Timezone", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Notifications" component={Notifications} options={{ ...headerOptions, headerTitle: "Notifications", headerTitleAlign: 'center', }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FirstOnboardingScreen" component={FirstOnboarding} options={{ headerShown: false }} />
                <Stack.Screen name="SecondOnboardingScreen" component={SecondOnboarding} options={{ headerShown: false }} />
                <Stack.Screen name="ThirdOnboardingScreen" component={ThirdOnboarding} options={{ headerShown: false }} />

                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={headerOptions} />
                <Stack.Screen name="Verification" component={VerificationScreen} options={{ ...headerOptions, headerTitle: "Verification" }} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ ...headerOptions, headerTitle: "New password" }} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigation
