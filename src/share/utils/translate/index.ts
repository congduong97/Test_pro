import I18n from '@I18n';

export const translate = (key: string, options?: any): string => {
	return key ? I18n.t(key, options) : ''
}