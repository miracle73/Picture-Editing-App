import { Divider, useTheme } from '@rneui/themed'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { CustomButton, CustomInput, CustomSvg, CustomText } from '../../../components/Element'
import { BlurView } from "expo-blur";
import { LinearGradient } from 'expo-linear-gradient'
import { VerificationInputs, VerificationInputsFieldsName, VerificationInputsValidationSchema } from '../../../types/react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PICSHUB_BACKEND_URL } from '@env'
import fetchData from '../../../utils/helpers/fetchData'

const VerificationScreen = ({ route, navigation }) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false)
    const [resendLoading, setResendLoading] = useState(false)

    const secondInput = useRef(null)
    const thirdInput = useRef(null)
    const fourthInput = useRef(null)
    const fifthInput = useRef(null)
    const sixthInput = useRef(null)

    const { handleSubmit, control, formState, reset } = useForm<VerificationInputs>({
        resolver: yupResolver(VerificationInputsValidationSchema),
    });

    const onSubmit = async (data: VerificationInputs) => {
        const otp = Object.values(data).join("")
        setLoading(true)
        const res = await fetchData(`${PICSHUB_BACKEND_URL}/accounts/verify-email`, {
            method: 'POST', body: JSON.stringify({ otp, email: route.params.email })
        })

        if (!res.error) {
            navigation.navigate("NewPassword", { email: route.params.email, otp })
        }
        setLoading(false);
    }

    const handleResend = async () => {
        setResendLoading(true)
        const res = await fetchData(`${PICSHUB_BACKEND_URL}/accounts/resend-otp`, {
            method: 'POST', body: JSON.stringify({email: route.params.email})
        })
        setResendLoading(false);
    }
 
    const checkLimit = (text: string, inputRef: React.MutableRefObject<null>) => {
        if (text.length != 1) {
            return;
        }

        inputRef.current?.focus();
    }

    return (
        <LinearGradient
            colors={['rgba(56, 56, 171, 0.20)', 'rgba(204, 88, 84, 0.02)', 'rgba(56, 56, 171, 0.20)']}
            locations={[0, 0.3, 0.5]}
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
            <BlurView intensity={20} style={{ overflow: 'hidden', flex: 1 }} >
                <SafeAreaView>
                    <View style={{ paddingHorizontal: 16, paddingVertical: 18, borderTopRightRadius: 32, borderTopLeftRadius: 32 }}>
                        <CustomText variant='p15' color={theme.colors['grey-100']} style={{ marginBottom: 16, textAlign: 'center' }} >Enter verification code</CustomText>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 }}>
                            <CustomInput
                                returnKeyType='next'
                                keyboardType='number-pad'
                                onChange={(e) => checkLimit(e.nativeEvent.text, secondInput)}
                                name={VerificationInputsFieldsName.FIRST} control={control} viewContainerStyle={{ width: 45, height: 45 }} maxLength={1} inputStyle={{ fontSize: 20, textAlign: 'center' }} />
                            <CustomInput
                                ref={secondInput}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                onChange={(e) => checkLimit(e.nativeEvent.text, thirdInput)}
                                name={VerificationInputsFieldsName.SECOND} control={control} viewContainerStyle={{ width: 45, height: 45 }} maxLength={1} inputStyle={{ fontSize: 20, textAlign: 'center' }} />
                            <CustomInput
                                ref={thirdInput}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                onChange={(e) => checkLimit(e.nativeEvent.text, fourthInput)}
                                name={VerificationInputsFieldsName.THIRD} control={control} viewContainerStyle={{ width: 45, height: 45 }} maxLength={1} inputStyle={{ fontSize: 20, textAlign: 'center' }} />
                            <CustomInput
                                ref={fourthInput}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                onChange={(e) => checkLimit(e.nativeEvent.text, fifthInput)}
                                name={VerificationInputsFieldsName.FOURTH} control={control} viewContainerStyle={{ width: 45, height: 45 }} maxLength={1} inputStyle={{ fontSize: 20, textAlign: 'center' }} />
                            <CustomInput
                                ref={fifthInput}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                onChange={(e) => checkLimit(e.nativeEvent.text, sixthInput)}
                                name={VerificationInputsFieldsName.FIFTH} control={control} viewContainerStyle={{ width: 45, height: 45 }} maxLength={1} inputStyle={{ fontSize: 20, textAlign: 'center' }} />
                            <CustomInput
                                ref={sixthInput}
                                keyboardType='number-pad'
                                name={VerificationInputsFieldsName.SIXTH} control={control} viewContainerStyle={{ width: 45, height: 45 }} maxLength={1} inputStyle={{ fontSize: 20, textAlign: 'center' }} />
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                            <CustomText variant='p15' color={theme.colors['grey-100']} style={{ textAlign: 'center' }}>Didn't recieve a code? </CustomText>
                            <CustomButton type='clear' 
                            loading={resendLoading}
                            onPress={handleResend}
                            color={theme.colors['blue-100']} buttonStyle={{ paddingVertical: 0 }}>Resend</CustomButton>
                        </View>

                        <CustomButton containerStyle={{ marginVertical: 17 }}
                            disabled={!formState.isValid}
                            loading={loading}
                            onPress={handleSubmit(onSubmit)}>Continue</CustomButton>
                    </View>
                </SafeAreaView>
            </BlurView>
        </LinearGradient>
    )
}

export default VerificationScreen