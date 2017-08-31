// IOS CODE !!!


// Import a Library to create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header text='Albums' />
    <AlbumList text="Albums Lists" />
  </View>
  );

// Render it to the Device
AppRegistry.registerComponent('albums', () => App);
