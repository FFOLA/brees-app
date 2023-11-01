import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Button, Modal, Card, CheckBox } from "@ui-kitten/components";
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";
import CustomIcon from "../../components/icon";
import Swiper from "react-native-swiper";
import { CommonActions } from "@react-navigation/native";
import { SelectCountry } from 'react-native-element-dropdown';
import { } from '@ui-kitten/components';
import * as Progress from 'react-native-progress';

const OneBudget = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
        { accountname: 'PiggyVest', balance: 150 },
        { accountname: 'PiggyVest', balance: 105 },
        { accountname: 'PiggyVest', balance: 1150 },
        { accountname: 'PiggyVest', balance: 1250 },
    ];
    const [slide, setSlide] = React.useState(0);
    const [country, setCountry] = useState('1');
    const [visible, setVisible] = React.useState(false);

    const local_data = [
        {
            value: '1',
            lable: 'Eating out',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
        {
            value: '2',
            lable: 'Eating in',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
        {
            value: '3',
            lable: 'Eating anywhere',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
        {
            value: '4',
            lable: 'Wo no stress me',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
        {
            value: '5',
            lable: 'Chop life',
            image: {
                uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
            },
        },
    ];
    const total = data.length;

    const renderPagination = (index, total, context) => {
        return (
            <View style={[styles.paginationStyle]}>
                <Text style={{ textAlign: "center" }}>{index + 1} of {total}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#210EA4", }} edges={['right', 'left', 'top']}>
            <View style={{ flex: 1, flexGrow: 1, height: "100%" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ backgroundColor: "#210EA4", }}>
                        <View style={{ justifyContent: "flex-start", alignItems: "center", minHeight: 44, }}>
                            <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#F6F7F8", textAlign: "center" }}>Budget</Text>
                            <TouchableOpacity style={{ position: "absolute", top: -1, left: 20, height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#3B23EB", borderRadius: 16 }} onPress={() => { navigation.navigate("BudgetHome") }}>
                                <CustomIcon name="arrow-ios-back" color="#DACDFE" size="20" />
                            </TouchableOpacity>
                        </View>
                        <Spacer height={32} />
                        <View style={{ alignSelf: "flex-start", paddingLeft: 20 }}>
                            <Text style={{ fontFamily: "Inter-bold", fontSize: 24, color: "#FFFFFF", textAlign: "left" }}>Monthly Budget</Text>
                            <Spacer height={8} />
                            <Text style={{ fontFamily: "Inter-medium", fontSize: 13, color: "#FFFFFF90", textAlign: "left" }}>You’ve spent <View style={{ height: 20, width: 45, backgroundColor: "#FFFFFF24", borderRadius: 10, justifyContent: "center", alignItems: "center", paddingBottom: 0 }}><Text>$392</Text></View> for the past 7 days</Text>
                        </View>

                    </View>
                    <Spacer height={32} />
                    <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "#F5F7FF", borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 20, paddingTop: 25 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ textAlign: "right" }}>What’s left to spend</Text>
                            <Text>N18,241</Text>
                        </View>
                        <Spacer height={24} />
                        <View style={{ height: 152, backgroundColor: "white", padding: 16, borderRadius: 16 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ textAlign: "right" }}>You’ve already spent</Text>
                                <Text>Spend Limit per Day</Text>
                            </View>
                            <Spacer height={10} />
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ textAlign: "right" }}>N0</Text>
                                <Text>$400</Text>
                            </View>
                            <Spacer height={10} />
                            <Progress.Bar progress={0.01} width={null} color="#A0070A" borderWidth={0.1} unfilledColor="rgba(50, 252, 101,0.1)" borderRadius={0} height={12} />
                            <Spacer height={10} />
                            <Text>😘 Cool! let's keep your expense below the budget</Text>
                        </View>
                        <Spacer height={24} />
                        <Text style={{ color: "black", fontSize: 14, fontWeight: 500 }}>Budget Transactions</Text>
                        <Spacer height={16} />
                        <View style={{ padding: 20, gap: 10, backgroundColor: "white", borderRadius: 16, }}>
                            {data.map((item) => {
                                return (
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 10 }} key={item.balance}>
                                        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                                            <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                        </View>
                                        <View style={{ width: "70%" }}>
                                            <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "black", textAlign: "left", lineHeight: 15 }}>John Ogaga</Text>
                                            <Spacer height={5} />
                                            <Text style={{ fontFamily: "inter", fontSize: 12, color: "black", textAlign: "left", color: "black", lineHeight: 16 }}>Zenith Bank 12:03 AM</Text>
                                        </View>
                                        <Text style={{ marginLeft: "auto", color: "#05EF40", }}>+N20,983</Text>

                                    </TouchableOpacity>
                                    // <Spacer height={10} />
                                )

                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>


        </SafeAreaView >
    )
}

export default OneBudget;

const styles = StyleSheet.create({
    paginationStyle: {
        position: 'absolute',
        top: -30,
        right: "45%",
        alignItems: "center"
    },
    paginationText: {
        fontSize: 20
    },
    dropdown: {
        margin: 16,
        height: 50,
        width: 150,
        backgroundColor: '#EEEEEE',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 8,
        color: "#6F7FAF"
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})
