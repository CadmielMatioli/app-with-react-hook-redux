import { createStore } from "redux";

import rootReducer from './Redux';

const store = createStore(rootReducer);

export default store;