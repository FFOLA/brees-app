import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";
import { CommonActions } from '@react-navigation/native';
import CustomIcon from "../../components/icon";

const SingleAccount = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
    ];

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FF" }} edges={['right', 'left', 'top']}>
            <ScrollView>
                <View style={{ backgroundColor: "#F5F7FF", justifyContent: "flex-start", alignItems: "center", }}>
                    <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>My Account</Text>
                    <TouchableOpacity style={{ position: "absolute", top: 0, left: 0 }} onPress={() => { navigation.navigate("accounts") }}>
                        <Image source={require("../../../assets/images/back.png")} style={{
                            height: 32, width: 32,
                        }} />
                    </TouchableOpacity>
                </View>
                <Spacer height={32} />
                <Image source={require("../../../assets/images/Accounts/uba.png")} style={{
                    height: 48, width: 48, alignSelf: "center"
                }} />
                <Spacer height={16} />
                <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#000000", textAlign: "center", fontWeight: "600" }}>Kuda Bank</Text>
                <Spacer height={40} />
                <View style={{ height: 192, backgroundColor: "white", borderRadius: 16, padding: 20, paddingTop: 30, gap: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, fontWeight: 300, fontFamily: "Inter", }}>Type of account</Text>
                        <Text>Savings</Text>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, fontWeight: 300, fontFamily: "Inter", }}>Account No</Text>
                        <Text>1234567890</Text>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, fontWeight: 300, fontFamily: "Inter", }}>Avaliable Balance</Text>
                        <Text style={{ fontSize: 14, color: "#1B7A00", fontFamily: "Inter", fontWeight: "bold" }}>N12,000.00</Text>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 14, fontWeight: 300, fontFamily: "Inter", }}>Date added</Text>
                        <Text>15/05/20, 10:03 AM</Text>

                    </View>
                </View>
                <Spacer height={24} />
                <View style={{ padding: 20, gap: 10, backgroundColor: "white", borderRadius: 16, }}>
                    <Text style={{ color: "black", fontSize: 14, fontWeight: 500 }}>Recent Transactions</Text>
                    {data.map((item) => {
                        return (
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 10 }} key={item.balance}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                                    <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                </View>
                                <View style={{ width: "70%" }}>
                                    <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "black", textAlign: "left", lineHeight: 15 }}>John Ogaga</Text>
                                    <Spacer height={5} />
                                    <Text style={{ fontFamily: "inter", fontSize: 12, color: "black", textAlign: "left", color: "black", lineHeight: 16 }}>Zenith Bank 12:03 AM</Text>
                                </View>
                                <Text style={{ marginLeft: "auto", color: "#05EF40", }}>+N20,983</Text>

                            </View>
                            // <Spacer height={10} />
                        )

                    })}
                    <TouchableOpacity style={{ backgroundColor: "white", height: 20, width: 20, borderRadius: 15, justifyContent: "center", alignItems: "center", position: "absolute", right: 20, top: 20 }} onPress={() => { navigation.navigate("SortTransactions") }}>
                        <CustomIcon name="chevron-right" color="#131313" size="24" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default SingleAccount;
