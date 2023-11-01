import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ForgotPasswordSent from "../../Screens/ForgotPasswordSent";
import InsightHome from "../../Screens/InsightStack/InsightHome";

const Stack = createNativeStackNavigator();
const InsightStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'InsightHome'}
                component={InsightHome}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default InsightStack;