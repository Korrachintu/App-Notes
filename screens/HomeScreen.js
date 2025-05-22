// HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, notes, setNotes }) {
  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1 }} onPress={() => navigation.navigate('NoteDetail', { note: item })}>
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Button title="Delete" color="red" onPress={() => deleteNote(item.id)} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Create Note" onPress={() => navigation.navigate('CreateNote')} />
      <FlatList data={notes} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
}
