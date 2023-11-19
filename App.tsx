/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput
} from 'react-native';
// import TitleComponent from './TitleComponent';
// import OAuthButtonComponent from './OAuthButtonComponent';
// import OptionDividerComponent from './OptionDividerComponent';
// import FormComponent from './FormComponent';
// import AuxTextComponent from './AuxTextComponent';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const TitleComponent = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

const OAuthButtonComponent = ({ onPress, title }) => (
  <Button onPress={onPress} title={title} />
);

const OptionDividerComponent = () => (
  <View style={styles.divider} />
);

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // Handle the form submission logic
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const AuxTextComponent = ({ text }) => (
  <Text style={styles.auxText}>{text}</Text>
);

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TitleComponent title="Welcome" />
      <OAuthButtonComponent onPress={() => {}} title="Sign in with OAuth" />
      <OptionDividerComponent />
      <FormComponent />
      <AuxTextComponent text="Additional information" />
    </View>
           );
         };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginVertical: 10
      },
      input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10
        },
        auxText: {
            fontSize: 16,
            color: 'gray'
          }
  // Other styles...
});

export default App;
// export default OAuthButtonComponent;
// export default OptionDividerComponent;
// export default FormComponent;
// export default AuxTextComponent;