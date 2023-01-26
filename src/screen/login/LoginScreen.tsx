import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from '@rneui/themed';
import {style} from './login';
import auth from '@react-native-firebase/auth';
import {Loading} from '../../components/export';
import Toast from 'react-native-toast-message';
interface ImageI {
  uri: string;
}
const image: ImageI = {
  uri: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
};
const LoginScreen = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const LoginFun = (e: any) => {
    e.preventDefault();
    if (!email.length) {
      return Toast.show({
        type: 'error',
        text1: 'Please enter a valid email address',
      });
    }
    if (!password.length) {
      return Toast.show({
        type: 'error',
        text1: 'Please enter a valid password',
      });
    }
    setLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        Toast.show({type: 'success', text1: 'Your account has been'});
        setLoading(false);
      })
      .catch(err => {
        Toast.show({type: 'error', text1: err.message});
      });
  };
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <ImageBackground
      style={style.imageContainer}
      source={image}
      resizeMode="cover">
      <Text style={style.titleStyle}>Login</Text>
      <View style={style.formContainer}>
        <Input
          onChangeText={newEmail => setEmail(newEmail)}
          inputContainerStyle={style.inputContainerStyle}
          inputStyle={style.inputStyle}
          value={email}
          placeholder="Email"
        />
        <Input
          onChangeText={newPassword => setPassword(newPassword)}
          inputContainerStyle={style.inputContainerStyle}
          inputStyle={style.inputStyle}
          value={password}
          placeholder="Password"
        />
        <Button disabled={loading} onPress={LoginFun} title="Login" />
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;
