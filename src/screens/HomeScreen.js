
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './styles/homeStyles';
import { useLanguage } from '@/bridge/hooks/useLanguage';
import { useEvents } from '@/bridge/hooks/useEvents';
import { useFavorites } from '@/bridge/hooks/useFavorites';
import EventCard from '@/components/EventCard';

export default function HomeScreen({ navigation }) {
  const { t, isRTL } = useLanguage();
  const { events, loading, fetchEvents } = useEvents();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('homeTitle')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('searchPlaceholder')}
        value={keyword}
        onChangeText={setKeyword}
      />
      <TextInput
        style={styles.input}
        placeholder={t('cityPlaceholder')}
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={() => fetchEvents({ keyword, city })} />

      {loading && <Text style={styles.loading}>Loading...</Text>}

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            isRTL={isRTL}
            isFavorite={isFavorite(item.id)}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  );
}