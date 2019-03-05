import { createStore } from 'redux'
import reducer from './../reducer'
//import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  "studentID": '',
  "studentPassword": '',
  "studentMajor": '',
  "J": '',
  "S": '',
  "FL": '',
  "GC": '',
  "PA": '',
  "NS": '',
  "NC": '',
  "CC": '',
  "Credit": '',
};
const dataStore = () => createStore(reducer, initialState);

export default dataStore;