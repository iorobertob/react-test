import React       from 'react';
import MyButton    from './src/components/button';
import { Provider} from 'react-redux';  // object
import { createStore, combineReducers } from 'redux';  // these are functions 
import { StyleSheet, Text, View }       from 'react-native';

import Root from './src/index'

import { connect} from 'react-redux';

import reducer from './src/store/reducer'


const rootReducer = combineReducers({
  events: reducer
})

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Provider store ={store}>
        <Root/>
      </Provider>
    );
  }
}





