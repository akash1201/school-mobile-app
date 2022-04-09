//react components
import React from 'react';
import { View, Image, Share, Alert, TouchableOpacity } from 'react-native';
//custom components
import MyText from '../../components/MyText/MyText';
import IconButton from '../../components/IconButton/IconButton';
import DrawerItems from '../../components/DrawerItems/DrawerItems';
//styles
import { styles } from "./CustomDrawerStyle";
//global
import { MyIcons, ScreensName } from '../../global';


const CustomDrawer = ({ navigation }) => {

    //function:navigation function
    const cancelDrawer = () => navigation?.closeDrawer();
    const gotoProfile = () => navigation?.navigate(ScreensName.PROFILE);
    const gotoChatMember = () => navigation?.navigate(ScreensName.CHAT_MEMBER);
    const gotoSettings = () => navigation?.navigate(ScreensName.SETTINGS);
    const gotoEditProfile = () => navigation?.navigate(ScreensName.EDIT_PROFILE);
    const gotoSearchFriends = () => navigation?.navigate(ScreensName.SEARCHFRIENDS);
    const gotoSwipeUp = () => navigation?.navigate(ScreensName.SWIPE_UP);
    const gotoContacts = () => navigation?.navigate(ScreensName.CONTACTS);
    const shareApp = async () => {
        try {
            const result = await Share.share({
                message: "link of app here"
            })
        } catch (error) {
            Alert.alert(error.message)
        }
    }

    //UI
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.ProfileView}>
                    <TouchableOpacity
                        onPress={() => gotoProfile()}
                        style={styles.ImageView}>
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" }}
                            style={styles.ImageStyle}
                        />
                    </TouchableOpacity>
                    <View style={styles.ProfileDetailView}>
                        <MyText
                            text="John Doe"
                            fontFamily="BOLD"
                            fontSize={18}
                        />
                        <MyText
                            text="johndoe007"
                        />
                        <View style={styles.IconView}>
                            <IconButton
                                Icon={<MyIcons.FetherIcon name="edit" size={18} />}
                                onPress={() => gotoEditProfile()}
                            />
                            <IconButton
                                Icon={<MyIcons.MaterialIcons name="logout" size={18} />}
                            />
                        </View>
                    </View>
                </View>
                <DrawerItems
                    Title="Add Friend"
                    Icon={<MyIcons.MaterialIcons name="connect-without-contact" size={22} />}
                    onPress={() => gotoSwipeUp()}
                />
                <DrawerItems
                    Title="Chat"
                    Icon={<MyIcons.Ionicons name="chatbubble-outline" size={22} />}
                    onPress={() => gotoChatMember()}
                />
                <DrawerItems
                    Title="Search Friends"
                    Icon={<MyIcons.MaterialCommunityIcons name="account-search-outline" size={22} />}
                    onPress={() => gotoSearchFriends()}

                />
                <DrawerItems
                    Title="Contacts"
                    Icon={<MyIcons.AntDesign name="contacts" size={22} />}
                    onPress={() => gotoContacts()}
                />
                <DrawerItems
                    Title="Share app"
                    Icon={<MyIcons.AntDesign name="sharealt" size={22} />}
                    onPress={() => shareApp()}
                />
                <DrawerItems
                    Title="Settings"
                    Icon={<MyIcons.AntDesign name="setting" size={22} />}
                    onPress={() => gotoSettings()}
                />
                <DrawerItems
                    Title="Cancel"
                    Icon={<MyIcons.FetherIcon name="x-circle" size={22} />}
                    onPress={() => cancelDrawer()}
                />
            </View>
        </View>
    )
}

export default CustomDrawer;
