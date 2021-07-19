import { TextProps, TextStyle } from "react-native";
import { StylesProps } from "styled-system";



export interface ITextLang extends TextProps {

	/**
	 * Text which is looked up via i18n.
	 * @default undefined
	 */
	tx?: string;

	/**
		 * Option of i18n
		 * @default undefined
		 */
	txOptions?: any;

	/**
	 * Children of text
	 * @default undefined
	 */
	children?: React.ReactNode;

	/**
	 * Using text string instead i18n
	 * @default undefined
	 */
	text?: string;

	/**
	 * Using text string instead i18n
	 * @default undefined
	 */
	customStyleText?: StylesProps<TextStyle>;

}