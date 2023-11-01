import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image } from "react-native"
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

const CreateBudgetScreen1 = ({ setSlide, navigation }) => {
    const [nameCont, setnameCont] = useState('');
    const [emailCont, setemailCont] = useState('');
    const [cycleOfBudget, setcycleOfBudget] = useState();
    const [show, setShow] = useState(false);
    const [country, setCountry] = useState('1');
    const [value, setValue] = useState(null);
    const [Accountsvalue, setAccountsValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocusCycle, setisFocusCycle] = useState(false);
    const [SelectedFrequency, setSelectedFrequency] = useState({});
    const [startDate, setstartDate] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const renderLabel = (label) => {
        return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                {label}
            </Text>
        );
        return null;
    };
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["85%"];
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const frequency = [
        { label: 'Daily', value: '1' },
        { label: 'Weekly', value: '2' },
        { label: 'Monthly', value: '3' },
        { label: 'Yearly', value: '4' },
    ];
    const accounts = [
        { label: 'Account 1', value: '1' },
        { label: 'Account 2', value: '2' },
        { label: 'Account 3', value: '3' },
        { label: 'Account 4', value: '4' },
    ];
    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShow(!show);
    //     }, 5000);
    //     return () => clearTimeout(timeout);
    // }, [show]);
    return (
        <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#F5F7FF" }}>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#F5F7FF" }}>
                <View style={{ justifyContent: "flex-start", flex: 1 }}>
                    <TouchableOpacity style={{ height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 16 }} onPress={() => { navigation.navigate("BudgetHome") }}>
                        <CustomIcon name="arrow-ios-back" color="#131313" size="20" />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-end", flex: 2, marginLeft: 30 }}>
                    <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313" }}> 1 of 3</Text>
                </View>
            </View>
            <View style={{ flex: 9, backgroundColor: "#F5F7FF" }}>
                <Text style={{ fontFamily: "Inter", fontSize: 24, fontWeight: "700", color: "#240F51" }}>Create your budget</Text>
                <Spacer height={8} />
                <Text style={{ fontFamily: "Inter", fontSize: 14, color: "#292B2D" }}>Set the maximum you’d like to spend each week or month? Type in the amount below</Text>
                <Spacer height={42} />
                <View style={{}}>
                    <FloatingLabelInput
                        label={'Name of Budget'}
                        value={emailCont}
                        onChangeText={value => setemailCont(value)}
                        containerStyles={{ height: 61, width: 335, borderRadius: 24, backgroundColor: "white" }}
                        labelStyles={{ paddingLeft: 20, fontSize: 10 }}
                        inputStyles={{ paddingLeft: 20, fontSize: 14, fontWeight: "700" }}
                    />
                </View>
                <Spacer height={20} />
                <View style={{}}>
                    <FloatingLabelInput
                        label={'Cycle of budget'}
                        value={cycleOfBudget}
                        multiline
                        containerStyles={{ height: 61, width: 335, borderRadius: 24, backgroundColor: "white" }}
                        labelStyles={{ paddingLeft: 20, fontSize: 10 }}
                        inputStyles={{ paddingLeft: 20, fontSize: 14, fontWeight: "700" }}
                        rightComponent={
                            <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => { handlePresentModal() }}><CustomIcon name="calendar" color="#2C14DD" size="18" /></TouchableOpacity>
                        }
                        onFocus={() => { handlePresentModal() }}
                        isFocused={isFocusCycle}
                        editable={false}
                    />
                </View>
                <Spacer height={20} />
                <View style={styles.container}>
                    {renderLabel("Select an Account")}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={accounts}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select an account' : '...'}
                        searchPlaceholder="Search..."
                        value={Accountsvalue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setAccountsValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
            </View>
            <View style={{ flex: 3, flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
                <TouchableButton title={"Continue"} textStyle={{ color: "white", fontSize: 16, fontWeight: '600' }} containerStyle={{ width: "100%", height: "40%" }} onPress={() => {
                    setSlide(1);
                }} />
            </View>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 32 }}
                onDismiss={() => {
                    console.log(SelectedFrequency)
                    console.log(startDate)
                    if (SelectedFrequency && startDate) {

                        if (SelectedFrequency.value == 1) {
                            setcycleOfBudget(SelectedFrequency.label + ' (Starting from ' + startDate.format("DD MMM YYYY") + " )")
                        }
                        if (SelectedFrequency.value == 2) {
                            setcycleOfBudget(SelectedFrequency.label + ' (Every ' + startDate.format('dddd') + ',starting from ' + startDate.format("DD MMM YYYY") + " )")
                        }
                        if (SelectedFrequency.value == 3) {
                            setcycleOfBudget(SelectedFrequency.label + ' (Every ' + startDate.format('Do MMMM') + ',starting from ' + startDate.format("DD MMM YYYY") + " )")
                        }
                        if (SelectedFrequency.value == 4) {
                            setcycleOfBudget(SelectedFrequency.label + ' (Every ' + startDate.format('jS') + ',starting from ' + startDate.format("DD MMM YYYY") + " )")
                        }
                    } else {
                        setcycleOfBudget(null);
                    }
                    setisFocusCycle(false)
                    setIsOpen(false)
                }}
                handleComponent={() => { }}
            >
                <BottomSheetView style={{ paddingHorizontal: 20, height: "100%", paddingBottom: 24, paddingTop: 30, backgroundColor: "#F5F7FF" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ height: 32, width: 32, borderRadius: 17, backgroundColor: "white", justifyContent: "center", alignItems: "center" }} onPress={() => {
                            bottomSheetModalRef.current?.dismiss();
                            setIsOpen(false)
                        }}>
                            <CustomIcon name="arrow-ios-downward" color="#6C727F" size="24" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => {
                            setValue();
                            setSelectedFrequency()
                            setstartDate()
                        }}>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: 14, color: "#4A44C6" }}>Reset</Text>
                        </TouchableOpacity>

                    </View>

                    <ScrollView style={{ width: "100%" }}>
                        <Spacer height={56} />
                        <Text>Edit budget cycle</Text>
                        <Spacer height={40} />
                        <View style={{}}>
                            {renderLabel("Frequency")}
                            <Dropdown
                                style={[styles.dropdown, { height: 61, borderRadius: 24 }, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={frequency}
                                // search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select Frequency' : '...'}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setSelectedFrequency(item)
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <Spacer height={40} />
                        <View style={{ backgroundColor: "white", borderRadius: 15, width: "100%", }}>
                            <View style={{ borderBottomColor: "#ECEFF6", borderBottomWidth: 0.5, padding: 16 }}>
                                <Text >Pick a start date</Text>

                            </View>
                            <View style={[styles.container, { padding: 16 }]}>
                                <CalendarPicker
                                    width={335}
                                    onDateChange={(date) => {
                                        setstartDate(date)
                                    }}
                                />
                            </View>
                        </View>

                    </ScrollView>
                    <View>
                        <TouchableButton title={"Set cycle"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, alignSelf: "center" }} onPress={() => {
                            bottomSheetModalRef.current?.dismiss(); setIsOpen(false)
                        }} />
                    </View>

                </BottomSheetView>
            </BottomSheetModal>
        </SafeAreaView>
    )
}

export default CreateBudgetScreen1;

const styles = StyleSheet.create({
    dropdown: {
        height: 65,
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    placeholderStyle: {
        fontSize: 14,
        paddingLeft: 15,
        color: "black",
        fontFamily: "Inter-medium"
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 15,
        color: "#6F7FAF"
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    label: {
        position: 'absolute',
        // backgroundColor: 'white',
        left: 22,
        top: 3,
        zIndex: 999,
        paddingHorizontal: 3,
        fontSize: 10,
        fontFamily: "Inter-medium",
        color: "#5C616F"
    },

})
