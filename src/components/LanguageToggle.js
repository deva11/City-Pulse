
import React from 'react';
import { Switch, View, Text } from 'react-native';
import { useLanguage } from '../bridge/hooks/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 8 }}>EN</Text>
      <Switch
        value={language === 'ar'}
        onValueChange={toggleLanguage}
      />
      <Text style={{ marginLeft: 8 }}>AR</Text>
    </View>
  );
}
