import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import BottomTabNavigator from "./BottomTab";

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
      }}
      >
        <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      </Drawer.Navigator>
  );
}
