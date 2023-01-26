/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/Routes';
import Toast from 'react-native-toast-message';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return <></>;
}
import {AuthContextProvider} from './src/context/AuthContext';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Routes />
        <Toast />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
export default App;
