import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomSvg, CustomText } from '../../components/Element'

const AlbumCardComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false)
        // <View>
        //     <View style={{ width: 130, height: 170, position: "relative" }}>
        //         <Image source={require("../../assets/images/model.png")} style={{ width: "100%", height: "100%" }} alt='Model' />
        //         <View style={{ position: 'absolute', right: 5, top: 5 }}>
        //             <CustomButton color='#000000' buttonStyle={{ paddingHorizontal: 0, paddingVertical: 0, width: 25, height: 25 }} icon={<CustomSvg name='ellipsis' width={20} height={8} />} onPress={() => setMenuOpen(!menuOpen)} />
        //         </View>
        //         {menuOpen && <View style={{ position: "absolute", top: 25, right: 0, backgroundColor: "#FFFFFF", borderRadius: 6, gap: 8 }}>
        //             <CustomButton type='clear' buttonStyle={{ paddingVertical: 4, justifyContent: 'flex-start', gap: 8 }} titleStyle={{ color: "#6A6A6A" }} icon={<CustomSvg name='pencil' />}>Edit</CustomButton>
        //             <CustomButton type='clear' buttonStyle={{ paddingVertical: 4, justifyContent: 'flex-start', gap: 8 }} titleStyle={{ color: "#6A6A6A" }} icon={<CustomSvg name='share' />}>Share</CustomButton>
        //             <CustomButton type='clear' buttonStyle={{ paddingVertical: 4, justifyContent: 'flex-start', gap: 8 }} titleStyle={{ color: "#6A6A6A" }} icon={<CustomSvg name='delete' />}>Delete</CustomButton>
        //         </View>}
        //     </View>

        //     <CustomText variant='p16' style={{ fontWeight: "700" }}>LIGHTHOUSE</CustomText>
        //     <CustomText variant='p10' style={{ fontWeight: "700" }}>Created by you</CustomText>
        // </View>
    return (
        <View style={{display: 'flex', flexDirection: "row", backgroundColor: "#0B0808"}}>
            <View style={{width: "40%"}}>
            <Image source={require("../../assets/images/model.png")} style={{ width: "100%", height: 120 }} alt='Model' />
            </View>
            <View style={{ justifyContent: 'space-between', display: 'flex', padding: 16, width: "60%"}}>
                <View style={{display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <CustomText variant='p18'>Hello</CustomText>
                <CustomSvg name='horizontal-ellipsis' />
                </View>
                <CustomText variant='p14' color='#414141'>13/02/2024 23:11</CustomText>
                <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>
                <CustomText variant='p14' color='#414141'>94MB</CustomText>
                <CustomText variant='p14' >HD</CustomText>
                </View>
            </View>
        </View>
    )
}

export default AlbumCardComponent