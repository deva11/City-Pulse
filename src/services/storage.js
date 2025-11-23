
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  async get(key, defaultValue = null) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (err) {
      return defaultValue;
    }
  },
  async set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },
  async remove(key) {
    return AsyncStorage.removeItem(key);
  },
};