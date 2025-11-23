
import { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../../config/firebaseConfig';
import { storage } from '../../services/storage';
import ReactNativeBiometrics from 'react-native-biometrics';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (u) storage.set('auth_user', u);
    });
    return subscribe;
  }, []);

  const login = async ({ email, password }) =>
    auth.signInWithEmailAndPassword(email, password);

  const signup = async ({ email, password }) =>
    auth.createUserWithEmailAndPassword(email, password);

  const biometricLogin = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const result = await rnBiometrics.simplePrompt({ promptMessage: 'Login' });
    const savedUser = await storage.get('auth_user');

    if (result.success && savedUser)
      return auth.signInWithEmailAndPassword(savedUser.email, savedUser.password);
  };

  const logout = async () => {
    await auth.signOut();
    storage.remove('auth_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, biometricLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}



// Mock auth with AsyncStorage + optional biometric:

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import * as LocalAuthentication from 'expo-local-authentication';
// import { storage } from '../../services/storage';

// const AuthContext = createContext();

// const USER_KEY = 'auth_user';

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [initializing, setInitializing] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const saved = await storage.get(USER_KEY, null);
//       if (saved) setUser(saved);
//       setInitializing(false);
//     })();
//   }, []);

//   const signup = async ({ name, email, password }) => {
//     // very simple for assessment: store plaintext in AsyncStorage
//     const newUser = { name, email, password };
//     await storage.set(USER_KEY, newUser);
//     setUser(newUser);
//   };

//   const login = async ({ email, password }) => {
//     const saved = await storage.get(USER_KEY, null);
//     if (saved && saved.email === email && saved.password === password) {
//       setUser(saved);
//       return true;
//     }
//     return false;
//   };

//   const biometricLogin = async () => {
//     const hasHardware = await LocalAuthentication.hasHardwareAsync();
//     const enrolled = await LocalAuthentication.isEnrolledAsync();
//     if (!hasHardware || !enrolled) return false;

//     const result = await LocalAuthentication.authenticateAsync({
//       promptMessage: 'Login with biometrics',
//     });
//     if (result.success) {
//       const saved = await storage.get(USER_KEY, null);
//       if (saved) {
//         setUser(saved);
//         return true;
//       }
//     }
//     return false;
//   };

//   const logout = async () => {
//     setUser(null);
//     await storage.remove(USER_KEY);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, initializing, signup, login, biometricLogin, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
