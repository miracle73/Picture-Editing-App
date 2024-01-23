import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CheckIcon from '../../assets/images/check.png'
import { StackNavigationProp } from '@react-navigation/stack';

type Routes = {
    Settings: { country: string };

};
type NavigationProp = StackNavigationProp<Routes, 'Settings'>;


const Country = () => {
    const navigation = useNavigation<NavigationProp>();
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = useCallback((country: string) => {
        setSelected(country);
        navigation.goBack();
        navigation.navigate('Settings', { country });
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.secondText, { marginTop: 30 }]}>Country</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 10, paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => handleSelect('USA')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> USA </Text>
                        {selected === 'USA' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Jamica')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Jamica  </Text>
                        {selected === 'Jamica' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Paris')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Paris </Text>
                        {selected === 'Paris' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('England')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> England </Text>
                        {selected === 'England' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
    
                <TouchableOpacity onPress={() => handleSelect('Germany')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Germany </Text>
                        {selected === 'Germany' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelect('Los angeles')}>
                    <View style={[styles.container, { borderBottomWidth: 0 }]}>
                        <Text style={styles.firstText}> Los angeles </Text>
                        {selected === 'Los angeles' && <Image source={CheckIcon} />}
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
export default Country