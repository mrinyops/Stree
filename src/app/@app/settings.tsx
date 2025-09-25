import { Button, Text, View } from 'react-native';

import { useAuthStore } from '@/lib/auth/store';

export default function SettingsScreen() {
  const signOut = useAuthStore((s) => s.signOut);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-6 text-2xl font-semibold">Settings ⚙️</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
}
