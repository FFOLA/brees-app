import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";
import CustomIcon from "../../components/icon";
import Swiper from "react-native-swiper";
import { CommonActions } from "@react-navigation/native";

const SortTransactions = ({ navigation }) => {

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
            <View style={{ backgroundColor: "#F5F7FF", justifyContent: "flex-start", alignItems: "center", paddingTop: 30, }}>
                <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Sort your transactions</Text>
                {/* <Text>{slide + 1} of {total}</Text> */}
                <Spacer height={2} />
                <TouchableOpacity style={{ position: "absolute", top: 30, left: 0 }} onPress={() => { navigation.navigate("SingleAccount") }}>
                    <Image source={require("../../../assets/images/back.png")} style={{
                        height: 32, width: 32,
                    }} />
                </TouchableOpacity>
            </View>
            <Spacer height={32} />
            <Swiper
                loop={false}
                renderPagination={renderPagination}
                showsPagination={true}
            >
                {data.map((item) => {
                    return (
                        <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }} style={{}} key={item.balance} >

                            <View style={{ backgroundColor: "#F5F7FF", justifyContent: "flex-start", alignItems: "center", }}>
                                <Card style={{ position: "absolute", top: 16, width: "80%", borderRadius: 24, height: 184 }}>
                                </Card>
                                <Card style={{ position: "absolute", top: 8, width: "90%", borderRadius: 24, height: 184 }}>

                                </Card>
                                <Card style={{ borderRadius: 24, height: 184, borderColor: "#2C14DD", width: "95%" }}>
                                    <Text style={{ fontSize: 10, fontFamily: "Inter-Regular" }}>Transaction Details</Text>
                                    <Spacer height={12} />
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12 }}>
                                            <Image style={{ width: 37, height: 37, borderRadius: 8, }} source={require("../../../assets/images/SortTransaction/two.png")} />
                                            <View>
                                                <Text style={{ fontSize: 14, fontFamily: "Inter-Medium" }}>Kuda Bank</Text>
                                                <Spacer height={4} />
                                                <Text style={{ fontSize: 10, fontFamily: "Inter-Medium" }}>2175836514</Text>
                                            </View>

                                        </View>
                                        <View style={{ alignItems: "flex-end" }}>
                                            <Text style={{ fontSize: 14, fontFamily: "Inter-Medium", textAlign: "left" }}>N12,000.00</Text>
                                            <Spacer height={4} />
                                            <Text style={{ fontSize: 10, fontFamily: "Inter-Medium", textAlign: 'left' }}>Sep 01 at 2:24 PM</Text>
                                        </View>
                                    </View>
                                    <Spacer height={24} />
                                    <Text style={{ fontSize: 10, fontFamily: "Inter-Regular" }}>Transaction Remark</Text>
                                    <Spacer height={8} />
                                    <Text style={{ fontSize: 14, fontFamily: "Inter-SemiBold", color: "#212325" }}>Mc Loc Pos Prch-2134555666--Funds & Electronic T La Lang-</Text>
                                </Card>
                            </View>
                            <Spacer height={40} />
                            <Text style={{ textAlign: "center" }}>Does this category match the transaction</Text>
                            <Spacer height={16} />
                            <View style={{ backgroundColor: "#F5F7FF", justifyContent: "flex-start", alignItems: "center", }}>
                                <Image style={{ position: "absolute", top: 24, width: "75%", height: 300, borderRadius: 32, }} source={require("../../../assets/images/SortTransaction/two.png")} />
                                <Image style={{ position: "absolute", top: 12, width: "85%", height: 300, zIndex: 2, borderRadius: 32, }} source={require("../../../assets/images/SortTransaction/one.png")} />
                                <Card style={{ borderRadius: 32, height: 300, width: "90%", zIndex: 2, alignItems: "center", paddingTop: 30 }}>
                                    <Image style={{ width: 48, height: 48, alignSelf: "center" }} source={require("../../../assets/images/SortTransaction/utilities.png")} />
                                    <Spacer height={12} />
                                    <Text style={{ textAlign: "center", fontFamily: "Inter", fontWeight: "bold", color: "#0E0646", fontSize: 24 }}>Utilities</Text>
                                    <Spacer height={32} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 32 }}>
                                        <View style={{ height: 34, width: 73, justifyContent: "center", alignItems: "center", backgroundColor: "#E5F9FE", borderRadius: 14 }}>
                                            <Text style={{ textAlign: "center", color: "#0093B9", fontFamily: 'Inter-SemiBold', fontSize: 12 }}>Lawma</Text>
                                        </View>
                                        <View style={{ height: 34, width: 73, justifyContent: "center", alignItems: "center", backgroundColor: "#E5F9FE", borderRadius: 14 }}>
                                            <Text style={{ textAlign: "center", color: "#0093B9", fontFamily: 'Inter-SemiBold', fontSize: 12 }}>Power</Text>
                                        </View>

                                    </View>
                                    <Spacer height={24} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 32 }}>
                                        <View style={{ height: 34, width: 73, justifyContent: "center", alignItems: "center", backgroundColor: "#E5F9FE", borderRadius: 14 }}>
                                            <Text style={{ textAlign: "center", color: "#0093B9", fontFamily: 'Inter-SemiBold', fontSize: 12 }}>Lawma</Text>
                                        </View>
                                        <View style={{ height: 34, width: 73, justifyContent: "center", alignItems: "center", backgroundColor: "#E5F9FE", borderRadius: 14 }}>
                                            <Text style={{ textAlign: "center", color: "#0093B9", fontFamily: 'Inter-SemiBold', fontSize: 12 }}>Power</Text>
                                        </View>

                                    </View>
                                </Card>
                            </View>
                            <Spacer height={40} />
                            <View style={{ flexDirection: "row", gap: 16, justifyContent: "center" }}>
                                <TouchableOpacity onPress={() => { navigation.navigate("SuccessSort") }}>
                                    <Image style={{ width: 56, height: 56, }} source={require("../../../assets/images/SortTransaction/cancel.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { navigation.navigate("SuccessSort") }}>
                                    <Image style={{ width: 56, height: 56, }} source={require("../../../assets/images/SortTransaction/heart.png")} />
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    )

                })}
            </Swiper>
        </View >
    )
}

export default SortTransactions;

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
