import { configureStore, getDefaultMiddleware, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';
import Reactotron from '../../../ReactotronConfig';
import { createInjectorsEnhancer } from 'redux-injectors';
import rootReducers from '../reducers';
import rootSaga from '../sagas';
import { fakeApi } from '@services'

export function configureStoreDev(initialState?: PreloadedState<RootState>) {

	const sagaMonitor = Reactotron.createSagaMonitor()

	const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

	const { run: runSaga } = sagaMiddleware;

	// sagaMiddleware : Makes redux-sagas work
	const middlewares = [sagaMiddleware, fakeApi.middleware];

	const enhancers = [
		createInjectorsEnhancer({
			createReducer: rootReducers,
			runSaga
		})
	]

	// create store
	const store = configureStore({
		reducer: rootReducers,
		middleware: [...getDefaultMiddleware(), ...middlewares],
		preloadedState: initialState,
		devTools: process.env.NODE_ENV !== 'production',
		enhancers: enhancers
	})

	// run saga
	sagaMiddleware.run(rootSaga)

	store.runSaga = sagaMiddleware.run;

	store.close = () => store.dispatch(END);

	return store;
}


export type RootState = ReturnType<typeof rootReducers>;

export type AppStore = ReturnType<typeof configureStore>;

export type AppDispatch = AppStore['dispatch']

export const storeDev = configureStoreDev();
