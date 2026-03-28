import React from 'react'
import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
const homeScreen = () => {
    return (
        <Tabs
            screenOptions={{}}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: "UC",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name='revamp'
                options={{
                    title: "Revamp",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="refresh" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name='Rewards'
                options={{
                    title: "Rewards",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="gift" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name='Beauty'
                options={{
                    title: "Beauty",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="sparkles" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen 
    name='Account'
    options={{
        title:"Account",
        tabBarIcon:({color,size})=>(
            <Ionicons name="person" color={color} size={size}/>
        )
    }}
    />


        </Tabs>
    )
}

export default homeScreen



