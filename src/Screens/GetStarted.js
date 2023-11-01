import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/space";
import TouchableButton from "../../components/TouchableButton";
import CustomTextInput from "../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";

const GetStarted = ({ navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#2C14DD", gap: 10 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text style={{ fontFamily: "inter", fontSize: 24, fontWeight: "700", color: "white" }}>Get started</Text>
                    <Text style={{ fontFamily: "inter", fontSize: 12, color: "white" }}>Get most out of your Brees account</Text>
                </View>
                <TouchableButton title={"Skip"} textStyle={{ fontSize: 14, color: 'white', fontWeight: 500 }} containerStyle={{ width: 91, height: 33, alignSelf: "flex-start" }} internalViewBGColor={{ backgroundColor: "rgba(255,255,255,0.15)" }} onClick={() => { navigation.navigate("SignUp"); }} />
            </View>
            <View style={{ flex: 9, justifyContent: "space-between", gap: 20 }}>

                <View style={{ flex: 1, }} onStartShouldSetResponder={() => navigation.navigate("VerifyEmail")}>
                    <View style={{ backgroundColor: "#432DEC", height: "100%", borderRadius: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5 }}>
                        <View style={{ flex: 2, paddingLeft: 15 }}>
                            <Text style={{ fontFamily: "inter", fontSize: 14, fontWeight: 700, color: "white" }}>Verify your email address</Text>
                            <Spacer height={10} />
                            <Text style={{ fontFamily: "inter", fontSize: 12, color: "white" }}>This is the bank account we would track and manage your spendings</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: "flex-end", overflow: "hidden" }}>
                            <Image source={require("../../assets/images/verifyEmail.png")} style={{
                                height: 124.73,
                                width: 124.73,

                            }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ backgroundColor: "#432DEC", height: "100%", borderRadius: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5 }}>
                        <View style={{ flex: 2, paddingLeft: 15 }}>
                            <Text style={{ fontFamily: "inter", fontSize: 14, fontWeight: 700, color: "white" }}>Connect your bank account</Text>
                            <Spacer height={10} />
                            <Text style={{ fontFamily: "inter", fontSize: 12, color: "white" }}>This is the bank account we would track and manage your spendings</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: "flex-end", overflow: "hidden" }}>
                            <Image source={require("../../assets/images/connectBank.png")} style={{
                                height: 124.73,
                                width: 124.73,

                            }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ backgroundColor: "#432DEC", height: "100%", borderRadius: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5 }}>
                        <View style={{ flex: 2, paddingLeft: 15 }}>
                            <Text style={{ fontFamily: "inter", fontSize: 14, fontWeight: 700, color: "white" }}>Setup a security pin</Text>
                            <Spacer height={10} />
                            <Text style={{ fontFamily: "inter", fontSize: 12, color: "white" }}>This is the bank account we would track and manage your spendings</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: "flex-end", overflow: "hidden" }}>
                            <Image source={require("../../assets/images/setSecurityPin.png")} style={{
                                height: 124.73,
                                width: 124.73,

                            }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ backgroundColor: "#432DEC", height: "100%", borderRadius: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5 }}>
                        <View style={{ flex: 2, paddingLeft: 15 }}>
                            <Text style={{ fontFamily: "inter", fontSize: 14, fontWeight: 700, color: "white" }}>Tell us more about you</Text>
                            <Spacer height={10} />
                            <Text style={{ fontFamily: "inter", fontSize: 12, color: "white" }}>This is the bank account we would track and manage your spendings</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: "flex-end", overflow: "hidden" }}>
                            <Image source={require("../../assets/images/aboutYourself.png")} style={{
                                height: 124.73,
                                width: 124.73,

                            }} />
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default GetStarted;
