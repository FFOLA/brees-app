import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";

const Accounts = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
    ];

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FF" }} edges={['right', 'left', 'top']}>
            <View style={{ backgroundColor: "#F5F7FF", justifyContent: "flex-start", alignItems: "center", }}>
                <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Accounts</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("dashboard") }} style={{ position: "absolute", top: 0, left: 0 }}>
                    <Image source={require("../../../assets/images/back.png")} style={{
                        height: 32, width: 32
                    }} />
                </TouchableOpacity>
            </View>
            <Spacer height={"10%"} />
            <View style={{ backgroundColor: "#F5F7FF" }}>
                <Text style={{ fontFamily: "Inter", fontSize: 14, color: "#240F51", textAlign: "center" }}>Your available balance is</Text>
                <Text style={{ fontFamily: "Inter", fontSize: 36, color: "#240F51", textAlign: "center", fontWeight: "bold" }}>N20,983</Text>
            </View>
            <Spacer height={"8%"} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {data.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("SingleAccount")} key={item.balance}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, height: 72, paddingHorizontal: 10, borderBottomWidth: 0.2, borderBottomColor: "rgba(0,0,0,0.1)", marginVertical: 5 }}>
                                <View style={{ height: 48, width: 48, borderRadius: 10, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                                    <Image source={require("../../../assets/images/Accounts/uba.png")} style={{
                                        height: "100%", width: "100%", position: "absolute"
                                    }} />
                                </View>
                                <View style={{ width: "70%" }}>
                                    <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "black", textAlign: "left", color: "black", lineHeight: 15 }}>John Ogaga</Text>
                                </View>
                                <Text style={{ marginLeft: "auto", color: "black", }}>+N20,983</Text>

                            </View>
                        </TouchableOpacity>
                    )

                })}
            </ScrollView>
            <TouchableButton title={"+ Add new account"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, alignSelf: "center" }} onPress={() => {
                navigation.navigate("ForgotPasswordSent");
            }} />
        </SafeAreaView>
    )
}

export default Accounts;
