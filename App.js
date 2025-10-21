import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import store from './store/store';
import UserMessagesScreen from './screens/UserMessagesScreeen';
import UserConversationScreen from './screens/UserConversationScreen';
import COLORS from './constants/colors';

const { colors } = COLORS.appLightColor;
const theme = {
  ...DefaultTheme,
  colors,
};

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <UserMessagesScreen />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
}
