import React, { forwardRef } from "react";
import { Input, InputProps, useTheme } from "@rneui/themed";
import { StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { Controller } from "react-hook-form";
import CustomText from "../Text";

interface CustomInputProps extends InputProps {
  name: string;
  control?: any;
  rules?: any;
  variant?: string;
  viewContainerStyle?: StyleProp<ViewStyle>;
}

const CustomInput = forwardRef<TextInput, CustomInputProps>((props, ref) => {
  const { theme } = useTheme();

  const containerStyle = {
    borderWidth: 0.2,
    borderRadius: 8,
    borderColor: theme.colors.white,
    // backgroundColor: 'red',
    backgroundColor: 'radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)',
    paddingHorizontal: 11,
    paddingVertical: 15,
  };

  const textStyle: StyleProp<TextStyle> = {
    fontStyle: "normal",
    color: theme.colors["white-100"],
    fontSize: props.variant ? +props.variant.split('p')[1] : 14
};

  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({ field, fieldState }) => (
        <View style={props.viewContainerStyle}>
          <Input
            {...props}
            ref={ref} // Forward the ref to the Input component
            value={field.value}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            inputStyle={StyleSheet.flatten([textStyle, props.inputStyle])}
            containerStyle={StyleSheet.flatten([
              containerStyle,
              props.containerStyle,
              { marginBottom: 0 },
            ])}
          />
          {fieldState.error && (
            <CustomText
              variant="p14"
            //   color={theme.colors["error-500"]}
              style={{ lineHeight: 15, marginTop: 4 }}
            >
              {fieldState.error.message}
            </CustomText>
          )}
        </View>
      )}
    />
  );
});

export default CustomInput;
