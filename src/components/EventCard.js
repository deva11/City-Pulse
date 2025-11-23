
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function EventCard({ event, isFavorite, onPress, onToggleFavorite, isRTL }) {
  const venue = event._embedded?.venues?.[0];
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 12,
        marginVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{event.name}</Text>
        <Text numberOfLines={1}>{venue?.name}</Text>
        <Text>{event.dates?.start?.localDate}</Text>
      </View>
      <TouchableOpacity onPress={onToggleFavorite}>
        <Text style={{ fontSize: 20, marginLeft: isRTL ? 0 : 8, marginRight: isRTL ? 8 : 0 }}>
          {isFavorite ? '★' : '☆'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
