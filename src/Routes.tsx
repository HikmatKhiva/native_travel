import React, {useContext} from 'react';
import {
  LoginScreen,
  HomeScreen,
  Profile,
  NewData,
  SignUp,
} from './screen/export';
import {Header} from './components/export';
import {AuthContext} from './context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
type RouteParamList = {
  HomeScreen: undefined;
  Profile: undefined;
  Login: undefined;
  SignUp: undefined;
  NewData: undefined;
};
const Stack = createNativeStackNavigator<RouteParamList>();
const Routes = (): JSX.Element => {
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Group>
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={({navigation}) => ({
                // eslint-disable-next-line react/no-unstable-nested-components
                header: () => <Header navigation={navigation} user={user} />,
              })}
            />
            <Stack.Screen
              name="NewData"
              component={NewData}
              options={({navigation}) => ({
                // eslint-disable-next-line react/no-unstable-nested-components
                header: () => <Header navigation={navigation} user={user} />,
              })}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
