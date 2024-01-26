import { BottomSheet } from '@rneui/themed'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AlbumCardComponent from '../../components/Card/Album'
import { CustomButton, CustomInput, CustomSvg, CustomText } from '../../components/Element'
import { useAuthStore } from '../Auth/auth.store'

const HomeScreen = ({navigation}) => {
    const { control } = useForm();
    const [searchVisible, setSearchVisible] = useState(false)
    const [subscribeVisible, setSubscribeVisible] = useState(true)

    return (
        <SafeAreaView style={{ paddingHorizontal: 16 }}>
            <View style={{ display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <View>
                    <CustomSvg name='logo' height={22} width={84} />
                </View>
                <View style={{ display: "flex", flexDirection: 'row' }}>
                <CustomButton type='clear' buttonStyle={{ paddingVertical: 6 }} onPress={() => navigation.navigate("UserProfile")} >
                        <CustomSvg name='person' color={searchVisible ? "#1E1E1E" : "#FFFFFF"} />
                    </CustomButton>
                    {/* <CustomButton type='clear' buttonStyle={{ paddingVertical: 6 }} onPress={() => setSearchVisible(!searchVisible)}>
                        <CustomSvg name='search' color={searchVisible ? "#1E1E1E" : "#FFFFFF"} />
                    </CustomButton> */}
                    <CustomButton type='clear' buttonStyle={{ paddingVertical: 6 }} onPress={() => setSubscribeVisible(!subscribeVisible)} >
                        <CustomSvg name='notification' />
                    </CustomButton>
                </View>
            </View>

            {searchVisible && <CustomInput
                name="" control={control} placeholder='Search for an album'
                containerStyle={{}}
                viewContainerStyle={{ marginTop: 14 }}
                rightIcon={<CustomSvg name='search' color='#FFFFFF' />}
            />}

            {/* <CustomText variant='p20' style={{ marginTop: 24, fontWeight: "700", marginBottom: 12 }} >Shared album</CustomText> */}
            <CustomButton buttonStyle={{gap: 8, paddingVertical: 32, marginTop: 16}} >
                <CustomSvg name='add-square' />
                New album</CustomButton>
            
            <CustomText variant='p20' style={{ marginTop: 24, fontWeight: "700", marginBottom: 12 }} >My album</CustomText>

            <ScrollView contentContainerStyle={{ gap: 16 }}>
                <AlbumCardComponent />
                {/* <AlbumCardComponent />
                <AlbumCardComponent />
                <AlbumCardComponent /> */}
            </ScrollView>
            {/* <View style={{ marginTop: 88, alignItems: "center", paddingHorizontal: 44 }}>
                <Image source={require("../../assets/images/empty-photo.png")} alt='No photo' />

                <CustomText variant='p20' style={{ fontWeight: "600", textAlign: 'center', marginTop: 14 }}>No photo yet</CustomText>
                <CustomText variant='p16' style={{ fontWeight: "500", textAlign: 'center' }}>Start adding photos to create a visual journey</CustomText>
            </View> */}

            <BottomSheet modalProps={{}} isVisible={subscribeVisible} onBackdropPress={() => setSubscribeVisible(!subscribeVisible)} >
                <View style={{ backgroundColor: "#1E1E1E", borderRadius: 24, padding: 16, paddingBottom: 40, display: 'flex', alignItems: "center" }}>
                    <Image source={require("../../assets/images/subscribe-illustration.png")} alt='Subscribe illustration' />
                    <CustomText variant='p20' style={{ fontWeight: "500", textAlign: 'center' }}>Subscribe to photobum{'\n'}to do more</CustomText>
                    <CustomText variant='p16' style={{ fontWeight: "500", textAlign: 'center', marginTop: 20, marginBottom: 60 }}>Lorm impsu nfhhsjfn fjjnvnxjxvnv vxhxhv vxnvbvjvxjbvxjbvbvxvbvxbjvx kvk kk bvjbjvcjbvjbjvxbjvxjbjvbjbvjbjb</CustomText>
                    <CustomText variant='p32' style={{ fontWeight: "700" }}>$30.00</CustomText>
                    <CustomText variant='p16' style={{ fontWeight: "500" }}>Per month</CustomText>
                    <CustomButton containerStyle={{ width: "100%", marginTop: 25, marginBottom: 15 }} onPress={() => setSubscribeVisible(!subscribeVisible)}>Subscribe</CustomButton>
                    <CustomText variant='p10' style={{ fontWeight: "500" }}>Subscription can be canceled at anytime</CustomText>
                </View>
            </BottomSheet>
        </SafeAreaView>
    )
}

export default HomeScreen