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

const SuccessSort = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
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
        <View style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FF" }} edges={['right', 'left', 'top']}>
            <ImageBackground style={{ flex: 1.3 }} source={require("../../../assets/images/SuccessSort/Confetti.png")} resizeMode="cover" imageStyle={{ opacity: 1, height: "100%", width: "100%", zIndex: 2 }} >
                <View style={{ borderRadius: 17.25, height: 133, borderColor: "#2C14DD", width: 240.84, position: "absolute", borderWidth: 1, paddingHorizontal: 15, paddingTop: 15, top: "30%", left: "5%", rotation: 14.21, transform: [{ rotate: '-14.21deg' }], backgroundColor: "white" }}>
                    <Text style={{ fontSize: 7.19, fontFamily: "Inter-Regular" }}>Transaction Details</Text>
                    <Spacer height={8.5} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 8.5 }}>
                            <Image style={{ width: 37, height: 37, borderRadius: 8, }} source={require("../../../assets/images/SortTransaction/two.png")} />
                            <View>
                                <Text style={{ fontSize: 10.06, fontFamily: "Inter-Medium" }}>Kuda Bank</Text>
                                <Spacer height={4} />
                                <Text style={{ fontSize: 7.19, fontFamily: "Inter-Medium" }}>2175836514</Text>
                            </View>

                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 10.06, fontFamily: "Inter-Medium", textAlign: "left" }}>N12,000.00</Text>
                            <Spacer height={4} />
                            <Text style={{ fontSize: 7.19, fontFamily: "Inter-Medium", textAlign: 'left' }}>Sep 01 at 2:24 PM</Text>
                        </View>
                    </View>
                    <Spacer height={8.5} />
                    <Text style={{ fontSize: 7.19, fontFamily: "Inter-Regular" }}>Transaction Remark</Text>
                    <Spacer height={5} />
                    <Text style={{ fontSize: 10.06, fontFamily: "Inter-SemiBold", color: "#212325" }}>Mc Loc Pos Prch-2134555666--Funds & Electronic T La Lang-</Text>
                </View>
                <View style={{ borderRadius: 28.4, height: 164.32, width: 170.54, position: "absolute", paddingHorizontal: 15, paddingTop: 15, top: "45%", left: "48%", rotation: 13.73, transform: [{ rotate: '13.73deg' }], backgroundColor: "white", alignItems: "center" }}>
                    <Spacer height={10} />
                    <Image style={{ width: 56.75, height: 56.75, alignSelf: "center" }} source={require("../../../assets/images/SortTransaction/utilities.png")} />
                    <Spacer height={20} />
                    <Text style={{ fontFamily: "Inter-Bold", fontSize: 18.89, color: "#131313", textAlign: "center" }}>Utilities</Text>
                </View>
            </ImageBackground>
            <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text style={{ fontFamily: "Inter-Bold", fontSize: 24, color: "#2C14DD", textAlign: "center" }}>Great job!!</Text>
                    <Spacer height={16} />
                    <Text style={{ fontFamily: "Inter-Medium", fontSize: 16, color: "#131313", textAlign: "center" }}>You matched all 20 transactions, you did great John!</Text>

                </View>
                <View>
                    <TouchableButton title={"Keep Swiping"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, alignSelf: "center" }} onPress={() => {
                        navigation.navigate("ForgotPasswordSent");
                    }} />
                </View>
            </View>
        </View >
    )
}

export default SuccessSort;

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
