import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native"
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";

const OnBoardingScreen3 = ({ setSlide, navigation }) => {
    return (
        <View style={Styles.container}>
            <View style={{ flex: 1, }}>
                <TouchableButton title={"Skip"} textStyle={{ fontSize: 17, color: 'white' }} containerStyle={{ marginLeft: 270, top: 70, width: "30%" }} internalViewBGColor={{ backgroundColor: "rgba(255,255,255,0.25)" }} onClick={() => { navigation.navigate("SignUp"); }} />
            </View>
            <View style={{ flex: 8, }}>
                <View style={Styles.top}>
                    <Image source={require("../../../assets/images/OnBoardingScreen3.png")} style={{
                        height: 400,
                        width: 350,
                        top: -30,
                        left: -20
                    }} />
                </View>
                <View style={Styles.lower}>
                    <View style={{ backgroundColor: "white", padding: 20, minWidth: "95%", maxWidth: "95%", minHeight: "50%", borderRadius: 48, alignItems: "center", paddingTop: 30, top: -40 }}>
                        <Text style={{ fontSize: 24, fontFamily: "Inter-Bold", fontWeight: 700, textAlign: "center" }}>Plan ahead and manage your money better</Text>
                        <Spacer height={20} />
                        <Text style={{ fontSize: 14, fontFamily: "Inter-Medium", textAlign: "center", maxWidth: "70%" }}>Setup your budget for each category
                            so you in control. Track categories you spend the most money on</Text>
                        <TouchableButton title={"Next"} textStyle={{ color: "white", fontSize: 16, fontWeight: '600' }} containerStyle={{ top: 125, width: "60%" }} onPress={() => { navigation.navigate("SignUp"); }} />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default OnBoardingScreen3;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C36ED',
        padding: 10,
    },
    Skip: {
        fontSize: 20, color: 'white', marginLeft: 300,
        top: 70
    },
    top: {
        alignItems: "center", justifyContent: "flex-start"
    },
    lower: {
        alignItems: 'center'
    },
})