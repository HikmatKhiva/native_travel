import {View, Text} from 'react-native';
import React from 'react';
import {style} from './loadingStyle';
import {Button} from '@rneui/base';

const Loading = () => {
  return (
    <View style={style.loadingContainer}>
      {/* <Button
        buttonStyle={style.buttonLoading}
        title="solid"
        type="solid"
        loading
      /> */}
      <Text style={style.titleLoading}>Loading</Text>
    </View>
  );
};

export default Loading;
