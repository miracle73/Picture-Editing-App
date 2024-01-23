import { ThemeProvider } from '@rneui/themed';
import { useFonts } from 'expo-font';
import CustomText from './components/Element/Text';
import AppNavigation from './components/Navigation';
import theme from './constants/theme';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  // const [loaded] = useFonts({
  //   Mulish: require('./assets/fonts/Mulish.ttf'),
  // });
  

  // if (!loaded) {
  //   return <CustomText>Loading...</CustomText>;
  // }
  
  return (
    <ThemeProvider theme={theme}>
        <AppNavigation />
        <StatusBar style='light' />
    </ThemeProvider>
  );
}
