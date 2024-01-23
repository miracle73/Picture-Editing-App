import * as yup from "yup";

export enum SigninInputsFieldsName {
  USERNAME = "username",
  PASSWORD = "password",
}

export type SigninInputs = {
  username: string;
  password: string;
};

export const SigninInputsValidationSchema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("No password provided"),
  })
  .required();

export enum SignupInputsFieldsName {
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
}

export type SignupInputs = {
  username: string;
  email: string;
  password: string;
};

export const SignupInputsValidationSchema = yup
  .object({
    username: yup.string().required("Please provide your username"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .matches(/@[^.]*\./)
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(2, "Password is too short - should be 2 chars minimum."),
  })
  .required();

export enum ForgetPasswordInputsFieldsName {
  EMAIL = "email",
}

export type ForgetPasswordInputs = {
  email: string;
};

export const ForgetPasswordInputsValidationSchema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .matches(/@[^.]*\./)
      .required("Please enter your email"),
  })
  .required();

export enum VerificationInputsFieldsName {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
  FOURTH = "fourth",
  FIFTH = "fifth",
  SIXTH = "sixth",
}

export type VerificationInputs = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
};

export const VerificationInputsValidationSchema = yup
  .object({
    first: yup.string().max(1).required(),
    second: yup.string().max(1).required(),
    third: yup.string().max(1).required(),
    fourth: yup.string().max(1).required(),
    fifth: yup.string().max(1).required(),
    sixth: yup.string().max(1).required(),
  })
  .required();

  export enum NewPasswordInputsFieldsName {
    NEWPASSWORD = "newPassword",
    CONFIRMPASSWORD = "confirmPassword",
  }
  
  export type NewPasswordInputs = {
    newPassword: string;
    confirmPassword: string;
  };
  
  export const NewPasswordInputsValidationSchema = yup
  .object({
    newPassword: yup.string().required("No password provided"),
    confirmPassword: yup
      .string()
      .required("No password provided")
      .oneOf([yup.ref("newPassword")], "Password does not match"),
  })
  .required();