import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CheckIcon from '../../assets/images/check.png'
import { StackNavigationProp } from '@react-navigation/stack';

type Routes = {
    Settings: { language: string };

};
type NavigationProp = StackNavigationProp<Routes, 'Settings'>;
// type NavigationProp = StackNavigationProp<Record<string, undefined>, keyof Routes, undefined>;


const Language = () => {
    const navigation = useNavigation<NavigationProp>();
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    const handleSelectLanguage = useCallback((language: string) => {
        setSelectedLanguage(language);
        navigation.goBack();
        navigation.navigate('Settings', { language });
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#000000", paddingHorizontal: 30, paddingTop: 100 }}>
            <Text style={[styles.secondText, { marginTop: 30 }]}>Language</Text>
            <View style={{ width: '100%', borderRadius: 15, backgroundColor: "#1E1E1EE1", paddingHorizontal: 10, marginTop: 10, paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => handleSelectLanguage('English')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> English </Text>
                        {selectedLanguage === 'English' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelectLanguage('French')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> French </Text>
                        {selectedLanguage === 'French' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelectLanguage('Espanol')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Espanol </Text>
                        {selectedLanguage === 'Espanol' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelectLanguage('Danish')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Danish </Text>
                        {selectedLanguage === 'Danish' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelectLanguage('Danish')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Danish </Text>
                        {selectedLanguage === 'Danish' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelectLanguage('Swahilli')}>
                    <View style={styles.container}>
                        <Text style={styles.firstText}> Swahilli </Text>
                        {selectedLanguage === 'Swahilli' && <Image source={CheckIcon} />}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSelectLanguage('Pidgin')}>
                    <View style={[styles.container, { borderBottomWidth: 0 }]}>
                        <Text style={styles.firstText}> Pidgin</Text>
                        {selectedLanguage === 'Pidgin' && <Image source={CheckIcon} />}
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

export default Language