import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Switch } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";
import Spacer from "../../../components/space";
import TouchableButton from "../../../components/TouchableButton";
import CustomIcon from "../../components/icon";
import Swiper from "react-native-swiper";
import { CommonActions } from "@react-navigation/native";
import {
    BottomSheetModal,
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import CalendarPicker from 'react-native-calendar-picker';
import { Slider } from '@miblanchard/react-native-slider';
import { Backdrop } from "react-native-backdrop";


const AllTransactions = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000, date: "2022-02-02 10:54" },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
        { accountname: 'PiggyVest', balance: 100 },
    ];
    const [range, setRange] = React.useState({});
    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            if (date == null) {
            } else {
                setselectedEndDate(date)
            }
        } else if (type === 'START_DATE') {
            setselectedStartDate(date)
        }
    }

    const [slide, setSlide] = React.useState(0);
    const [selectedStartDate, setselectedStartDate] = React.useState();
    const [selectedEndDate, setselectedEndDate] = React.useState();
    const [nameCont, setnameCont] = useState('');
    const [emailCont, setemailCont] = useState('');
    const [daterange, setdaterange] = useState('');
    const [toggleValue, settoggleValue] = useState(false);
    const [show, setShow] = useState(false);
    const total = data.length;
    const toggleSwitch = () => settoggleValue(previousState => !previousState);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCalendar, setIsOpenCalendar] = useState(false);
    const [sliderValue, setsliderValue] = useState([6, 20000]);
    // const [value, setValue] = React.useState([6, 18])

    const bottomSheetModalRef = useRef(null);
    const bottomSheetModalRefCalender = useRef(null);

    const snapPoints = ["85%"];
    const snapPointsCalender = ["60%"];

    const SwitchComponent = (item => {
        const [switchState, setSwitchState] = useState(false)
        return (
            <Switch value={switchState} onValueChange={() => setSwitchState(prevState => !prevState)}
                trackColor={{ false: '#E8E8E8', true: '#4263EB' }}
                thumbColor='#FFFFFF'
                ios_backgroundColor="#E8E8E8"
            />
        )
    })

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }
    function handlePresentModalCalender() {
        bottomSheetModalRefCalender.current?.present();
        setTimeout(() => {
            setIsOpenCalendar(true);
        }, 500);
    }

    useEffect(() => {
        if (selectedStartDate != null && selectedEndDate != null) {
            // setemailCont(selectedStartDate.format("DD MMM YYYY") + ' - ' + selectedEndDate.format("DD MMM YYYY"))

        }
    }, [selectedEndDate]);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isOpen ? "grey" : "#F5F7FF", paddingTop: 20, }} edges={['right', 'left', 'top']}>
            <View style={{ justifyContent: "flex-start", alignItems: "center", minHeight: 44, }}>
                <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Transactions</Text>
                <TouchableOpacity style={{ position: "absolute", top: -5, left: 20 }} onPress={() => { navigation.navigate("dashboard") }}>
                    <Image source={require("../../../assets/images/back.png")} style={{
                        height: 32, width: 32,
                    }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute", top: -5, right: 20 }} onPress={handlePresentModal}>
                    <CustomIcon name="funnel" color="#3E3E3E" size="18" />
                </TouchableOpacity>
            </View>
            <Spacer height={16} />
            <View style={{ backgroundColor: isOpen ? "grey" : "#FFFFFF", justifyContent: "flex-start", alignItems: "flex-start", borderTopLeftRadius: 32, borderTopRightRadius: 32, paddingHorizontal: 20, flex: 1 }}>
                <ScrollView style={{ width: "100%", paddingVertical: 32 }}>
                    <FloatingLabelInput
                        // label={'Email'}
                        togglePassword={show}
                        value={emailCont}
                        staticLabel
                        onChangeText={value => setemailCont(value)}
                        containerStyles={{ height: 61, width: 335, borderRadius: 24, backgroundColor: isOpen ? "grey" : "#FAFBFF" }}
                        // labelStyles={{ paddingLeft: 10, fontSize: 10 }}
                        inputStyles={{ paddingLeft: 20, fontSize: 14, fontWeight: "700" }}
                        hint={"Search Transactions"}
                        leftComponent={<View style={{ paddingLeft: 15 }}><CustomIcon name="search-outline" color="#B3C2FF" size="18" /></View>}
                    />
                    <Spacer height={16} />
                    <Text> Today</Text>
                    <Spacer height={17} />
                    <View style={{ width: "100%", gap: 24 }}>
                        {data.map((item) => {
                            return (
                                <TouchableOpacity key={item.balance} onPress={() => { navigation.navigate("OneTransaction") }}>
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} >
                                        <View style={{ height: 43, width: 43, borderRadius: 22, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, }}>
                                            <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                        </View>
                                        <View style={{ flex: 6, }}>
                                            <Text style={{ fontFamily: "inter-medium", fontSize: 14, textAlign: "left", color: "#131313", lineHeight: 15 }}>Shopping budget has exceeds..</Text>
                                            <Spacer height={5} />
                                            <Text style={{ fontFamily: "inter", fontSize: 12, color: "#8F92A1", textAlign: "left", lineHeight: 16 }}>Your Utilities budget has exceeds....</Text>
                                        </View>
                                        <View style={{ flex: 2, }}>
                                            <Text style={{ color: "#8F92A1", }}>+N42,209</Text>

                                        </View>

                                        {/* <Spacer height={24} /> */}
                                    </View>
                                </TouchableOpacity>
                            )

                        })}
                    </View>
                    <Spacer height={24} />
                    <Text> Yesterday</Text>
                    <Spacer height={17} />
                    <View style={{ width: "100%", gap: 24 }}>
                        {data.map((item) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} key={item.balance}>
                                    <View style={{ height: 43, width: 43, borderRadius: 22, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, }}>
                                        <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                    </View>
                                    <View style={{ flex: 6, }}>
                                        <Text style={{ fontFamily: "inter-medium", fontSize: 14, textAlign: "left", color: "#131313", lineHeight: 15 }}>Shopping budget has exceeds..</Text>
                                        <Spacer height={5} />
                                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "#8F92A1", textAlign: "left", lineHeight: 16 }}>Your Utilities budget has exceeds....</Text>
                                    </View>
                                    <View style={{ flex: 2, }}>
                                        <Text style={{ color: "#8F92A1", }}>N42,209</Text>

                                    </View>
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
                                    <View style={{ height: 43, width: 43, borderRadius: 22, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, }}>
                                        <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                    </View>
                                    <View style={{ flex: 6, }}>
                                        <Text style={{ fontFamily: "inter-medium", fontSize: 14, textAlign: "left", color: "#131313", lineHeight: 15 }}>Shopping budget has exceeds..</Text>
                                        <Spacer height={5} />
                                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "#8F92A1", textAlign: "left", lineHeight: 16 }}>Your Utilities budget has exceeds....</Text>
                                    </View>
                                    <View style={{ flex: 2, }}>
                                        <Text style={{ color: "#8F92A1", }}>N42,209</Text>

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
            <BottomSheetModal
                ref={bottomSheetModalRef}
                // index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 32 }}
                onDismiss={() => setIsOpen(false)}
                handleIndicatorStyle={{ backgroundColor: "#E5E6EB", width: 48, top: 16, height: 6 }}
            >
                <BottomSheetView style={{ paddingHorizontal: 20, paddingTop: 30, height: "100%", paddingBottom: 24 }}>
                    <View style={{ justifyContent: "flex-start", alignItems: "center", maxHeight: "20%", }}>
                        <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Filters</Text>
                        <TouchableOpacity style={{ position: "absolute", top: 0, left: 0 }} onPress={() => {
                            bottomSheetModalRef.current?.dismiss(); setIsOpen(false)
                        }}>
                            <CustomIcon name="close-outline" color="#6C727F" size="24" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: "absolute", top: 2, right: 0 }} onPress={() => setdaterange(null)}>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: 14, color: "#4A44C6" }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Spacer height={40} />
                        <FloatingLabelInput
                            label={'Date'}
                            value={daterange}
                            // onChangeText={value => setdaterange(value)}
                            isFocused={handlePresentModalCalender}
                            containerStyles={{ height: 64, width: 335, borderRadius: 24, backgroundColor: "#FAFBFF" }}
                            labelStyles={{ paddingLeft: 20, paddingTop: 10, fontSize: 10 }}
                            inputStyles={{ paddingLeft: 20, fontSize: 14, fontWeight: "700", }}
                            rightComponent={
                                <TouchableOpacity style={{ paddingRight: 15 }} onPress={handlePresentModalCalender}><CustomIcon name="calendar" color="#2C14DD" size="18" /></TouchableOpacity>
                            }
                        />
                        <Spacer height={40} />
                        <View>
                            <Text style={{ fontSize: 14, fontFamily: "Inter-Medium" }}>Account</Text>
                            <Spacer height={6} />

                            {data.map((item) => {
                                return (
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, height: 57, paddingHorizontal: 10, }} key={item.balance}>
                                        <View style={{ height: 29, width: 29, borderRadius: 6.04, justifyContent: "center", alignItems: "center", marginRight: 0 }}>
                                            <Image source={require("../../../assets/images/Accounts/uba.png")} style={{
                                                height: "100%", width: "100%", position: "absolute"
                                            }} />
                                        </View>
                                        <View style={{ width: "70%" }}>
                                            <Text style={{ fontFamily: "inter-medium", fontSize: 14, color: "black", textAlign: "left", lineHeight: 15 }}>John Ogaga</Text>
                                        </View>
                                        <View style={{ marginLeft: "auto", color: "black", height: 40 }}>
                                            <SwitchComponent item={item} />
                                            {/* <Switch
                                                trackColor={{ false: '#E8E8E8', true: '#4263EB' }}
                                                thumbColor='#FFFFFF'
                                                ios_backgroundColor="#3e3e3e"
                                                // onValueChange={toggleSwitch}
                                                value={toggleValue}
                                            /> */}
                                        </View>

                                    </View>
                                )

                            })}
                            <Spacer height={20} />
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>Price Range</Text>
                                <Text style={{ fontSize: 14, fontFamily: "Inter-semiBold", color: "#2C14DD" }}>N{sliderValue[0]} - N{sliderValue[1]}</Text>

                            </View>

                            <View style={styles.container}>
                                <Slider
                                    animateTransitions
                                    maximumTrackTintColor="#d3d3d3"
                                    maximumValue={10000}
                                    minimumValue={0}
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
                                            <CustomIcon name="arrow-left" color="#FFFFFF" size="15" />
                                            <CustomIcon name="arrow-right" color="#FFFFFF" size="15" />

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

                    </ScrollView>
                    <View>
                        <TouchableButton title={"Continue"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, alignSelf: "center" }} onPress={() => {
                            bottomSheetModalRef.current?.dismiss(); setIsOpen(false)
                        }} />
                    </View>

                </BottomSheetView>
            </BottomSheetModal>
            <BottomSheetModal
                ref={bottomSheetModalRefCalender}
                snapPoints={snapPointsCalender}
                backgroundStyle={{ borderRadius: 32 }}
                onDismiss={() => {
                    setIsOpenCalendar(false)
                    // setselectedEndDate()
                    // setselectedStartDate()
                }}
                handleIndicatorStyle={{ backgroundColor: "#E5E6EB", width: 48, top: 16, height: 6 }}
            >
                <BottomSheetView style={{ paddingHorizontal: 20, paddingTop: 30 }}>
                    <View style={{ justifyContent: "flex-start", alignItems: "center", maxHeight: "20%", }}>
                        <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Select Date</Text>
                    </View>
                    <Spacer height={20} />
                    <CalendarPicker
                        allowRangeSelection={true}
                        selectedRangeStartStyle={{ backgroundColor: "blue", }}
                        selectedRangeStyle={{ backgroundColor: "blue", borderRadius: 20, width: "70%" }}
                        onDateChange={(date, type) => {
                            onDateChange(date, type)
                        }}
                    />
                    <Spacer height={10} />
                    <View style={{ alignSelf: "flex-end", flexDirection: "row", gap: 10 }}>
                        <TouchableOpacity style={{}} onPress={() => {
                            bottomSheetModalRefCalender.current?.dismiss(); setIsOpenCalendar(false)
                            setdaterange(selectedStartDate.format("DD MMM YYYY") + ' - ' + selectedEndDate.format("DD MMM YYYY"))
                        }}>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: 14, color: "#4A44C6" }}>Go</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => {
                            setdaterange(null)
                            bottomSheetModalRefCalender.current?.dismiss();
                            setIsOpenCalendar(false)
                        }}>
                            <Text style={{ fontFamily: "Inter-Bold", fontSize: 14, color: "#4A44C6" }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </SafeAreaView >
    )
}

export default AllTransactions;

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
    container: {
        flex: 1,
        padding: 24,
        // backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})
