import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { useAuthStore } from '@/lib/auth/store';

export default function LoginScreen() {
  const signIn = useAuthStore((s) => s.signIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 justify-center bg-white px-6">
      {/* Header */}
      <Text className="mb-10 text-center text-4xl font-extrabold text-streeBlue">
        Stree
      </Text>

      {/* Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#9ca3af"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="mb-4 w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#9ca3af"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3"
      />

      {/* Sign In button */}
      <Pressable
        onPress={signIn}
        className="rounded-xl bg-streeBlue py-3"
        android_ripple={{ color: '#1e40af' }}
      >
        <Text className="text-center text-lg font-semibold text-white">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
}
