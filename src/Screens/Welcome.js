import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/space";
import TouchableButton from "../../components/TouchableButton";
import CustomTextInput from "../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { CheckBox } from "@ui-kitten/components";

const Welcome = ({ navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#F5F7FF" }}>
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: "10%" }}>
                <Image source={require("../../assets/images/glossy.png")} style={{
                    height: 122.83,
                    width: 122.89,

                }} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", paddingTop: "5%" }}>
                <View>
                    <Text style={{ fontFamily: "inter", fontSize: 24, textAlign: "center" }}>Hi! <Text style={{ fontWeight: "700", fontSize: 24 }}>John</Text></Text>
                    <Text style={{ fontFamily: "inter", fontSize: 24, textAlign: "center" }}>Welcome to Brees</Text>
                </View>
                <View>
                    <TouchableButton title={"Let's get started"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, }} onPress={() => {
                        navigation.navigate("GetStarted");
                    }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome;
