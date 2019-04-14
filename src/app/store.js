import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
export default createStore(rootReducer);
// , undefined, applyMiddleware(logger
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(rootSaga);
// export const action = type => store.dispatch({ type });
// import rootSaga from './sagas';
