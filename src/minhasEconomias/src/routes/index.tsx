import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import EditProfile from '../pages/EditProfile';

const App = createNativeStackNavigator();

const Router = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Login" component={Login} />
      <App.Screen name="Register" component={Register} />
      <App.Screen name="Home" component={Home} />
      <App.Screen name="EditProfile" component={EditProfile} />
    </App.Navigator>
  );
};

export default Router;
