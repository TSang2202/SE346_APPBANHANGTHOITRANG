import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DetailProduct from '../screens/DetailProduct';
import HomeScreenCustomer from '../screens/HomeScreenCustomer';
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

        </Stack.Navigator>

    )
}

export default StackHome