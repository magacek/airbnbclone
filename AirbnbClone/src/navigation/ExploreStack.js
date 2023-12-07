import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../screens/ExploreScreen';
import DetailScreen from '../screens/DetailScreen';

const ExploreStack = createStackNavigator();

// ExploreStackNavigator
// This component sets up the stack navigator for the Explore section of the app.
// It includes the ExploreScreen and DetailScreen with specific navigation options.


const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Detail" component={DetailScreen} options={{ tabBarVisible: false }} />
    </ExploreStack.Navigator>
  );
};
export default ExploreStackNavigator;
