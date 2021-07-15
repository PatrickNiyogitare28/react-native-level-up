import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends React.Component{
    render(){
        return (
          <View style={styles.container}>
             <Text>Welcome to home screen</Text>

             <Button 
             title="Add some friends" 
             onPress= {() =>
                this.props.navigation.navigate('Friends')
              } />
          </View>
        ); 
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;