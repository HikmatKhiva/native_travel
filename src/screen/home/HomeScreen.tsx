import {View, Text, Button, ImageBackground} from 'react-native';
import React, {useContext} from 'react';
import {Loading} from '../../components/export';
const image = {
  uri: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
};
import {style} from './homeStyle';
import {AuthContext} from '../../context/AuthContext';
const HomeScreen = ({navigation}: any) => {
  const {initializing} = useContext(AuthContext) as any;
  if (initializing) {
    return <Loading />;
  }
  return (
    <ImageBackground style={style.center} source={image} resizeMode="cover">
      <Text style={style.title}>Save Your Amazing Travel </Text>
      <View style={style.homeContainer}>
        <View>
          <Button
            title="Login"
            color={'#4338ca'}
            onPress={() => {
              navigation.navigate('Login', {name: 'test'});
            }}
          />
        </View>
        <View style={{marginLeft: 5}}>
          <Button
            title="Sign Up"
            color="#2563eb"
            onPress={() => {
              navigation.navigate('SignUp', {name: 'test'});
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
