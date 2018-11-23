import React        from 'react';
import MyButton     from './components/button';
import { StyleSheet, Text, View }       from 'react-native';
import { connect}   from 'react-redux';
import { changeText} from './store/action'

class Root extends React.Component 
{
  render() 
  {
    console.log(this.props);
    
    return (
    
        <View style={styles.container}>
          <Text>{this.props.text}</Text>
          <MyButton pressThisButton={()=>{this.props.changeTextProp('some other text')}}/>
        </View>

    );
  }
}

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    backgroundColor : '#FFF',
    alignItems      : 'center',
    justifyContent  : 'center',
  },
})

const mapStateToProps = (state)=> 
{
  return
  {
    text: state.events.text
  }
}


const mapDispatchToProps = dispatch => 
({
	changeTextProp: (text) => dispatch(changeText(text))
})


export default connect (mapStateToProps,mapDispatchToProps)(Root)