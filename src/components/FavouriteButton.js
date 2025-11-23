
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function FavoriteButton({ isFavorite, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
      }}
    >
      <Text>{isFavorite ? '★ Favourite' : '☆ Add to favourites'}</Text>
    </TouchableOpacity>
  );
}
