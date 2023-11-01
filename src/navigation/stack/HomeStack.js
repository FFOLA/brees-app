import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import OnBoardingMain from "../../Screens/OnBoarding/OnBoarding";
import OnBoardingMain from "../../Screens/OnBoarding/OnBoardingMain.Js"
import SignUp from "../../Screens/SignUp";
import Welcome from "../../Screens/Welcome";
import GetStarted from "../../Screens/GetStarted";
import VerifyEmail from "../../Screens/VerifyEmail";
import LogIn from "../../Screens/LogIn";
import ForgotPassword from "../../Screens/ForgotPassword";
import ForgotPasswordSent from "../../Screens/ForgotPasswordSent";
import DashBoard from "../../Screens/HomeStack/Dashboard";
import Accounts from "../../Screens/HomeStack/Accounts";
import SingleAccount from "../../Screens/HomeStack/SingleAccount";
import SortTransactions from "../../Screens/HomeStack/SortTransactions";
import SuccessSort from "../../Screens/HomeStack/SuccessSort";
import ListNotifications from "../../Screens/HomeStack/ListNotifications";
import AllTransactions from "../../Screens/HomeStack/AllTransactions";
import OneTransaction from "../../Screens/HomeStack/OneTransaction";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'dashboard'}
                component={DashBoard}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'accounts'}
                component={Accounts}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'SingleAccount'}
                component={SingleAccount}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'SortTransactions'}
                component={SortTransactions}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'SuccessSort'}
                component={SuccessSort}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'ListNotifications'}
                component={ListNotifications}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'AllTransactions'}
                component={AllTransactions}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'OneTransaction'}
                component={OneTransaction}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default HomeStack;