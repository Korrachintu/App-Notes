import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import { loadNotes, saveNotes } from '../storage/notesStorage';

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadNotes().then(setNotes);
    });
    return unsubscribe;
  }, [navigation]);

  const deleteNote = async (id) => {
    Alert.alert("Delete Note", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: async () => {
          const filtered = notes.filter((note) => note.id !== id);
          setNotes(filtered);
          await saveNotes(filtered);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 10, borderBottomWidth: 1 }}
      onPress={() => navigation.navigate('NoteDetail', { note: item })}
    >
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Button title="Delete" color="red" onPress={() => deleteNote(item.id)} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Create Note" onPress={() => navigation.navigate('CreateNote')} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
