import React from 'react';
// import { AuthProvider } from './bridge/hooks/useAuth';
import RootNavigator from './navigation/RootNavigator';
import { LanguageProvider } from './bridge/hooks/useLanguage';

export default function App() {
  return (
    <LanguageProvider>
      {/* <AuthProvider> */}
        <RootNavigator />
      {/* </AuthProvider> */}
    </LanguageProvider>
  );
}