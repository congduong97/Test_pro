import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface globalApp {
	initLanguage: string
}

const initState: globalApp = {
	initLanguage: "viVN"
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