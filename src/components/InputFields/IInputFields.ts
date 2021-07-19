import { ValidationRule } from "react-hook-form";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface IInputFields extends TextInputProps {
	label?: string | undefined;
	rules?: ValidationRule;
	name: string;
	errors?: boolean | string;
	customStyleWrap?: StyleProp<ViewStyle>;
	customStyleInput?: StyleProp<TextStyle>;
	customStyleLabel?: StyleProp<TextStyle>;
	iconRight?: Element;
}

export type FieldValues = Record<string, any>;