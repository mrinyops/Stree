import { Text, View } from 'react-native';

import { useAuth } from '@/lib';

export default function Home() {
  const status = useAuth.use.status();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>
        👋 Welcome to Stree
      </Text>
      <Text style={{ fontSize: 18, color: 'gray' }}>
        {status === 'signIn' ? 'Signed in' : 'Not signed in'}
      </Text>
    </View>
  );
}
