import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { FriendsContext } from '../contexts/FriendsContext';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here</Text>
{/*         
        {
          this.context.possibleFriends.map((friend:any, index:any) => (
          <Button
                    title={`add ${friend}`}
                    key={friend}
                    onPress={() =>
                  this.context.addFriend(index)
                 }
             />
          ))
        } */}
            <FlatList
              data={this.context.possibleFriends}
              keyExtractor={(item) => item}
              renderItem = {({item, index}) => (
                <>
                <Text>{item}</Text>
                <Button
                title="Add"
                onPress={() =>
              this.context.addFriend(index)
            }
            />
            </>
          )}
         />

         <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
        
      </View>
    );
  }
}

FriendsScreen.contextType = FriendsContext; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FriendsScreen;