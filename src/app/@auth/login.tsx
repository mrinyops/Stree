import { useState } from 'react';
import { Pressable, TextInput } from 'react-native';

import { Text, View } from '@/components/ui';
import { useAuth } from '@/lib/store'; // ✅ fixed import

export default function LoginScreen() {
  const signIn = useAuth.use.signIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="mb-6 text-2xl font-bold">Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mb-4 w-full rounded-lg border px-4 py-3"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-6 w-full rounded-lg border px-4 py-3"
      />

      <Pressable
        onPress={() => signIn(email, password)}
        className="rounded-2xl bg-streeBlue px-6 py-3 shadow-sm active:opacity-80"
      >
        <Text className="text-base font-medium text-white">Sign In</Text>
      </Pressable>
    </View>
  );
}
