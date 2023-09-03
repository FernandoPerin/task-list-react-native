import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from '@src/pages/Home';
import ThemeProvider from '@src/styles/ThemeProvider';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Home />
      </ThemeProvider>
    </>
  );
}
