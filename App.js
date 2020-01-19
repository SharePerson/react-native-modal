import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import BasicScreen from './src/screens/BasicScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Basic: BasicScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Modal'
    }
  }
);

export default createAppContainer(navigator);
