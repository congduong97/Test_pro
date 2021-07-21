import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeLanguage } from '../../../i18n';

interface globalApp {
	initLanguage: string
}

const initState: globalApp = {
	initLanguage: TypeLanguage.VN
}

const globalApp = createSlice({
	name: 'globalApp',
	initialState: initState,
	reducers: {
		switchLanguage: (state, actions: PayloadAction<string>) => {
			state.initLanguage = actions.payload;
		}
	}
})

export const { switchLanguage } = globalApp.actions;

export default globalApp.reducer;