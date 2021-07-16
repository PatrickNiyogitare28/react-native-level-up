import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FriendsScreen from './screens/FriendsScreen';
import {FriendsContext} from './contexts/FriendsContext'

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props:any){
    super(props);
    this.state = {
      possibleFriends: [
        'Alice',
        'Bob',
        'Sammy'
      ],
      currentFriends: []
    }

   
  }
  addFriend =(index:number) => {
       const {
          possibleFriends,
          currentFriends
       }:any = this.state;
       const addedFriend = possibleFriends.splice(index,1);
       currentFriends.push(addedFriend);
       this.setState({
        possibleFriends,
        currentFriends
       })
;
  }
  render() {
    return (
      <FriendsContext.Provider 
        value = {
         {
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.addFriend
         }
        }
      >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}
export default App;
// ...