import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import store from './store/store';
import UserMessagesScreen from './screens/UserMessagesScreeen';
import UserConversationScreen from './screens/UserConversationScreen'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <UserMessagesScreen />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
}
