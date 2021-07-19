import I18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import { AsyncStoreHelpers } from '@share/utils';
import { KEY_LANGUAGE } from '@share/constants'

import vi_VN from './locales/vi_VN.json';
import tw_TW from './locales/tw_TW.json';
import en_US from './locales/en_US.json';
import jp_JP from './locales/jp_JP.json';
// declare variable language

export enum TypeLanguage {
	VN = "vi_VN",
	TW = 'tw_TW',
	ES = 'en_US',
	JP = 'jp_JP',
}

export interface ITypeLanguage {
	lng: TypeLanguage.VN | TypeLanguage.TW | TypeLanguage.JP | TypeLanguage.ES
}

export const resources = {
	vi_VN: {
		translation: vi_VN
	},
	tw_TW: {
		translation: tw_TW
	},
	en_US: {
		translation: en_US
	},
	jp_JP: {
		translation: jp_JP
	}
}


const languageDetector: LanguageDetectorAsyncModule = {
	type: 'languageDetector',
	async: true,
	detect: (callback) => {
		return callback(RNLocalize.getLocales()[0].languageCode)
	},
	init: () => { },
	cacheUserLanguage: () => { }
}



async function initI18nAsync(): string {
	const oldLanguage = await AsyncStoreHelpers.getOne(KEY_LANGUAGE) || TypeLanguage.VN;
	return oldLanguage
}

I18n.use(languageDetector).use(initReactI18next).init({
	fallbackLng: TypeLanguage.VN,
	resources: resources,
	debug: true,
	lng: TypeLanguage.VN,
	load: 'all',
	ns: ['translation'],
	defaultNS: 'translation',
	react: { useSuspense: false },
	returnEmptyString: false,
	interpolation: {
		escapeValue: false,
		format: (value, format, lng) => {
			if (value instanceof Date) {
				const convertDate = moment(value).format(format);
				return convertDate;
			}
		}
	}
})





export default I18n;