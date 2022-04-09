import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { ScreensName } from '../../global'

// style
import { styles } from './SplashStyle'



const Splash = ({navigation}) => {

      //useEffect
      useEffect(() => {
        setTimeout(() => {
            navigation.replace(ScreensName.SIGN_IN)
          }, 2000);
        return () => {
        }
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/image/appLogo.jpg')}
                style={styles.appLogoStyle}
            />
        </View>
    )
}

export default Splash
