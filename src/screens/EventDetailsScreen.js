
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
// import MapPreview from '../components/MapPreview';
import styles from './styles/eventDetailsStyles';
import { useFavorites } from '../bridge/hooks/useFavorites';
import FavoriteButton from '@/components/FavouriteButton';

export default function EventDetailsScreen({ route }) {
  const { event } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();

  const venue = event._embedded?.venues?.[0];
  const latitude = venue?.location?.latitude ? parseFloat(venue.location.latitude) : null;
  const longitude = venue?.location?.longitude ? parseFloat(venue.location.longitude) : null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <FavoriteButton isFavorite={isFavorite(event.id)} onPress={() => toggleFavorite(event)} />

      <Text style={styles.venue}>{venue?.name}</Text>
      <Text style={styles.date}>{event.dates?.start?.localDate}</Text>

      {/* <MapPreview latitude={latitude} longitude={longitude} /> */}
      <Text style={styles.description}>{event.info || 'No description available.'}</Text>
    </ScrollView>
  );
}
