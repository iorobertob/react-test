import React        from 'react';
import MyButton     from '../components/button';
import { StyleSheet, Text, View }       from 'react-native';
import { connect}   from 'react-redux';
import { changeText} from '../store/action';
import {createStackNavigator} from 'react-navigation';
import { MapView } from 'expo';

class Home extends React.Component {
  render() {

    return (
        
        <View style={styles.container}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
        </View>
 
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#FFF',
    alignItems      : 'center',
    justifyContent  : 'center',
  }
})

const mapStateToProps = (state) => {
  return{
     text:state.events.text
  };
}


const mapDispatchToProps = dispatch => { 
  return {
	changeTextProp: (text) => dispatch(changeText(text))
}}


export default connect (mapStateToProps,mapDispatchToProps)(Home)