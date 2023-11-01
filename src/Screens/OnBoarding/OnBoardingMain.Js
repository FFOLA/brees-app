import React from "react";
import { View, StyleSheet, Text } from "react-native"
import OnBoardingScreen1 from "./OnBoardingScreen1";
import OnBoardingScreen2 from "./OnBoardingScreen2";
import OnBoardingScreen3 from "./OnBoardingScreen3";
import Swiper from "react-native-swiper"


const OnBoardingMain = ({ navigation }) => {

    const [slide, setSlide] = React.useState(0);
    return (
        <View style={Styles.container}>
            <Swiper activeDotStyle={{ height: 25, borderRadius: 40, marginBottom: 120, backgroundColor: "#2C14DD" }} dotStyle={{ marginBottom: 120 }} index={slide} loop={false}>
                <OnBoardingScreen1 navigation={navigation} setSlide={setSlide} />
                <OnBoardingScreen2 navigation={navigation} setSlide={setSlide} />
                <OnBoardingScreen3 navigation={navigation} setSlide={setSlide} />
            </Swiper>
        </View>
    )
}

export default OnBoardingMain;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})