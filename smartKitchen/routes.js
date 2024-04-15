import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Viagem } from './pages/viagem';
import { Fome } from './pages/fome';
import { Poema } from './pages/poema';
import { Receita } from './pages/receita';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="receita"
                component={Receita}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="fast-food" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="fast-food-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="viagem"
                component={Viagem}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="airplane" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="airplane-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="fome"
                component={Fome}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="book" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="book-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="poema"
                component={Poema}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="pencil" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="pencil-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}