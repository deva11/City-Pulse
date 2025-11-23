
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from './styles/splashStyles';
import { FIS_LOGO, FIS_LOGO_BIG, FIS_LOGO_SMALL, PPL_LOGO, UPI_LOGO } from '../../src_M/constants/ImageConstants';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={UPI_LOGO} style={styles.image} />
    </View>
  );
}



// import React, { useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// import { useAuth } from '../bridge/hooks/useAuth';
// import { useLanguage } from '../bridge/hooks/useLanguage';

// export default function SplashScreen({ navigation }) {
//   const { user, initializing } = useAuth();
//   const { t } = useLanguage();

//   useEffect(() => {
//     if (!initializing) {
//       if (user) {
//         navigation.replace('Home');
//       } else {
//         navigation.replace('Login');
//       }
//     }
//   }, [initializing, user, navigation]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ActivityIndicator />
//       <Text style={{ marginTop: 16 }}>{t('homeTitle')}</Text>
//     </View>
//   );
// }
