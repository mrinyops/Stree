import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { Text, View } from '@/components/ui';
import { restoreSession, useAuth } from '@/lib/store'; // ✅ clean

export default function RootLayout() {
  const status = useAuth.use.status();

  useEffect(() => {
    restoreSession();
  }, []);

  if (status === 'idle') {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-medium">Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {status === 'signedOut' ? (
        <Stack.Screen name="@auth/login" />
      ) : (
        <Stack.Screen name="@app" />
      )}
    </Stack>
  );
}
