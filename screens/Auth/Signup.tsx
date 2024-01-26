import { EXPO_PUBLIC_PICSHUB_BACKEND_URL } from '@env'
import { yupResolver } from '@hookform/resolvers/yup'
import { Divider, useTheme } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { CustomButton, CustomInput, CustomSvg, CustomText } from '../../components/Element'
import { ForgetPasswordInputs, SignupInputs, SignupInputsFieldsName, SignupInputsValidationSchema } from '../../types/react-hook-form'
import fetchData from '../../utils/helpers/fetchData'

const SignupScreen = ({ navigation }) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false)
    const [pwdVisible, setPwdVisible] = useState(false)
    const emailInput = useRef(null);
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const { handleSubmit, control, formState, reset, setValue } = useForm<SignupInputs>({
        resolver: yupResolver(SignupInputsValidationSchema)
    });

    const onSubmit = async (data: ForgetPasswordInputs) => {
        setLoading(true)
        const res = await fetchData(`${EXPO_PUBLIC_PICSHUB_BACKEND_URL}/accounts/register`, {
            method: 'POST', body: JSON.stringify(data)
        })

        if (!res.error) {
            navigation.navigate("Home")
        }
        setLoading(false);
    }

    return (
        <ScrollView style={{ flex: 1, position: 'relative' }}>
            <Image source={require('../../assets/images/signup-illustration.png')} style={{ position: "absolute", right: 0 }} />
            <Image source={require('../../assets/images/picshub.png')} style={{ margin: 16, marginTop: 50 }} />
            <LinearGradient
                colors={['rgba(56, 56, 171, 0.20)', 'rgba(204, 88, 84, 0.02)', 'rgba(56, 56, 171, 0.20)']}
                locations={[0, 0.4, 0.6]}
                style={{ marginTop: 53, borderTopRightRadius: 33, borderTopLeftRadius: 33, position: 'relative', flex: 1, paddingBottom: 50 }}
            >
                <LinearGradient
                    colors={['rgba(56, 56, 171, 0.86)', 'rgba(56, 56, 171, 0.30)']}
                    locations={[0.8, 1]}
                    style={{ backgroundColor: 'red', width: 300, height: 300, borderRadius: 300, position: 'absolute', bottom: -100, left: -120, opacity: 0.3 }}></LinearGradient>
                <LinearGradient
                    colors={['rgba(56, 56, 171, 0.86)', 'rgba(56, 56, 171, 0.30)']}
                    locations={[0.8, 1]}
                    style={{ backgroundColor: 'red', width: 300, height: 300, borderRadius: 300, position: 'absolute', bottom: -150, right: -120, opacity: 0.3 }}></LinearGradient>
                {/* <BlurView intensity={20} style={{ overflow: 'hidden', flex: 1 }} > */}
                    <View style={{ paddingHorizontal: 16, paddingVertical: 18, borderTopRightRadius: 32, borderTopLeftRadius: 32 }}>
                        <CustomText variant='p36' style={{ textAlign: 'center' }}>Get started</CustomText>
                        <CustomText variant='p15' color={theme.colors['grey-100']} style={{ textAlign: 'center', marginBottom: 24 }}>Get Started on an awesome journey</CustomText>

                        <CustomText variant='p15' color={theme.colors['grey-100']}>Email address</CustomText>
                        <CustomInput
                            returnKeyType='next'
                            onSubmitEditing={() => usernameInput.current?.focus()}
                            name={SignupInputsFieldsName.EMAIL} control={control} placeholder='Email address'
                            containerStyle={{}} viewContainerStyle={{ marginVertical: 12 }} leftIcon={<CustomSvg name='mail' />} />

                        <CustomText variant='p15' color={theme.colors['grey-100']}>Username</CustomText>
                        <CustomInput
                            ref={usernameInput}
                            returnKeyType='next'
                            onSubmitEditing={() => passwordInput.current?.focus()}
                            name={SignupInputsFieldsName.USERNAME} control={control} placeholder='Username'
                            containerStyle={{}} viewContainerStyle={{ marginVertical: 12 }} leftIcon={<CustomSvg name='person' />} />

                        <CustomText variant='p15' color={theme.colors['grey-100']}>Password</CustomText>
                        <CustomInput
                            ref={passwordInput}
                            secureTextEntry={pwdVisible}
                            onSubmitEditing={handleSubmit(onSubmit)}
                            name={SignupInputsFieldsName.PASSWORD} control={control} placeholder='Password'
                            containerStyle={{}} viewContainerStyle={{ marginVertical: 12 }} leftIcon={<CustomSvg name='key' />} rightIcon={<CustomButton
                                onPress={() => setPwdVisible(!pwdVisible)}
                                type='clear' buttonStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}><CustomSvg name='eye-slash' /></CustomButton>} />

                        <CustomButton
                            disabled={!formState.isValid}
                            loading={loading}
                            onPress={handleSubmit(onSubmit)}
                            containerStyle={{ marginVertical: 17 }}>Sign up</CustomButton>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Divider style={{ minWidth: "35%", backgroundColor: 'transparent' }} />
                            <CustomText variant='p11' color={theme.colors['grey-200']}>or continue with</CustomText>
                            <Divider style={{ minWidth: "35%", backgroundColor: 'transparent' }} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, height: 55, }}>
                            <TouchableOpacity style={{ width: '48%', borderRadius: 32, backgroundColor: "#1D171C", overflow: 'hidden' }} >
                                <View style={{ flex: 1, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                                    <CustomSvg name='google' />
                                    <CustomText>Google</CustomText>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '48%', borderRadius: 32, backgroundColor: "#1D171C", overflow: 'hidden' }} >
                                <View style={{ flex: 1, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                                    <CustomSvg name='apple' />
                                    <CustomText>Facebook</CustomText>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                            <CustomText variant='p15' color={theme.colors['grey-100']} style={{ textAlign: 'center' }}>Already have an account? </CustomText>
                            <CustomButton type='clear' color={theme.colors['blue-100']} buttonStyle={{ paddingVertical: 0 }} onPress={() => navigation.navigate("Signin")}>Sign in</CustomButton>
                        </View>
                    </View>
                {/* </BlurView> */}
            </LinearGradient>
        </ScrollView>
    )
}

export default SignupScreen