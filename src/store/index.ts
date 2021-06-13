import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducers from '@store/reducers';
import createSagaMiddleware from 'redux-saga';
import {createInjectorsEnhancer} from 'redux-injectors';
import rootSaga from '@store/sagas';
export const store = configureStore({
  reducer: reducers,
});

export function configureAppStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const {run: runSaga} = sagaMiddleware;

  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: reducers,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: enhancers,
  });
  // config rootSaga
  sagaMiddleware.run(rootSaga);
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
