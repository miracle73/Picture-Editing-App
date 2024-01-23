import { TextProps } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { Text as RNText, StyleProp, StyleSheet, TextStyle } from 'react-native';

interface CustomTextProps extends TextProps {
    variant?: string
    bold?: boolean
    color?: string
}

const CustomText = (props: CustomTextProps) => {
    const {theme} = useTheme();
    const textStyle: StyleProp<TextStyle> = {
        fontStyle: "normal",
        color: props.color ? props.color : theme.colors["white-100"],
        ...(props.variant && {fontSize: +props.variant.split('p')[1]})
    };

    let style = StyleSheet.flatten([textStyle, props.style]);

    return <RNText {...props} style={style} >{props.children}</RNText>
}

export default CustomText