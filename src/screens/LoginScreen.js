
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './styles/loginStyles';
import { useAuth } from '@/bridge/hooks/useAuth';
import { useLanguage } from '@/bridge/hooks/useLanguage';

export default function LoginScreen({ navigation }) {
//   const { login, biometricLogin } = useAuth();
  const { t, isRTL } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
    //   await login({ email, password });
      navigation.replace('Home');
    } catch {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('login')}</Text>

      <TextInput
        style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Button title="Login" onPress={handleLogin} />
      <View style={styles.space} />
      <Button title="Biometric Login" 
    //   onPress={biometricLogin}
       />
      <View style={styles.space} />
      <Button title="Create Account" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
