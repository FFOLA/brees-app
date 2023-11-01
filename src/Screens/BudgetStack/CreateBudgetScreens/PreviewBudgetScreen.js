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

const PreviewBudgetScreen = ({ navigation, setSlide }) => {

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
        <SafeAreaView style={{ flex: 1, padding: 20, paddingBottom: 0, backgroundColor: "#F5F7FF" }} edges={['right', 'left', 'top']}>
            <View style={{ flexDirection: "row", backgroundColor: "#F5F7FF" }}>
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
            </View>
            <Spacer height={16} />
            <ScrollView>
                <Text style={{ fontFamily: "Inter", fontSize: 24, fontWeight: "700", color: "#240F51" }}>Budget preview</Text>
                <Spacer height={24} />
                <Card style={{ borderRadius: 24, height: 171, borderColor: "#2C14DD", width: "100%", backgroundColor: "#432DEC" }}>
                    <Spacer height={18} />
                    <Text style={{ fontSize: 12, fontFamily: "Inter-semibold", color: "#FFFFFF" }}>Monthly Budget</Text>
                    <Spacer height={18} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12 }}>
                            <Image style={{ width: 37, height: 37, borderRadius: 8, }} source={require("../../../../assets/images/SortTransaction/two.png")} />
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
                <Spacer height={40} />
                <Text style={{ color: "#0E1B42", fontSize: 14, fontFamily: "Inter-semibold" }}>Budget source</Text>
                <Spacer height={16} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 12 }}>
                        <Image style={{ width: 37, height: 37, borderRadius: 8, }} source={require("../../../../assets/images/SortTransaction/two.png")} />
                        <View>
                            <Text style={{ fontSize: 14, fontFamily: "Inter-semibold" }}>{ActiveAccount ? ActiveAccount.label : "Kuda Bank"}</Text>
                            <Spacer height={4} />
                            <Text style={{ fontSize: 12, fontFamily: "Inter-regular" }}>Account balance: $2,987.56</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => { handlePresentModal() }}>
                        <Text style={{ fontSize: 14, fontFamily: "Inter-bold", textAlign: "left", color: "#5844EE" }}>Change</Text>
                    </TouchableOpacity>
                </View>
                <Spacer height={42} />
                <Text style={{ color: "#0E1B42", fontSize: 14, fontFamily: "Inter-semibold" }}>Start date</Text>
                <Spacer height={16} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", gap: 12 }}>
                        <View style={{ justifyContent: "center", alignItems: "center", height: 33, width: 33 }}>
                            <CustomIcon name="calendar" color="#2C14DD" size="18" />

                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontFamily: "Inter-semibold" }}>Jan 20th 2022</Text>
                            <Spacer height={4} />
                            <Text style={{ fontSize: 12, fontFamily: "Inter-regular" }}>Monthly budget</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={() => { alert('work in progress') }}>
                        <Text style={{ fontSize: 14, fontFamily: "Inter-bold", textAlign: "left", color: "#5844EE" }}>Change</Text>
                    </TouchableOpacity>
                </View>
                <Spacer height={42} />
                <Text style={{ color: "#0E1B42", fontSize: 14, fontFamily: "Inter-semibold" }}>Receive Alert</Text>
                <Spacer height={16} />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: "left", fontFamily: "inter-regular", fontSize: 12, color: "#6F7FAF" }}>Receive alert when it reaches a certain limit</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Switch value={switchState} onValueChange={() => setSwitchState(prevState => !prevState)}
                            trackColor={{ false: '#E8E8E8', true: '#2C14DD' }}
                            thumbColor='#FFFFFF'
                            ios_backgroundColor="#E8E8E8"
                            style={{ alignSelf: "flex-end" }}
                        />
                    </View>
                </View>
                <View style={{ display: switchState ? "flex" : "none" }}>
                    <Spacer height={24} />
                    <View style={{}}>
                        <Slider
                            animateTransitions
                            maximumTrackTintColor="#d3d3d3"
                            maximumValue={100}
                            minimumValue={0}
                            sty
                            step={2}
                            value={sliderValue}
                            onValueChange={setsliderValue}
                            thumbTintColor="#2914CD"
                            renderThumbComponent={() => (
                                <View style={{
                                    height: 24,
                                    width: 46,
                                    backgroundColor: "#2C14DD",
                                    borderRadius: 24,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: -7
                                }}>
                                    <Text style={{ color: "#FFFFFF" }}>{sliderValue + "%"}</Text>
                                    {/* <CustomIcon name="arrow-left" color="#FFFFFF" size="15" />
                                <CustomIcon name="arrow-right" color="#FFFFFF" size="15" /> */}

                                </View>
                            )}
                            trackStyle={{ width: "100%" }}
                            minimumTrackTintColor="#2C14DD"
                            track={{
                            }}
                        // trackStyle={customStyles.track}
                        />
                    </View>

                </View>
                <Spacer height={23} />
                <TouchableButton title={"Create Budget"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontFamily: "Inter-semibold" }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ height: 46, alignSelf: "center" }} onPress={() => {

                    // setVisible(true)
                    navigation.navigate("BudgetCreated")
                }} />
                <Spacer height={24} />
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

export default PreviewBudgetScreen;