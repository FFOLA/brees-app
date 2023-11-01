import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, TextInput, Switch } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../../../components/space";
import TouchableButton from "../../../../components/TouchableButton";
import CustomTextInput from "../../../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox, Toggle } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CustomIcon from "../../../components/icon";
import { Dropdown } from "react-native-element-dropdown";
import CalendarPicker from 'react-native-calendar-picker';
import {
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Slider } from "@miblanchard/react-native-slider";
import * as Progress from 'react-native-progress';
import { yellow100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

const BudgetCreated = ({ navigation, setSlide }) => {

    const [sliderValue, setsliderValue] = useState(80);
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
    const [switchState, setSwitchState] = useState(false)
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
        <SafeAreaView style={{ flex: 1, padding: 20, paddingBottom: 0, backgroundColor: "#432DEC" }} edges={['right', 'left', 'top']}>
            {/* <View style={{ flexDirection: "row", backgroundColor: "#F5F7FF" }}>
                <View style={{ justifyContent: "flex-start", flex: 1 }}>
                    <TouchableOpacity style={{ height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 16 }} onPress={() => {
                        setSlide(1);
                    }}>
                        <CustomIcon name="arrow-ios-back" color="#131313" size="20" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-end", flex: 2, marginLeft: 30 }}>
                    <TouchableOpacity style={{ height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 16 }} onPress={() => {
                        setSlide(1);
                    }}>
                        <CustomIcon name="edit" color="#131313" size="20" />
                    </TouchableOpacity>
                </View>
            </View> */}
            <Spacer height={16} />
            {/* <ScrollView> */}
            <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingTop: "10%" }}>
                <Image source={require("../../../../assets/images/BudgetHome/Piggybank.png")} style={{
                    height: 239,
                    width: 239,

                }} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between", paddingTop: "5%" }}>
                <View>
                    <Text style={{ fontFamily: "inter-bold", fontSize: 28, textAlign: "center", color: "#F6F7F8" }}>Mmm… we love your “new budget” smell.</Text>
                    <Text style={{ fontFamily: "inter-medium", fontSize: 15, textAlign: "center", color: "#F6F7F8", padding: 40 }}>Awesome! Your new Monthly Budget is up and running.</Text>
                </View>
                <View>
                    <TouchableButton title={"See my budget"} textStyle={{ textAlign: "center", color: "#432DEC", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column", backgroundColor: "#FFFFFF" }} containerStyle={{ width: 335, height: 62, }} onPress={() => {
                        navigation.navigate("OneBudget");
                    }} />
                </View>
            </View>
            {/* </ScrollView> */}

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

export default BudgetCreated;