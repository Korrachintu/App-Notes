// CreateNoteScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import uuid from 'react-native-uuid';


export default function CreateNoteScreen({ navigation, setNotes }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createNote = () => {
    if (!title.trim()) {
      Alert.alert('Missing Title', 'Please enter a note title.');
      return;
    }

    const newNote = { id: Date.now().toString(), title, body };
    setNotes(prevNotes => [newNote, ...prevNotes]);

    Alert.alert('Note Saved', 'Your note has been saved.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Body" value={body} onChangeText={setBody} multiline style={{ borderBottomWidth: 1, height: 100 }} />
      <Button title="Save Note" onPress={createNote} />
    </View>
  );
}
