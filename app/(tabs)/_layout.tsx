import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerStyle: { backgroundColor: "pink" },
        headerShadowVisible: true,
        headerTintColor: "",
        tabBarStyle: {
          backgroundColor: "pink",
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
