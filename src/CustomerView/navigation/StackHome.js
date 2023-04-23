import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ChatScreen from '../screens/ChatScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddressScreen';
import DetailProduct from '../screens/DetailProduct';
import HomeScreenCustomer from '../screens/HomeScreenCustomer';
import PaymentCardScreen from '../screens/PaymentCardScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import SearchingScreen from '../screens/SearchingScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import TrendingScreen from '../screens/TrendingScreen';


const Stack = createNativeStackNavigator();

function StackHome()
{
    return(
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >

            <Stack.Screen name = 'HomeScreen' component={HomeScreenCustomer} />
            <Stack.Screen name= 'DetailProduct' component={DetailProduct} />
            <Stack.Screen name= 'Trending' component={TrendingScreen} />
            <Stack.Screen name= 'Searching' component={SearchingScreen} />
            <Stack.Screen name= 'ShoppingCard' component={ShoppingCartScreen} />
            <Stack.Screen name= 'Checkout' component={CheckoutScreen} />
            <Stack.Screen name= 'DeliveryAddress' component={DeliveryAddressScreen} />
            <Stack.Screen name= 'PaymentMethod' component={PaymentMethodScreen} />
            <Stack.Screen name= 'PaymentCard' component={PaymentCardScreen} />
            <Stack.Screen name= 'Chat' component={ChatScreen} />

        </Stack.Navigator>

    )
}

export default StackHome