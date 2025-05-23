import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function EditNoteScreen({ route, navigation, setNotes }) {
  const { note } = route.params;
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const updateNote = () => {
    if (!title.trim()) {
      Alert.alert('Missing Title', 'Please enter a note title.');
      return;
    }

    const updatedNote = {
      ...note,
      title,
      body,
      updatedAt: new Date().toLocaleString(),
    };

    setNotes(prevNotes =>
      prevNotes.map(n => (n.id === updatedNote.id ? updatedNote : n))
    );

    Alert.alert('Note Updated', 'Your note has been updated.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
        style={{ borderBottomWidth: 1, height: 100 }}
      />
      <Button title="Update Note" onPress={updateNote} />
    </View>
  );
}
