import { rootSaga } from '@store/sagas';
import { reducers } from '@store/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import Reactotron from '../../../ReactotronConfig';

export default function configureStoreProd(initialState = {}) {

	const sagaMonitor = Reactotron.createSagaMonitor()

	const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

	const { run: runSaga } = sagaMiddleware

	const middlewares = [sagaMiddleware]

	const enhancers = [
		createInjectorsEnhancer({
			createReducer: reducers,
			runSaga
		})
	]

	const store = configureStore({
		reducer: reducers,
		middleware: [...getDefaultMiddleware(), ...middlewares],
		enhancers: enhancers
	});

	sagaMiddleware.run(rootSaga)

	store.runSaga = sagaMiddleware.run;

	store.close = () => store.dispatch(END)

	return store

}


const store = configureStoreProd()

export default store