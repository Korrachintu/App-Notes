import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { loadNotes, saveNotes } from '../storage/notesStorage';
import { v4 as uuidv4 } from 'uuid';

export default function CreateNoteScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createNote = async () => {
    console.log("Save button clicked");
    
    if (!title.trim()) {
      Alert.alert("Missing Title", "Please enter a note title.");
      return;
    }

    const newNote = { id: uuidv4(), title, body };
    const existingNotes = await loadNotes();
    const updatedNotes = [newNote, ...existingNotes];
    await saveNotes(updatedNotes);

    // ✅ Show confirmation
    Alert.alert("Note Saved", "Your note has been saved.", [
      {
        text: "OK",
        onPress: () => navigation.goBack(), // ✅ Go back after OK
      },
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
      <Button title="Save Note" onPress={createNote} />
    </View>
  );
}
