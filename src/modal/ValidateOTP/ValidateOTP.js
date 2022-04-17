//react components
import React, {useRef, useState} from 'react';
import {Modal, TouchableOpacity, View, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//custom components
import MyButton from '../../components/MyButton/MyButton';
import MyText from '../../components/MyText/MyText';
import MyTextInput from '../../components/MyTextInput/MyTextInput';
//global
import {Colors, ScreensName} from '../../global';
import FetherIcon from '../../global/MyIcons';
//styles
import {styles} from './ValidateOTPStyle';

const ValidateOTP = ({visible, setVisibility}) => {
  // ref
  const FirstOtpnumberRef = useRef();
  const SecondOtpnumberRef = useRef();
  const ThiredOtpnumberRef = useRef();
  const FourthOtpnumberRef = useRef();
  const FifthOtpnumberRedf = useRef();
  const SixthOtpnumberRef = useRef();

  // state
  const [firstOtp, setFirstOtp] = useState('');
  const [secondOtp, setSecondOtp] = useState('');
  const [thiredOtp, setThiredOtp] = useState('');
  const [fourthOtp, setFourthOtp] = useState('');
  const [fifthOtp, setFifthOtp] = useState('');
  const [sixthOtp, setSixthOtp] = useState('');

  //variables
  const navigation = useNavigation();
  //function : imp function
  const gotoForgotPassword = () => {
    closeModal();
    navigation.navigate(ScreensName.SIGN_IN);
  };
  //function :modal function
  const closeModal = () => {
    setVisibility(false);
  };

  const handleOtpValidation = text => {
    if (text.length == 1) {
      SecondOtpnumberRef.current.focus();
    } else if (text.length == 2) {
      ThiredOtpnumberRef.current.focus();
    } else if (text.length == 3) {
      FourthOtpnumberRef.current.focus();
    } else if (text.length == 4) {
      FifthOtpnumberRedf.current.focus();
    } else if (text.length == 5) {
      SixthOtpnumberRef.current.focus();
    }
    setFirstOtp(text);
  };

  //Ui
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType="fade"
      transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          <MyText
            text="Verification Code"
            fontFamily="BOLD"
            fontSize={20}
            textAlign="center"
          />
          <MyText
            text="Please enter verification code recieved in your registered contact number."
            fontFamily="REGULAR"
            textAlign="center"
            style={{marginBottom: 20}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TextInput
              ref={FirstOtpnumberRef}
              style={styles.CodeTextInput}
              value={firstOtp}
              onChangeText={handleOtpValidation}
              // onSubmitEditing={() => SecondOtpnumberRef.current.focus()}
              maxLength={1}
            />
            <TextInput
              ref={SecondOtpnumberRef}
              value={secondOtp}
              onChangeText={handleOtpValidation}
              // onSubmitEditing={() => ThiredOtpnumberRef.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
            />
            <TextInput
              TextInputRef={ThiredOtpnumberRef}
              value={thiredOtp}
              onChangeText={handleOtpValidation}
              // onSubmitEditing={() => FourthOtpnumberRef.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
            />
            <TextInput
              TextInputRef={FourthOtpnumberRef}
              value={fourthOtp}
              onChangeText={handleOtpValidation}
              // onSubmitEditing={() => FifthOtpnumberRedf.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
            />
            <TextInput
              TextInputRef={FifthOtpnumberRedf}
              value={fifthOtp}
              onChangeText={handleOtpValidation}
              // onSubmitEditing={() => SixthOtpnumberRef.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
            />
            <TextInput
              TextInputRef={SixthOtpnumberRef}
              value={sixthOtp}
              onChangeText={handleOtpValidation}
              style={styles.CodeTextInput}
              maxLength={1}
            />
          </View>
          <MyButton
            Title="Verify otp"
            backgroundColor={Colors.THEME_COLOR}
            width="70%"
            style={{marginVertical: 20}}
            onPress={() => gotoForgotPassword()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ValidateOTP;
