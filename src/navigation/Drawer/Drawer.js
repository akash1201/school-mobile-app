//react components
import React from 'react';
import {
    View, Text
} from 'react-native';
//drawer navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
//global
import { ScreensName } from '../../global';
//screens
import CustomDrawer from './CustomDrawer';
import BottomTabs from '../BottomTabs/BottomTabs';
import MainStack from '../MainStack/MainStack';
import EditProfile from '../../screens/EditProfile/EditProfile';
import Settings from '../../screens/Settings/Settings';
import SwipeUp from '../../screens/SwipeUp/SwipeUp';
import Chat from '../../screens/Chat/Chat';
import ChangePassword from '../../screens/ChangePassword/ChangePassword';
import SeachFriends from '../../screens/SeachFriends/SeachFriends';
import ContactsPage from '../../screens/Contacts/ContactsPage';
import MyAccount from '../../screens/MyAccount/MyAccount';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Payment from '../../screens/Payment/Payment';

const Drawer = () => {
    //variables
    const Drawer = createDrawerNavigator();
    const screenOptions = {
        headerShown: false,
        // drawerStyle: styles.myDrawerStyle
    }
    const options = {
        swipeEnabled: false,
    };
    const initialRouteName = ScreensName.MAIN_STACK
    //function : render function
    const renderCustomDrawer = ({ navigation }) => <CustomDrawer navigation={navigation} />;

    //drawer
    return (
        <Drawer.Navigator
            screenOptions={screenOptions}
            drawerContent={renderCustomDrawer}
            initialRouteName={initialRouteName}
        >
            <Drawer.Screen options={options} name={ScreensName.MAIN_STACK} component={MainStack} />
            <Drawer.Screen name={ScreensName.DASHBOARD} component={Dashboard} />
            <Drawer.Screen name={ScreensName.PAYMENT} component={Payment} />
            {/* <Drawer.Screen name={ScreensName.SWIPE_UP} component={SwipeUp} />
            <Drawer.Screen name={ScreensName.CHAT} component={Chat} />
            <Drawer.Screen name={ScreensName.CHANGE_PASSWORD} component={ChangePassword} />
            <Drawer.Screen name={ScreensName.SEARCHFRIENDS} component={SeachFriends} />
            <Drawer.Screen name={ScreensName.CONTACTS} component={ContactsPage} />
            <Drawer.Screen name={ScreensName.MY_ACCOUNT} component={MyAccount} /> */}
        </Drawer.Navigator>

    )
}

export default Drawer;
