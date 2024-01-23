import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CheckIcon from '../../assets/images/check.png'
import { StackNavigationProp } from '@react-navigation/stack';

type Routes = {
    Settings: { currency: string };

};
type NavigationProp = StackNavigationProp<Routes, 'Settings'>;


const Currency = () => {
    const navigation = useNavigation<NavigationProp>();
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = useCallback((currency: string) => {
        setSelected(currency);
        navigation.goBack();
        navigation.navigate('Settings', { currency });
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.secondText, { marginTop: 30 }]}>Currency</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 10, paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => handleSelect('NGN')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> NGN - Naira </Text>
                        {selected === 'NGN' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('USD')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> USD - Dollar   </Text>
                        {selected === 'USD' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('GDP')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> GDP- Pounds </Text>
                        {selected === 'GDP' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('BTC')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> BTC </Text>
                        {selected === 'BTC' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => handleSelect('XRP')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> XRP</Text>
                        {selected === 'XRP' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('TRC')}>
                    <View style={[styles.container, { borderBottomWidth: 0 }]}>
                        <Text style={styles.firstText}> TRC </Text>
                        {selected === 'TRC' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    firstText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF"
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: 'rgba(65, 65, 65, 1.0)',
        paddingVertical: 20

    },
    secondText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#414141"

    },
})
export default Currency