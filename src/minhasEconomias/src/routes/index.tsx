import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/User/Login';
import Register from '../pages/User/Register';
import Home from '../pages/Home';
import EditProfile from '../pages/User/EditProfile';
import Create from '../pages/Transactions/Create';

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
      <App.Screen name="Create" component={Create} />
    </App.Navigator>
  );
};

export default Router;
