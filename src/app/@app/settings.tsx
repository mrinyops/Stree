import { Pressable, Text, View } from 'react-native';

import { useAuth } from '@/lib/auth/store'; // ✅ selector API

export default function SettingsScreen() {
  const status = useAuth.use.status();
  const signOut = useAuth.use.signOut();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Settings
      </Text>
      <Text className="mb-6 text-gray-600 dark:text-gray-300">
        Status: {status}
      </Text>

      <Pressable
        onPress={signOut}
        className="rounded-2xl bg-streeBlue px-6 py-3"
      >
        <Text className="font-semibold text-white">Logout</Text>
      </Pressable>
    </View>
  );
}
