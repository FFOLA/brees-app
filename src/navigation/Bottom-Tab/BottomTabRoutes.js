import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import HomeStack from '../stack/HomeStack';
import InsightStack from '../stack/InsightStack';
import CustomIcon from '../../components/icon';
import BudgetStack from '../stack/BudgetStack';
import ProfileStack from '../stack/ProfileStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#2C14DD",
                    // backgroundColor: "yellow",
                    borderTopColor: "transparent",
                    display: getTabBarVisibility(route),
                    borderTopWidth: 0,
                    paddingTop: 20,
                    // height: 70,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'Home';
                    size = 24;
                    color = focused ? "white" : '#C1B9F9';
                    if (route.name == "Home") {
                        iconName = focused ? "home" : "home-outline"
                    } else if (route.name === "Budget") {
                        iconName = focused ? "pie-chart" : "pie-chart-outline"

                    } else if (route.name === "Insight") {
                        iconName = focused ? "bar-chart" : "bar-chart-outline"

                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline"

                    }
                    return <CustomIcon name={iconName} color={color} size={size} />
                },


            })}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
            />
            <Tab.Screen
                name="Budget"
                component={BudgetStack}
            />
            <Tab.Screen
                name="Insight"
                component={InsightStack}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
            />
        </Tab.Navigator>
    );
};

const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    if (routeName == 'accounts') {
        return 'none';
    }
    if (routeName == 'SingleAccount') {
        return 'none';
    }
    if (routeName == 'SortTransactions') {
        return 'none';
    }
    if (routeName == 'SuccessSort') {
        return 'none';
    }
    if (routeName == 'ListNotifications') {
        return 'none';
    }
    if (routeName == 'AllTransactions') {
        return 'none';
    }
    if (routeName == 'OneTransaction') {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator;