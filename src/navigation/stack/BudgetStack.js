import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ForgotPasswordSent from "../../Screens/ForgotPasswordSent";
import BudgetHome from "../../Screens/BudgetStack/BudgetHome";
// import CreateBudgetMain from "../../Screens/BudgetStack/CreateBudgetMain";
import CreateBudget from "../../Screens/BudgetStack/CreateBudget";
import SetBudgetAmountScreen from "../../Screens/BudgetStack/CreateBudgetScreens/SetBudgetAmountScreen";
import BudgetCreated from "../../Screens/BudgetStack/CreateBudgetScreens/BudgetCreated";
import OneBudget from "../../Screens/BudgetStack/OneBudget";

const Stack = createNativeStackNavigator();
const BudgetStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'BudgetHome'}
                component={BudgetHome}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'CreateBudget'}
                component={CreateBudget}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'BudgetCreated'}
                component={BudgetCreated}
                options={{ headerShown: false }}>
            </Stack.Screen>
            <Stack.Screen
                name={'OneBudget'}
                component={OneBudget}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default BudgetStack;