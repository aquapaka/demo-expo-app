import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#124559",
        tabBarInactiveTintColor: "#598392",
        headerStyle: { backgroundColor: "#aec3b0" },
        headerShadowVisible: false,
        headerTintColor: "#124559",
        tabBarStyle: {
          backgroundColor: "#aec3b0",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
