import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import BasicScreen from './src/screens/Native/BasicScreen';
import ReactNativeModalScreen from './src/screens/Plugins/ReactNativeModalScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Basic: BasicScreen,
    RNM: ReactNativeModalScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Modal'
    }
  }
);

export default createAppContainer(navigator);
