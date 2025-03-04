import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "../Views/SearchView";
import SearchDetailsView from "../Views/SearchDetailsView";
import Login from "../Views/Authentication/Login";
import Profile from "../Views/Authentication/Profile";
import { AppProviders } from "../CustomContext";

const Stack = createStackNavigator();

// headerTitle: () => <H5 textTitle={title} />,
// headerLeft: () => <ButtonPrimaryNavBarRounded onPress={() => {
//     console.warn("ButtonPrimaryNavBarRoundedButtonPrimaryNavBarRounded")
//     navigation.goBack() 
// }} />


const navigationOption = (navigation) => {
    return {
        headerShadowVisible: false,
        headerTitleAlign: 'center',

    }
}

const AppNavigation = () => {
    return (
        <AppProviders>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={({ navigation }) => navigationOption(navigation)}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={({ navigation }) => navigationOption(navigation)}
                    />
                    <Stack.Screen
                        name="SearchView"
                        component={SearchView}
                        options={({ navigation }) => navigationOption(navigation)}
                    />
                    <Stack.Screen
                        name="SearchDetailsView"
                        component={SearchDetailsView}
                        options={({ navigation }) => navigationOption(navigation)}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProviders>

    );
};

export default AppNavigation;