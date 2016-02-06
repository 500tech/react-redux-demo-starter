import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from './components/DevTools.jsx';
import rootReducer from './reducers/root';

const enhancer = compose(
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // For live coding demonstration only!
  window.dispatch = store.dispatch;
  window.state = store.getState;

  return store;
}