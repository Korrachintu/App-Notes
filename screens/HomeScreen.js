import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function HomeScreen({ navigation, notes, setNotes }) {
  const [search, setSearch] = useState('');

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('NoteDetail', { note: item, setNotes })}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>Created: {item.createdAt}</Text>
        {item.updatedAt && <Text style={{ fontSize: 12, color: 'gray' }}>Edited: {item.updatedAt}</Text>}
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Button title="Edit" onPress={() => navigation.navigate('EditNote', { note: item, setNotes })} />
        <View style={{ width: 10 }} />
        <Button title="Delete" color="red" onPress={() => deleteNote(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search notes..."
        value={search}
        onChangeText={setSearch}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Create Note" onPress={() => navigation.navigate('CreateNote')} />
      <FlatList data={filteredNotes} keyExtractor={item => item.id} renderItem={renderItem} />
    </View>
  );
}
