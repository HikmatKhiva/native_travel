import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {style} from '../login/login';
import {Button, Input} from '@rneui/themed';
import Toast from 'react-native-toast-message';

import auth from '@react-native-firebase/auth';
interface ImageI {
  uri: string;
}

const image: ImageI = {
  uri: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
};
const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const SignUpFunc = () => {
    if (!name.length) {
      return Toast.show({type: 'error', text1: 'Name is required'});
    }
    if (!email.length) {
      return Toast.show({type: 'error', text1: 'Email is required'});
    }
    if (!password.length) {
      return Toast.show({type: 'error', text1: 'Password is required'});
    }
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        response.user.updateProfile({
          displayName: name,
        });
        Toast.show({type: 'success', text1: `Your ${name} has been`});
      })
      .catch(error => {
        Toast.show({type: 'error', text1: error?.message});
        // setError(error?.message);
      });
    setName('');
    setEmail('');
    setPassword('');
    setLoading(false);
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={style.imageContainer}>
      <Text style={style.titleStyle}>Sign Up</Text>
      <View style={style.formContainer}>
        <Input
          style={style.inputStyle}
          value={name}
          onChange={e => setName(e.nativeEvent.text)}
          placeholder="Name"
        />
        <Input
          style={style.inputStyle}
          value={email}
          onChange={e => setEmail(e.nativeEvent.text)}
          placeholder="Email"
        />
        <View style={style.relative}>
          <Input
            style={style.inputStyle}
            secureTextEntry={true}
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
            placeholder="Password"
          />
        </View>
        <Button disabled={loading} onPress={SignUpFunc} title="Sign Up" />
      </View>
    </ImageBackground>
  );
};
export default SignUp;
