

import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
// import LottieView from 'lottie-react-native';

export default function SplashScreenAnimated({ navigation }) {
  useEffect(() => setTimeout(() => navigation.replace('Login'), 3000), []);

  return (
    <View style={styles.container}>
      {/* <LottieView source={require('../../assets/splash.json')} autoPlay loop={false} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
