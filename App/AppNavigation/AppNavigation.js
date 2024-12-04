import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "../Views/SearchView";

const Stack = createStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SearchView">
                <Stack.Screen name="SearchView" component={SearchView} />
                {/* <Stack.Screen name="UserOtp" component={UserOtp} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;