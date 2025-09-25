import '../../global.css';

import { Redirect, Slot, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { useAuthStore } from '@/lib/auth/store';

export default function RootLayout() {
  const status = useAuthStore((s) => s.status);
  const restoreSession = useAuthStore((s) => s.restoreSession);
  const pathname = usePathname();

  useEffect(() => {
    restoreSession();
  }, [restoreSession]);

  console.log('Auth status render:', status, 'pathname:', pathname);

  if (status === 'idle') {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
        <Text className="mt-4 text-lg">Restoring session…</Text>
      </View>
    );
  }

  // ✅ Prevent redirect loops by checking current path
  if (status === 'signedOut' && !pathname.startsWith('/@auth')) {
    return <Redirect href="/@auth/login" />;
  }

  if (status === 'signedIn' && !pathname.startsWith('/@app')) {
    return <Redirect href="/@app" />;
  }

  // Fallback: render whatever route is active
  return <Slot />;
}
