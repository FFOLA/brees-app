import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../../../components/space";
import TouchableButton from "../../../../components/TouchableButton";
import CustomTextInput from "../../../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { CheckBox } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CustomIcon from "../../../components/icon";
import { Dropdown } from "react-native-element-dropdown";
import CalendarPicker from 'react-native-calendar-picker';
import {
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Slider } from "@miblanchard/react-native-slider";

const SetBudgetAmountScreen = ({ navigation, setSlide }) => {

    const accounts = [
        { label: 'Account 1', value: '1' },
        { label: 'Account 2', value: '2' },
        { label: 'Account 3', value: '3' },
        { label: 'Account 4', value: '4' },
    ];

    const bottomSheetModalRef = useRef(null);
    const [ActiveAccount, setActiveAccount] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setamount] = useState(0);
    function changeAmount(newamount) {
        console.log(newamount)
        if (newamount && !isNaN(newamount)) {
            setamount(parseInt(newamount) + 0)
        } else {
            setamount(0)
        }
    }
    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }

    const snapPoints = ["50%"];
    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FF" }} edges={['right', 'left', 'top']}>
            <View style={{ flexDirection: "row", backgroundColor: "#F5F7FF" }}>
                <View style={{ justifyContent: "flex-start", flex: 1 }}>
                    <TouchableOpacity style={{ height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 16 }} onPress={() => {
                        setSlide(0);
                    }}>
                        <CustomIcon name="arrow-ios-back" color="#131313" size="20" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-end", flex: 2, marginLeft: 30 }}>
                    <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313" }}> 2 of 3</Text>
                </View>
            </View>
            <Spacer height={16} />
            <ScrollView>
                <Text style={{ fontFamily: "Inter", fontSize: 24, fontWeight: "700", color: "#240F51" }}>Set a budget amount</Text>
                <Spacer height={24} />
                <View style={{ backgroundColor: "white", borderRadius: 24, height: 87, width: "100%" }}>
                    <View style={{ paddingLeft: 20, paddingTop: 11 }}>

                        <Text style={{ fontFamily: "Inter-medium", fontSize: 10, color: "#240F51" }}>
                            Select an account
                        </Text>
                    </View>
                    <Spacer height={12} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12, alignItems: "center" }}>
                            <Image source={require("../../../../assets/images/Accounts/uba.png")} style={{
                                height: 32, width: 32,
                            }} />
                            <Text style={{ fontFamily: "Inter-medium", fontSize: 14, color: "#212325" }}>{ActiveAccount ? ActiveAccount.label : "Kuda Bank"}</Text>

                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 16, alignItems: "center" }}>
                            <Text style={{ fontFamily: "Inter-semibold", fontSize: 14, color: "#212325" }}>N12,000.00</Text>
                            <TouchableOpacity style={{}} onPress={() => { handlePresentModal() }}>
                                <CustomIcon name="arrow-ios-downward" color="#212325" size="24" />
                            </TouchableOpacity>

                            {/* <Image source={require("../../../../assets/images/Accounts/uba.png")} style={{
                                height: 32, width: 32,
                            }} /> */}

                        </View>
                    </View>
                </View>
                <Spacer height={20} />
                <View style={{ alignItems: "center", padding: 17 }}>
                    <Text style={{ fontSize: 12, fontFamily: "inter-regular", color: "#212325", textAlign: "center" }}>
                        Based on your input, you would have <Text style={{ fontFamily: "inter-bold" }}>N12,000</Text> left out of <Text style={{ fontFamily: "inter-bold" }}>N22,000</Text> in your Kuda Bank account
                    </Text>
                </View>
                <Spacer height={60} />
                <Text style={{ textAlign: "center", fontSize: 12, fontFamily: "inter-semibold", color: "#212325", }}>SET AMOUNT</Text>
                <Spacer height={32} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, gap: 10, alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: "#EAE8FD", height: 36, width: 36, justifyContent: "center", alignItems: "center", borderRadius: 15 }} onPress={() => {
                        setamount(parseInt(amount) - 500)
                    }}>
                        <CustomIcon name="minus" color="#2C14DD" size="20" />
                    </TouchableOpacity>
                    <View style={{ width: "60%", borderBottomWidth: 0.17, borderBottomColor: "#004343", paddingBottom: 19, justifyContent: "center", alignItems: "center" }}>
                        <TextInput
                            style={{
                                height: 40,
                                fontSize: 24
                            }}
                            onChangeText={changeAmount}
                            value={parseFloat(amount).toString()}
                            keyboardType="numeric"
                            maxLength={10}
                        />
                        {/* <Text style={{ fontSize: 24, fontFamily: "inter-semibold", textAlign: "center" }}>{amount}</Text> */}
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#EAE8FD", height: 36, width: 36, justifyContent: "center", alignItems: "center", borderRadius: 15 }} onPress={() => {
                        setamount(parseInt(amount) + 500)
                    }}>
                        <CustomIcon name="plus" color="#2C14DD" size="20" />
                    </TouchableOpacity>

                </View>
                <Spacer height={32} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 50, gap: 10, alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: "#EAE8FD", height: 36, width: 83, justifyContent: "center", alignItems: "center", borderRadius: 16 }} onPress={() => {
                        setamount(5000)
                    }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontFamily: "inter-medium", color: "#2C14DD" }}>N5,000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#EAE8FD", height: 36, width: 83, justifyContent: "center", alignItems: "center", borderRadius: 16 }} onPress={() => {
                        setamount(15000)
                    }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontFamily: "inter-medium", color: "#2C14DD" }}>N15,000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: "#EAE8FD", height: 36, width: 83, justifyContent: "center", alignItems: "center", borderRadius: 16 }} onPress={() => {
                        setamount(25000)
                    }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontFamily: "inter-medium", color: "#2C14DD" }} >N25,000</Text>
                    </TouchableOpacity>
                </View>
                <Spacer height={110} />
                <TouchableButton title={"Next"} textStyle={{ textAlign: "center", color: "white", fontSize: 12, fontFamily: "Inter-semibold" }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 180, height: 46, alignSelf: "center" }} onPress={() => {

                    // setVisible(true)
                    setSlide(2)
                }} />
            </ScrollView>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 32 }}
                onDismiss={() => {
                }}
                handleIndicatorStyle={{ backgroundColor: "#E5E6EB", width: 48, top: 16, height: 6 }}
            >
                <BottomSheetView style={{ paddingHorizontal: 20, paddingTop: 30 }}>
                    <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Select Account</Text>
                    </View>
                    <Spacer height={20} />
                    <ScrollView>
                        <View style={{ gap: 20 }}>
                            {accounts.map((item) => {
                                return (
                                    <TouchableOpacity key={item.value} onPress={(...rest) => {
                                        console.log(...rest)
                                        setActiveAccount(item)
                                        bottomSheetModalRef.current?.dismiss();
                                        setIsOpen(false)
                                    }}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
                                            <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12, alignItems: "center" }}>
                                                <Image source={require("../../../../assets/images/Accounts/uba.png")} style={{
                                                    height: 32, width: 32,
                                                }} />
                                                <Text style={{ fontFamily: "Inter-medium", fontSize: 14, color: "#212325" }}>{item.label}</Text>

                                            </View>
                                            <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 16, alignItems: "center" }}>
                                                <Text style={{ fontFamily: "Inter-semibold", fontSize: 14, color: "#212325" }}>N12,000.00</Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                )
                            })}
                        </View>

                    </ScrollView>

                </BottomSheetView>
            </BottomSheetModal>
        </SafeAreaView >
    )
}

export default SetBudgetAmountScreen;