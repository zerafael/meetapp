import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#22202C" />
      <Routes />
    </>
  );
}

export default App;
