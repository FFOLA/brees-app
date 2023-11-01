import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ForgotPasswordSent from "../../Screens/ForgotPasswordSent";

const Stack = createNativeStackNavigator();
const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'ForgotPasswordSent'}
                component={ForgotPasswordSent}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default ProfileStack;