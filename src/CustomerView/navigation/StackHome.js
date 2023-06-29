import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChangePassword from '../screens/ChangePassword';
import ChangeProfile from '../screens/ChangeProfile';
import ChatScreen from '../screens/ChatScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddressScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import DetailCategoryScreen from '../screens/DetailCategoryScreen';
import DetailProduct from '../screens/DetailProduct';
import HomeScreenCustomer from '../screens/HomeScreenCustomer';
import PaymentCardScreen from '../screens/PaymentCardScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import PromotionScreen from '../screens/PromotionScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SearchingScreen from '../screens/SearchingScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import TrendingScreen from '../screens/TrendingScreen';

const Stack = createNativeStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="HomeScreen" component={HomeScreenCustomer} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
      <Stack.Screen name="Trending" component={TrendingScreen} />
      <Stack.Screen name="Searching" component={SearchingScreen} />
      <Stack.Screen name="ShoppingCard" component={ShoppingCartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="DeliveryAddress" component={DeliveryAddressScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="PaymentCard" component={PaymentCardScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="DetailCategory" component={DetailCategoryScreen} />
      <Stack.Screen name="Promotion" component={PromotionScreen} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
    </Stack.Navigator>
  );
}

export default StackHome;
