import { ButtonProps } from '@rneui/base';
import { Button, useTheme } from '@rneui/themed'
import React, { forwardRef, Ref } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface CustomButtonProps extends ButtonProps {
    variant?: string
    color?: string
}

const CustomButton = forwardRef((props: CustomButtonProps, ref: Ref<CustomButtonProps>) => {
    const { theme } = useTheme()

    const textStyle: StyleProp<TextStyle> = {
        fontStyle: "normal",
        color: props.color ? props.color : theme.colors["white-100"],
        ...(props.variant && {fontSize: +props.variant.split('p')[1]})
    };


    const buttonStyle: StyleProp<ViewStyle> = {}

    if (props.type === 'clear') {
        Object.assign(textStyle, {
            color: props.color ?? theme.colors.primary
        })
    }

    if (props.type === 'outline') {
        Object.assign(textStyle, {
            color: props.color ?? theme.colors.primary,
        })
        Object.assign(buttonStyle, {
            borderColor: props.color ?? theme.colors.primary,
        })
    }

    return (
        <Button
            {...props}
            ref={ref}
            titleStyle={StyleSheet.flatten([textStyle, props.titleStyle])}
            buttonStyle={StyleSheet.flatten([buttonStyle, props.buttonStyle])}
        >
            {props.children}
        </Button>
    )
});

export default CustomButton;
