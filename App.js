/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import GeneralRoutes from './src/navigation/stack/GeneralRoute';
import 'react-native-gesture-handler'
import TabNavigator from './src/navigation/Bottom-Tab/BottomTabRoutes';
import {
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Provider as PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en', en)


function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <BottomSheetModalProvider>
          <PaperProvider>
            <NavigationContainer>
              <TabNavigator />
              {/* <GeneralRoutes /> */}
            </NavigationContainer>
          </PaperProvider>
        </BottomSheetModalProvider>
      </ApplicationProvider >
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
