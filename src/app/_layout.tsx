// src/app/_layout.tsx
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { restoreSession, useAuth } from '@/lib';

export default function RootLayout() {
  const status = useAuth.use.status();

  useEffect(() => {
    restoreSession();
  }, []);

  if (status === 'idle') {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {status === 'signedOut' ? (
        <Stack.Screen name="@auth" />
      ) : (
        <Stack.Screen name="@app" />
      )}
    </Stack>
  );
}
