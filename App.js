import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import BasicScreen from './src/screens/Native/BasicScreen';
import ReactNativeScreen from './src/screens/Native/ReactNativeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Basic: BasicScreen,
    ReactNative: ReactNativeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Modal'
    }
  }
);

export default createAppContainer(navigator);
