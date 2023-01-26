import {View, Text} from 'react-native';
import {ListItem} from '@rneui/base';
import React, {useState} from 'react';
import {style} from './headerStyle';
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome5';
import auth from '@react-native-firebase/auth';
const Header = ({navigation, user}: any) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toggleFun = () => setToggle(!toggle);
  return (
    <View style={style.header}>
      <View style={style.flexContainer}>
        <Text style={style.headerTitle}>{user?.displayName || 'user'}</Text>
        <Text onPress={toggleFun} style={style.headerTitle}>
          Drop Down
        </Text>
      </View>
      <View style={style.dropDown(toggle)}>
        <ListItem
          onPress={() => {
            toggleFun();
            navigation.navigate('NewData');
          }}>
          <ListItem.Content>
            <ListItem.Title>Add New</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          onPress={() => {
            toggleFun();
            navigation.navigate('Profile');
          }}>
          <ListItem.Content>
            <ListItem.Title>My travel</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          onPress={() => {
            toggleFun();
            auth().signOut();
          }}>
          <ListItem.Content>
            <ListItem.Title>Log out</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
};
export default Header;
