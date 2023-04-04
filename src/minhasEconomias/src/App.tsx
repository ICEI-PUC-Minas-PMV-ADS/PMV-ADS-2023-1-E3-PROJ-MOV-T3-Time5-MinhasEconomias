import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Router from './routes';

const App = () => {
    return (
        <NavigationContainer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Router />
            </View>
        </NavigationContainer>
    );
};

export default App;