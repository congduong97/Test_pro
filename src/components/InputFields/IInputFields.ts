import { ValidationRule } from "react-hook-form";
import { StyleProp, TextInputProps } from "react-native";

export interface IInputFields extends TextInputProps {
	label?: string | undefined;
	rules?: ValidationRule;
	name: string;
	errors?: boolean | string;
	customStyleWrap?: StyleProp;
	customStyleInput?: StyleProp;
	customStyleLabel?: StyleProp;
	iconRight?: Element;
}

export type FieldValues = Record<string, any>;