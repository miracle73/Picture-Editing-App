import { yupResolver } from '@hookform/resolvers/yup'
import { Divider, useTheme } from '@rneui/themed'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Image, Platform, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { CustomButton, CustomInput, CustomSvg, CustomText } from '../../../components/Element'
import { LinearGradient } from 'expo-linear-gradient'
import { NewPasswordInputs, NewPasswordInputsFieldsName, NewPasswordInputsValidationSchema } from '../../../types/react-hook-form'
import { EXPO_PUBLIC_PICSHUB_BACKEND_URL } from '@env'
import fetchData from '../../../utils/helpers/fetchData'
import { useHeaderHeight } from '@react-navigation/elements'

const NewPasswordScreen = ({ route, navigation }) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false)
    const [pwdVisible, setPwdVisible] = useState({newPwd: true, confirmPwd: true})

    const confirmPwdInput = useRef(null);

    const { handleSubmit, control, formState, reset } = useForm<NewPasswordInputs>({
        resolver: yupResolver(NewPasswordInputsValidationSchema),
    });

    const onSubmit = async (data: NewPasswordInputs) => {
        const otp = Object.values(data).join("")
        setLoading(true)
        const res = await fetchData(`${EXPO_PUBLIC_PICSHUB_BACKEND_URL}/accounts/reset-password/verify/`, {
            method: 'POST', body: JSON.stringify({ ...route.params, new_password: data.newPassword })
        })

        if (!res.error) {
            navigation.navigate("Signin")
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
            {/* <BlurView intensity={20} style={{ overflow: 'hidden', flex: 1 }} > */}
                    <View style={{ paddingHorizontal: 16, paddingVertical: 18, borderTopRightRadius: 32, borderTopLeftRadius: 32, marginTop: headerHeight }}>
                        <CustomText variant='p15' color={theme.colors['grey-100']}>Enter new password</CustomText>
                        <CustomInput 
                        returnKeyType='next'
                        secureTextEntry={pwdVisible.newPwd}
                        onSubmitEditing={() => confirmPwdInput.current?.focus()}
                        name={NewPasswordInputsFieldsName.NEWPASSWORD} control={control} placeholder='At least 8 digits'
                            containerStyle={{}} viewContainerStyle={{ marginVertical: 12 }} leftIcon={<CustomSvg name='key' />} rightIcon={<CustomButton
                                onPress={() => setPwdVisible({...pwdVisible, newPwd: !pwdVisible.newPwd})}
                                type='clear' buttonStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}><CustomSvg name='eye-slash' /></CustomButton>} />

                        <CustomText variant='p15' color={theme.colors['grey-100']}>Confirm password</CustomText>
                        <CustomInput 
                        ref={confirmPwdInput}
                        secureTextEntry={pwdVisible.confirmPwd}
                        onSubmitEditing={handleSubmit(onSubmit)}
                        name={NewPasswordInputsFieldsName.CONFIRMPASSWORD} control={control} placeholder='At least 8 digits'
                            containerStyle={{}} viewContainerStyle={{ marginVertical: 12 }} leftIcon={<CustomSvg name='key' />} rightIcon={<CustomButton
                                onPress={() => setPwdVisible({...pwdVisible, confirmPwd: !pwdVisible.confirmPwd})}
                                type='clear' buttonStyle={{ paddingHorizontal: 0, paddingVertical: 0 }}><CustomSvg name='eye-slash' /></CustomButton>} />

                        <CustomButton containerStyle={{ marginVertical: 17 }}
                            disabled={!formState.isValid}
                            loading={loading}
                            onPress={handleSubmit(onSubmit)}
                        >Continue</CustomButton>
                    </View>
                {/* </SafeAreaView> */}
            {/* </BlurView> */}
        </LinearGradient>
    )
}

export default NewPasswordScreen