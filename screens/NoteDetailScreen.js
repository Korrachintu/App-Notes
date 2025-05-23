import React from 'react';
import { View, Text } from 'react-native';

export default function NoteDetailScreen({ route }) {
  const { note } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{note.title}</Text>
      <Text style={{ marginTop: 10 }}>{note.body}</Text>
      <Text style={{ marginTop: 10, color: 'gray' }}>Created: {note.createdAt}</Text>
      {note.updatedAt && <Text style={{ color: 'gray' }}>Edited: {note.updatedAt}</Text>}
    </View>
  );
}
