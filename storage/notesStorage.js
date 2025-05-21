import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'NOTES';

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes:', error);
  }
};

export const loadNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error loading notes:', error);
    return [];
  }
};
