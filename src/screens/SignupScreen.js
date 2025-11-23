
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import { useAuth } from '../bridge/hooks/useAuth';
import styles from './styles/signupStyles';

export default function SignupScreen({ navigation }) {
//   const { signup } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup() {
    // await signup({ email, password });
    navigation.replace('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Button title="Create Account" onPress={handleSignup} />
    </View>
  );
}
