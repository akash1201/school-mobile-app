// react componets
import React, { Fragment, useState } from 'react'
import { View, KeyboardAvoidingView, Platform,TouchableOpacity, Image ,} from 'react-native'
// components
import MyText from '../../components/MyText/MyText'
import MyTextInput from '../../components/MyTextInput/MyTextInput'
import MyButton from '../../components/MyButton/MyButton'
// modal
import OTPSent from '../../modal/OTPSent/OTPSent'
import ValidateOTP from '../../modal/ValidateOTP/ValidateOTP'

// package
import LinearGradient from 'react-native-linear-gradient'

// global
import { Colors, MyIcons, ScreensName } from '../../global'

// styles
import { styles } from './SignInStyle'


const SignIn = ({navigation}) => {

    const [username, setUserName] = useState("")
    const [password, setPassWord] = useState("")
    const [tcChecked, setTcChecked] = useState(false)
    const [showOTP, setShowOTP] = useState(false);
    const [showValidateOTP, setShowValidateOTP] = useState(false);
    const [email,setEmail] = useState("")
    

    // size
    const size = 24

    //function : navigation function
    const gotoSignUp = () => navigation?.navigate(ScreensName.SIGN_UP);
    const goToHomeScreen = ()=>navigation.navigate(ScreensName.HOME)

    return (
        <LinearGradient colors={[Colors.THEME_COLOR, Colors.WHITE]} style={styles.linearGradient}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"}
                style={styles.container}
            >
                <MyText
                    text={"Sign In"}
                    fontFamily={"EXTRA_BOLD"}
                    fontSize={size}
                    textAlign="center"
                    style={styles.titleStyle}
                />
                <View style={styles.mainView}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/image/appLogo.jpg')}
                            style={styles.appLogoStyle}
                        />
                    </View>
                    <View>
                        <MyTextInput
                            Title="User Id"
                            isBorder={false}
                            placeholder="Enter username"
                            keyboardType="default"
                            value={username}
                            setValue={setUserName}
                            InputIcons={<MyIcons.FetherIcon name="user" size={22} color={Colors.BLACK} />}
                        />
                        <MyTextInput
                            Title="Password"
                            isBorder={false}
                            placeholder="Enter Password"
                            keyboardType="default"
                            value={password}
                            setValue={setPassWord}
                            InputIcons={<MyIcons.FetherIcon name="user" size={22} color={Colors.BLACK} />}
                        />
                        <View style={styles.TermAndConditionsView}>
                            <TouchableOpacity>
                                <MyIcons.FetherIcon name={tcChecked ? "check-square" : "square"} size={15} />
                            </TouchableOpacity>
                            <MyText
                                text="I read and agree to"
                                fontSize={10}
                                style={{ marginHorizontal: 5 }}
                            />
                            <MyText
                                text="Terms and Conditions"
                                fontSize={10}
                                fontFamily="SEMI_BOLD"
                            />
                        </View>
                    </View>
                    <View>
                        <MyButton
                            Title={"Sign In"}
                            onPress={()=>goToHomeScreen()}
                        />
                        <MyText
                            text="Forgot Password?"
                            textAlign="center"
                            fontFamily="SEMI_BOLD"
                            fontSize={10}
                            onPress={() => setShowOTP(true)}
                            style={{ marginVertical: 10 }}
                        />
                        <MyText
                            text="Don't have an account? Sign up"
                            textAlign="center"
                            fontFamily="SEMI_BOLD"
                            fontSize={10}
                            onPress={() => gotoSignUp()}
                            style={{ marginVertical: 10 }}
                        />
                    </View>
                </View>
                {/* modal */}
                <OTPSent
                    visible={showOTP}
                    setVisibility={setShowOTP}
                    setShowValidateOTP={setShowValidateOTP}
                />
                <ValidateOTP
                    visible={showValidateOTP}
                    setVisibility={setShowValidateOTP}
                />
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default SignIn
