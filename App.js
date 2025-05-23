// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CreateNoteScreen from './screens/CreateNoteScreen';
import NoteDetailScreen from './screens/NoteDetailScreen';
import EditNoteScreen from './screens/EditNoteScreen';

const Stack = createStackNavigator();

export default function App() {
  const [notes, setNotes] = useState([]);  // In-memory only

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} notes={notes} setNotes={setNotes} />}
        </Stack.Screen>
        <Stack.Screen name="CreateNote">
          {props => <CreateNoteScreen {...props} setNotes={setNotes} />}
        </Stack.Screen>
        <Stack.Screen name="EditNote">
          {props => <EditNoteScreen {...props} setNotes={setNotes} />}
        </Stack.Screen>
        <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
