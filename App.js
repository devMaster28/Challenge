/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import useDocuments from './src/hooks/useDocuments';
import DocumentsPage from './src/features/Documents/DocumentsPage';
import Header from './src/features/Header/Header';
import AddDocument from './src/Components/AddDocument';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const { documents, error, callApi } = useDocuments();
  const [isAddPage, setAddPage] = useState(false)
  console.log("newDocuments:", documents);
  useEffect(() => {
    if (documents == null) {
      callApi("documents")
    }
  })

  const handleButton = () => {
    setAddPage(true)
  }

  const hasDocuments = documents ? true : false
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header></Header>
      <AddDocument isAddPage={isAddPage} onPressBack={() => setAddPage(false)} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        {hasDocuments && <DocumentsPage documents={documents}></DocumentsPage>}

        <Button onPress={handleButton} title="+ Add document"></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
