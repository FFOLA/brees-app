import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";
import CustomIcon from "../../components/icon";
import Swiper from "react-native-swiper";
import { CommonActions } from "@react-navigation/native";

const ListNotifications = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000, date: "2022-02-02 10:54" },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
        { accountname: 'PiggyVest', balance: 100 },
    ];
    const [slide, setSlide] = React.useState(0);
    const total = data.length;

    const renderPagination = (index, total, context) => {
        return (
            <View style={[styles.paginationStyle]}>
                <Text style={{ textAlign: "center" }}>{index + 1} of {total}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F7FF", paddingTop: 20 }} edges={['right', 'left', 'top']}>
            <View style={{ justifyContent: "flex-start", alignItems: "center", minHeight: 44, }}>
                <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Notification</Text>
                <TouchableOpacity style={{ position: "absolute", top: -5, left: 20 }} onPress={() => { navigation.navigate("dashboard") }}>
                    <Image source={require("../../../assets/images/back.png")} style={{
                        height: 32, width: 32,
                    }} />
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ position: "absolute", top: -5, right: 20 }} onPress={() => { navigation.navigate("accounts") }}>
                    <Image source={require("../../../assets/images/back.png")} style={{
                        height: 32, width: 32,
                    }} />
                </TouchableOpacity> */}
            </View>
            <Spacer height={16} />
            <View style={{ backgroundColor: "#FFFFFF", justifyContent: "flex-start", alignItems: "flex-start", borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 20, flex: 1 }}>
                <ScrollView style={{ width: "100%", paddingVertical: 32 }}>
                    <Text> Today</Text>
                    <Spacer height={17} />
                    <View style={{ height: 90, backgroundColor: "#EDFAF2", borderRadius: 16, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, gap: 10 }}>
                        <View style={{ height: 51, width: 51, backgroundColor: "#2C14DD", borderRadius: 10, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                            <Image source={require("../../../assets/images/Dashboard/categorizetransactions.png")} style={{
                                height: 32, width: 32, borderRadius: 26
                            }} />
                        </View>
                        <View style={{ width: "75%" }}>
                            <Text style={{ fontFamily: "inter-medium", fontWeight: 700, fontSize: 14, textAlign: "left", color: "#131313", lineHeight: 15 }}>Cashback 50%</Text>
                            <Spacer height={4} />
                            <Text style={{ fontFamily: "inter-Medium", fontSize: 12, color: "#131313", textAlign: "left", lineHeight: 16 }}>Get 50% cashback for Pizza Hut</Text>
                            <Spacer height={8} />
                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                <Text style={{ fontFamily: "inter-medium", fontSize: 14, color: "#2C14DD", textAlign: "left", lineHeight: 16 }}>Claim it now</Text>
                                <CustomIcon name="chevron-right" color="#2C14DD" size="24" />

                            </View>
                        </View>

                    </View>
                    <Spacer height={24} />
                    <Text> Yesterday</Text>
                    <Spacer height={17} />
                    <View style={{ width: "100%", gap: 24 }}>
                        {data.map((item) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} key={item.balance}>
                                    <View style={{ height: 48, width: 48, borderRadius: 10, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, }}>
                                        <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                    </View>
                                    <View style={{ flex: 7.5, }}>
                                        <Text style={{ fontFamily: "inter-medium", fontSize: 14, textAlign: "left", color: "#131313", lineHeight: 15 }}>Shopping budget has exceeds..</Text>
                                        <Spacer height={5} />
                                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "#8F92A1", textAlign: "left", lineHeight: 16 }}>Your Utilities budget has exceeds....</Text>
                                    </View>
                                    <View style={{ flex: 2, }}>
                                        <Text style={{ color: "#8F92A1", }}>promo</Text>
                                        <Spacer height={5} />
                                        <Text style={{ color: "#8F92A1", }}>3:40 PM</Text>

                                    </View>

                                    {/* <Spacer height={24} /> */}
                                </View>
                            )

                        })}
                    </View>
                    <Spacer height={24} />
                    <Text> Last 7 days</Text>
                    <Spacer height={17} />
                    <View style={{ width: "100%", gap: 24 }}>
                        {data.map((item) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} key={item.balance}>
                                    <View style={{ height: 48, width: 48, borderRadius: 10, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, }}>
                                        <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                    </View>
                                    <View style={{ flex: 7.5, }}>
                                        <Text style={{ fontFamily: "inter-medium", fontSize: 14, textAlign: "left", color: "#131313", lineHeight: 15 }}>Shopping budget has exceeds..</Text>
                                        <Spacer height={5} />
                                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "#8F92A1", textAlign: "left", lineHeight: 16 }}>Your Utilities budget has exceeds....</Text>
                                    </View>
                                    <View style={{ flex: 2, }}>
                                        <Text style={{ color: "#8F92A1", }}>promo</Text>
                                        <Spacer height={5} />
                                        <Text style={{ color: "#8F92A1", }}>3:40 PM</Text>

                                    </View>

                                    {/* <Spacer height={24} /> */}
                                </View>
                            )

                        })}
                    </View>
                    <View>
                        <Spacer height={100} />
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView >
    )
}

export default ListNotifications;

const styles = StyleSheet.create({
    paginationStyle: {
        position: 'absolute',
        top: -30,
        right: "45%",
        alignItems: "center"
    },
    paginationText: {
        fontSize: 20
    }
})
