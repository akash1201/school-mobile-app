//react components
import React from 'react';
import { View, Text } from 'react-native';
//bottom tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//styles
import { styles } from "./BottomTabsStyle";
//global
import { MyIcons, ScreensName } from '../../global';
//screens
import ChatMember from '../../screens/ChatMember/ChatMember';
import Notification from '../../screens/Notification/Notification';
import Profile from '../../screens/Profile/Profile';
import MyText from '../../components/MyText/MyText';

const BottomTabs = () => {
    //variables
    const Tab = createBottomTabNavigator();
    const screenOptions = {
        showLabel: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.TabStyleView,
    }
    //UI
    return (
        <Tab.Navigator
            backBehavior="none"
            screenOptions={screenOptions}
        >
            <Tab.Screen
                name={ScreensName.CHAT_MEMBER}
                component={ChatMember}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View>
                                <View style={styles.myIconView}>
                                    <MyIcons.Ionicons name="chatbox-outline" size={24} />
                                </View>
                                <MyText
                                    text="Chat"
                                    textAlign="center"
                                    fontFamily="SEMI_BOLD"
                                    style={styles.MyFocusedLabelStyle}
                                />
                            </View>
                            :
                            <View>
                                <MyIcons.Ionicons name="chatbox-outline" size={24} />
                            </View>
                    ),
                }}
            />
            <Tab.Screen
                name={ScreensName.NOTOFICATION}
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View>
                                <View style={styles.myIconView}>
                                    <MyIcons.Ionicons name="notifications-outline" size={24} />
                                </View>
                                <MyText
                                    text="Activity"
                                    textAlign="center"
                                    fontFamily="SEMI_BOLD"
                                    style={styles.MyFocusedLabelStyle}
                                />
                            </View>
                            :
                            <View>
                                <MyIcons.Ionicons name="notifications-outline" size={24} />
                            </View>
                    ),
                }}
            />
            <Tab.Screen
                name={ScreensName.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                        <View>
                        <View style={styles.myIconView}>
                            <MyIcons.AntDesign name="user" size={24} />
                        </View>
                        <MyText
                            text="Activity"
                            textAlign="center"
                            fontFamily="SEMI_BOLD"
                            style={styles.MyFocusedLabelStyle}
                        />
                    </View>
                            :
                            <View>
                            <MyIcons.AntDesign name="user" size={24} />
                            </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs;
