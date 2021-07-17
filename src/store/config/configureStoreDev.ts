import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';
import Reactotron from '../../../ReactotronConfig';
import { createInjectorsEnhancer } from 'redux-injectors';
import reducers from '@store/reducers';
import rootSaga from '@store/sagas';

export function configureStoreDev(initialState = {}) {

	const sagaMonitor = Reactotron.createSagaMonitor()

	const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

	const { run: runSaga } = sagaMiddleware;

	// sagaMiddleware : Makes redux-sagas work
	const middlewares = [sagaMiddleware];

	const enhancers = [
		createInjectorsEnhancer({
			createReducer: reducers,
			runSaga
		})
	]

	// create store
	const store = configureStore({
		reducer: reducers,
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

const store = configureStoreDev()

export default store