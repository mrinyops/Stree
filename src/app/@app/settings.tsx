import { Pressable, Text, View } from '@/components/ui';
import { useAuth } from '@/lib/store'; // ✅ fixed import

export default function SettingsScreen() {
  const signOut = useAuth.use.signOut();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-6 text-xl font-semibold">Settings</Text>

      <Pressable
        onPress={signOut}
        className="rounded-2xl bg-streeBlue px-6 py-3 shadow-sm active:opacity-80"
      >
        <Text className="text-base font-medium text-white">Logout</Text>
      </Pressable>
    </View>
  );
}
