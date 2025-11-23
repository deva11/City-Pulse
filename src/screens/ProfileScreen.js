
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useAuth } from '../bridge/hooks/useAuth';
import EventCard from '@/components/EventCard';
import { useFavorites } from '@/bridge/hooks/useFavorites';
// import EventCard from '../components/EventCard';
// import { useFavorites } from '../bridge/hooks/useFavorites';
import styles from './styles/profileStyles';

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Email: {user?.email}</Text>

      <Button title="Logout" onPress={() => logout().then(() => navigation.replace('Login'))} />

      <Text style={styles.subTitle}>Favorite Events</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} isFavorite={isFavorite(item.id)} onToggleFavorite={() => toggleFavorite(item)} />
        )}
      />
    </View>
  );
}