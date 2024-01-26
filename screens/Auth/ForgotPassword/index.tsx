import { useState } from "react";
import { Divider, useTheme } from '@rneui/themed'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Image, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { CustomButton, CustomInput, CustomSvg, CustomText } from '../../../components/Element'
import { LinearGradient } from 'expo-linear-gradient'
import { ForgetPasswordInputs, ForgetPasswordInputsFieldsName, ForgetPasswordInputsValidationSchema } from '../../../types/react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import fetchData from '../../../utils/helpers/fetchData'
import { EXPO_PUBLIC_PICSHUB_BACKEND_URL } from '@env'
import { useHeaderHeight } from "@react-navigation/elements";

const ForgotPasswordScreen = ({ navigation }) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false)

    const { handleSubmit, control, formState, reset } = useForm<ForgetPasswordInputs>({
        resolver: yupResolver(ForgetPasswordInputsValidationSchema),
    });

    const onSubmit = async (data: ForgetPasswordInputs) => {
        setLoading(true)
        const res = await fetchData(`${EXPO_PUBLIC_PICSHUB_BACKEND_URL}/accounts/reset-password`, {
            method: 'POST', body: JSON.stringify(data)
        })

        if (!res.error) {
            navigation.navigate("Verification", { email: data.email })
        }
        setLoading(false);
    }

    const headerHeight = useHeaderHeight() 

    return (
        <LinearGradient
            colors={['rgba(56, 56, 171, 0.20)', 'rgba(204, 88, 84, 0.02)', 'rgba(56, 56, 171, 0.20)']}
            locations={[0, 0.4, 0.6]}
            style={{ position: 'relative', flex: 1 }}
        >
            <LinearGradient
                colors={['rgba(56, 56, 171, 0.86)', 'rgba(56, 56, 171, 0.30)']}
                locations={[0.8, 1]}
                style={{ backgroundColor: 'red', width: 300, height: 300, borderRadius: 300, position: 'absolute', bottom: -100, left: -120, opacity: 0.3 }}></LinearGradient>
            <LinearGradient
                colors={['rgba(56, 56, 171, 0.86)', 'rgba(56, 56, 171, 0.30)']}
                locations={[0.8, 1]}
                style={{ backgroundColor: 'red', width: 300, height: 300, borderRadius: 300, position: 'absolute', bottom: -150, right: -120, opacity: 0.3 }}></LinearGradient>
                        {/* <SafeAreaView> */}
            {/* <BlurView intensity={20} style={{ overflow: 'hidden', flex: 1 }} > */}
                    <View style={{ paddingHorizontal: 16, paddingVertical: 18, borderTopRightRadius: 32, borderTopLeftRadius: 32, marginTop: headerHeight }}>
                        <CustomText variant='p15' color={theme.colors['grey-100']} style={{ marginBottom: 16 }} >Input your email to get verification code</CustomText>

                        <CustomText variant='p15' color={theme.colors['grey-100']}>Email address</CustomText>
                        <CustomInput name={ForgetPasswordInputsFieldsName.EMAIL} control={control} placeholder='Email address'
                            containerStyle={{}} viewContainerStyle={{ marginVertical: 12 }} leftIcon={<CustomSvg name='mail' />} />

                        <CustomButton containerStyle={{ marginVertical: 17 }}
                            disabled={!formState.isValid}
                            onPress={handleSubmit(onSubmit)}
                            loading={loading}
                        >Get verification code</CustomButton>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Divider color='linear-gradient(90deg, rgba(217, 217, 217, 0.75) 0%, rgba(217, 217, 217, 0) 100%)' style={{ minWidth: "35%", backgroundColor: 'transparent' }} />
                            <CustomText variant='p11' color={theme.colors['grey-200']}>or continue with</CustomText>
                            <Divider color='linear-gradient(90deg, rgba(217, 217, 217, 0.75) 0%, rgba(217, 217, 217, 0) 100%)' style={{ minWidth: "35%", backgroundColor: 'transparent' }} />
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
                            <CustomText variant='p15' color={theme.colors['grey-100']} style={{ textAlign: 'center' }}>Do you have an account? </CustomText>
                            <CustomButton type='clear' color={theme.colors['blue-100']} buttonStyle={{ paddingVertical: 0 }} onPress={() => navigation.navigate("Signup")}>Sign up</CustomButton>
                        </View>
                    </View>
                {/* </SafeAreaView> */}
            {/* </BlurView> */}
        </LinearGradient>
    )
}

export default ForgotPasswordScreen