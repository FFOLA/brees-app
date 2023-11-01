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

const Stack = createNativeStackNavigator();
const GeneralRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'OnBoardingMain'}
                component={OnBoardingMain}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'SignUp'}
                component={SignUp}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'Welcome'}
                component={Welcome}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'GetStarted'}
                component={GetStarted}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'VerifyEmail'}
                component={VerifyEmail}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'LogIn'}
                component={LogIn}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'ForgotPassword'}
                component={ForgotPassword}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'ForgotPasswordSent'}
                component={ForgotPasswordSent}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default GeneralRoutes;