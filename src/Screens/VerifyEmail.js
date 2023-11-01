import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/space";
import TouchableButton from "../../components/TouchableButton";
import CustomTextInput from "../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { CheckBox } from "@ui-kitten/components";

const VerifyEmail = ({ navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#F5F7FF" }}>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: "10%" }}>
                <Image source={require("../../assets/images/envelope.png")} style={{
                    height: 256,
                    width: 248,

                }} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", paddingTop: "5%" }}>
                <View>
                    <Text style={{ fontWeight: "700", fontSize: 24, textAlign: "center" }}>We have sent an email verification link to your email</Text>
                    <Text style={{ fontFamily: "inter", fontSize: 14, textAlign: "center",padding:40 }}>Check your email test@test.com and click the link to verify your email address</Text>
                </View>
                <View>
                    <TouchableButton title={"Open Email"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, }} onPress={() => {
                        navigation.navigate("");
                    }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VerifyEmail;
