import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "../Views/SearchView";
import SearchDetailsView from "../Views/SearchDetailsView";

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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SearchView">
                <Stack.Screen
                    name="SearchView"
                    component={SearchView}
                    options={({ navigation})=>navigationOption(navigation)}
                    />
                <Stack.Screen 
                    name="SearchDetailsView" 
                    component={SearchDetailsView}   
                    options={({ navigation})=>navigationOption(navigation)}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;