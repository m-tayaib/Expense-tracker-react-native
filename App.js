import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from "./consts/styles"
import { Ionicons } from "@expo/vector-icons"

import AllExpenses from "./screens/AllExpenses"
import RecentExpenses from "./screens/RecentExpenses"
import ManageExpense from "./screens/ManageExpense"


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function ExpensiveOverview() {
  return <BottomTabs.Navigator screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: "white",
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500
  }}>
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
      title: "Recent Expense",
      tabBarLabel: "Recent",
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name='hourglass' size={size} color={color} />
      }
    }} />
    <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
      title: "All Expense",
      tabBarLabel: "All Expense",
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name='calendar' size={size} color={color} />
      }
    }} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (

    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensiveOverview" component={ExpensiveOverview} options={{ headerShown: false }} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


