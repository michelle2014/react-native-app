import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList, RootTabParamList } from '../types'
import { Octicons, Feather, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons'
import Colors from '../src/constants/Colors'
import HomeScreen from '../src/screens/Home/HomeScreen'
import ExpensesScreen from '../src/screens/Expenses/ExpensesScreen'
import PortfolioScreen from '../src/screens/Portfolio/PortfolioScreen'
import MoreScreen from '../src/screens/More/MoreScreen'
import BankAccountsScreen from '../src/screens/BankAccounts/BankAccountsScreen'
import React from 'react'
import AllSpendingCategories from '../src/components/AllSpendingCategories';

export default function Navigation () {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = (() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Expenses" component={AllCategoriesNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
})

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator () {
  return (
    <BottomTab.Navigator
      initialRouteName="homeTab"
      screenOptions={{
        tabBarItemStyle: {
          height: 52,
        },
        headerShown: false
      }}
    >
      <BottomTab.Screen
        name="homeTab"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Octicons name="home" color={focused ? Colors.primary : Colors.primaryOpacity3} size={23} />
        }}
      />
      <BottomTab.Screen
        name="expensesTab"
        component={ExpensesNavigator}
        options={{
          title: 'Expenses',
          tabBarIcon: ({ focused }) => <Feather name="pie-chart" color={focused ? Colors.primary : Colors.primaryOpacity3} size={23} />

        }}
      />
      <BottomTab.Screen
        name="portfolioTab"
        component={PortfolioNavigator}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <FontAwesome name="dollar" color={focused ? Colors.primary : Colors.primaryOpacity3} size={23} />
        }}
      />
      <BottomTab.Screen
        name="bankAccountsTab"
        component={BankAccountsNavigator}
        options={{
          title: 'Bank Accounts',
          tabBarIcon: ({ focused }) => <AntDesign name="bars" color={focused ? Colors.primary : Colors.primaryOpacity3} size={23} />
        }}
      />
      <BottomTab.Screen
        name="moreTab"
        component={MoreNavigator}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <Entypo name="dots-three-horizontal" color={focused ? Colors.primary : Colors.primaryOpacity3} size={23} />
        }}
      />
    </BottomTab.Navigator>
  )
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          headerStyle: {backgroundColor: '#497bd0',},
          headerTintColor: '#fff'
        }}
      />
    </HomeStack.Navigator>
  );
}

const ExpensesStack = createStackNavigator();

function ExpensesNavigator() {
  return (
    <ExpensesStack.Navigator>
      <ExpensesStack.Screen
        name="ExpensesScreen"
        component={ExpensesScreen}
        options={{
          headerTitle: "Expenses",
          headerStyle: {backgroundColor: '#497bd0'},
          headerTintColor: '#fff'
        }}
      />
    </ExpensesStack.Navigator>
  );
}

const PortfolioStack = createStackNavigator();

function PortfolioNavigator() {
  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{
          headerTitle: "Portfolio",
          headerStyle: {backgroundColor: '#497bd0',},
          headerTintColor: '#fff'
        }}
      />
    </PortfolioStack.Navigator>
  );
}

const BankAccountsStack = createStackNavigator();

function BankAccountsNavigator() {
  return (
    <BankAccountsStack.Navigator>
      <BankAccountsStack.Screen
        name="BankAccountsScreen"
        component={BankAccountsScreen}
        options={{
          headerTitle: "Bank Accounts",
          headerStyle: {backgroundColor: '#497bd0',},
          headerTintColor: '#fff'
        }}
      />
    </BankAccountsStack.Navigator>
  );
}

const MoreStack = createStackNavigator();

function MoreNavigator() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          headerTitle: "More",
          headerStyle: {backgroundColor: '#497bd0',},
          headerTintColor: '#fff'
        }}
      />
    </MoreStack.Navigator>
  );
}

  const AllCategoriesStack = createStackNavigator();

  function AllCategoriesNavigator() {
    return (
      <AllCategoriesStack.Navigator>
        <AllCategoriesStack.Screen
          name="allSpendingCategories"
          component={AllSpendingCategories}
          options={{
            headerTitle: "",
            headerStyle: {backgroundColor: '#497bd0',},
            headerTintColor: '#fff'
          }}
        />
      </AllCategoriesStack.Navigator>
    );
  }
