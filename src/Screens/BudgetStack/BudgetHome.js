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

const BudgetHome = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
    ];
    const [slide, setSlide] = React.useState(0);
    const [country, setCountry] = useState('1');
    const [visible, setVisible] = React.useState(true);

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

                <View style={{ backgroundColor: "#210EA4", }}>
                    <View style={{ justifyContent: "flex-start", alignItems: "center", minHeight: 44, }}>
                        <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#F6F7F8", textAlign: "center" }}>Budget</Text>
                        {/* <TouchableOpacity style={{ position: "absolute", top: -1, left: 20, height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#3B23EB", borderRadius: 16 }} onPress={() => { navigation.navigate("AllTransactions") }}>
                            <CustomIcon name="arrow-ios-back" color="#DACDFE" size="20" />
                        </TouchableOpacity> */}
                    </View>
                    <Spacer height={32} />
                    <View style={{ alignSelf: "center" }}>
                        <Text style={{ fontFamily: "Inter-ExtraBold", fontSize: 28, color: "#FFFFFF", textAlign: "center" }}>0</Text>
                        <Spacer height={8} />
                        <Text style={{ fontFamily: "Inter-medium", fontSize: 14, color: "#FFFFFF90", textAlign: "center" }}>You have no budget</Text>
                    </View>
                    <Spacer height={32} />
                    <TouchableButton title={"+ Add a new budget"} textStyle={{ textAlign: "center", color: "#131313", fontSize: 12, fontFamily: "Inter-semibold" }} internalViewBGColor={{ flexDirection: "column", backgroundColor: "#E6E6E6" }} containerStyle={{ width: 180, height: 46, alignSelf: "center" }} onPress={() => {

                        // setVisible(true)
                        navigation.navigate("CreateBudget");
                    }} />
                    <Spacer height={43} />
                    <Image source={require("../../../assets/images/BudgetHome/Coint.png")} style={{
                        height: 102.83, width: 102.83, position: "absolute", top: 27
                    }} />
                    <Image source={require("../../../assets/images/BudgetHome/coin.png")} style={{
                        height: 102.83, width: 102.83, position: "absolute", bottom: -120, right: 0
                    }} />

                </View>
                <Spacer height={32} />
                <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "white", borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 20, paddingTop: 0, paddingBottom: 0 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 30 }}>
                        {/* <Spacer height={97} />
                        <Image source={require("../../../assets/images/BudgetHome/Piggybank.png")} style={{
                            height: 127, width: 127, borderRadius: 26
                        }} />
                        <Spacer height={24} />
                        <View style={{ alignItems: "center", paddingHorizontal: 75 }}>
                            <Text style={{ fontFamily: "Inter-bold", fontSize: 24, color: "#150B5B", textAlign: "center" }}>Welcome </Text>
                            <Spacer height={24} />
                            <Text style={{ fontFamily: "Inter-medium", fontSize: 12, color: "#150B5B75", textAlign: "center" }}>This is an overview of all your Brees account, so come back later </Text>
                            <Spacer height={24} />
                            <TouchableButton title={"+ Add a new budget"} textStyle={{ textAlign: "center", color: "white", fontSize: 12, fontFamily: "Inter-semibold" }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 180, height: 46, alignSelf: "center" }} onPress={() => {

                                // setVisible(true)
                                navigation.navigate("CreateBudget");
                            }} />

                        </View>
                        <Spacer height={24} /> */}
                        <View style={{ gap: 16, }}>
                            {data.map((item) => {
                                return (
                                    <Card style={{ borderRadius: 24, height: 171, borderColor: "#2C14DD", width: "100%", backgroundColor: "#432DEC" }} onPress={() => { navigation.navigate("OneBudget") }} key={item.balance}>
                                        <Text style={{ fontSize: 12, fontFamily: "Inter-semibold", color: "#FFFFFF" }}>Monthly Budget</Text>
                                        <Spacer height={18} />
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12 }}>
                                                <Image style={{ width: 37, height: 37, borderRadius: 8, }} source={require("../../../assets/images/SortTransaction/two.png")} />
                                                <View>
                                                    <Text style={{ fontSize: 14, fontFamily: "Inter-semibold", color: "#FFFFFF" }}>Flexing Buget</Text>
                                                    <Spacer height={4} />
                                                    <Text style={{ fontSize: 12, fontFamily: "Inter-regular", color: "#FFFFFF" }}>N140 daily</Text>
                                                </View>

                                            </View>
                                            <View style={{ alignItems: "flex-end" }}>
                                                <Text style={{ fontSize: 14, fontFamily: "Inter-bold", textAlign: "left", color: "#21F46A" }}>N12,000.00</Text>
                                            </View>
                                        </View>
                                        <Spacer height={18} />
                                        <Progress.Bar progress={0.7} width={null} height={3.89} color="#32FC65" borderWidth={0.1} unfilledColor="rgba(50, 252, 101,0.1)" />
                                        <Spacer height={18} />
                                        <Text style={{ fontSize: 11, fontFamily: "Inter-medium", color: "#FFFFFF" }}>😘 Ready to get your budget game started!!</Text>
                                    </Card>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
                {/* </ScrollView> */}

                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true} style={{ borderRadius: 24, backgroundColor: "#2C14DD", borderWidth: 0, width: 328 }}>
                        <Spacer height={28.64} />

                        <Image source={require("../../../assets/images/BudgetHome/create-new-budget-modal.png")} style={{
                            height: 149.73, width: 208, alignSelf: "center"
                        }} />
                        <Spacer height={36.64} />
                        <View style={{ alignItems: "center", alignSelf: "center" }}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 14, fontFamily: "Inter-bold" }}>Budget</Text>
                            <Spacer height={10} />
                            <Text style={{ textAlign: "center", color: "white", fontSize: 24, fontFamily: "Inter-bold" }}>Overspend no more</Text>
                            <Spacer height={10} />
                            <Text style={{ textAlign: "center", color: "white", fontSize: 14, fontFamily: "Inter-regular" }}>Get ready to start using budgets for your daily financial app.</Text>
                        </View>
                        <Spacer height={54} />
                        <TouchableButton title={"Create a New Budget"} textStyle={{ textAlign: "center", color: "#2C14DD", fontSize: 12, fontFamily: "Inter-semibold" }} internalViewBGColor={{ flexDirection: "column", backgroundColor: "#FFFFFF" }} containerStyle={{ height: 46, alignSelf: "center", }} onPress={() => {

                            setVisible(false)
                            // navigation.navigate("ForgotPasswordSent");
                        }} />

                        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20, height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#3B23EB", borderRadius: 16 }} onPress={() => {
                            setVisible(false)
                            navigation.navigate("CreateBudget");
                        }}>
                            <CustomIcon name="close" color="#DACDFE" size="20" />
                        </TouchableOpacity>
                    </Card>
                </Modal>

            </View>


        </SafeAreaView >
    )
}

export default BudgetHome;

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
