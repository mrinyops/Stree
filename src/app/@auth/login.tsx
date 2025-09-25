import { Pressable, Text, TextInput, View } from 'react-native';

import { useAuth } from '@/lib/auth/store'; // ✅ selector API

export default function LoginScreen() {
  const signIn = useAuth.use.signIn();

  return (
    <View className="flex-1 items-center justify-center bg-white px-6 dark:bg-black">
      <Text className="mb-6 text-2xl font-bold text-streeBlue">Stree</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        className="mb-4 w-full rounded-2xl border border-gray-300 px-4 py-3 text-base text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        className="mb-6 w-full rounded-2xl border border-gray-300 px-4 py-3 text-base text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
      />

      <Pressable
        onPress={signIn}
        className="w-full rounded-2xl bg-streeBlue px-6 py-3"
      >
        <Text className="text-center font-semibold text-white">Sign In</Text>
      </Pressable>
    </View>
  );
}
