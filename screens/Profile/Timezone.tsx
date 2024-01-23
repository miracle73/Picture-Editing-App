import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CheckIcon from '../../assets/images/check.png'
import { StackNavigationProp } from '@react-navigation/stack';

type Routes = {
    Settings: { timezone: string };

};
type NavigationProp = StackNavigationProp<Routes, 'Settings'>;


const Timezone = () => {
    const navigation = useNavigation<NavigationProp>();
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = useCallback((timezone: string) => {
        setSelected(timezone);
        navigation.goBack();
        navigation.navigate('Settings', { timezone });
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.secondText, { marginTop: 30 }]}>Timezone</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 10, paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => handleSelect('(UTC +01:00) Lagos')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> (UTC +01:00) Lagos </Text>
                        {selected === '(UTC +01:00) Lagos' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('(UTC +01:00) Paris')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> (UTC +01:00) Paris   </Text>
                        {selected === '(UTC +01:00) Paris' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('(UTC +01:00) UK')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> (UTC +01:00) UK </Text>
                        {selected === '(UTC +01:00) UK' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('(UTC +01:00) England')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> (UTC +01:00) England </Text>
                        {selected === '(UTC +01:00) England' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => handleSelect('(UTC +01:00) Germany')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> (UTC +01:00) Germany </Text>
                        {selected === '(UTC +01:00) Germany' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('(UTC +01:00) Los angeles')}>
                    <View style={[styles.container, { borderBottomWidth: 0 }]}>
                        <Text style={styles.firstText}> (UTC +01:00) Los angeles </Text>
                        {selected === '(UTC +01:00) Los angeles' && <Image source={CheckIcon} />}
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

export default Timezone