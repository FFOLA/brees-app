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
import { SelectCountry } from 'react-native-element-dropdown';

const OneTransaction = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
    ];
    const [slide, setSlide] = React.useState(0);
    const [country, setCountry] = useState('1');

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
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#FFFFFF", }} edges={['right', 'left', 'top']}>
            <View style={{ justifyContent: "flex-start", alignItems: "center", minHeight: 44, }}>
                <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313", textAlign: "center" }}>Transactions</Text>
                <TouchableOpacity style={{ position: "absolute", top: -1, left: 0, height: 32, width: 32, justifyContent: "center", alignItems: "center", backgroundColor: "#FAFAFA", borderRadius: 16 }} onPress={() => { navigation.navigate("AllTransactions") }}>
                    <CustomIcon name="arrow-ios-back" color="#3E3E3E" size="20" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Spacer height={32} />
                <View style={{ height: 52, width: 52, borderRadius: 22, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, alignSelf: "center" }}>
                    <Text style={{ color: "#005CEE", fontSize: 19, fontFamily: "Inter-SemiBold" }}>J</Text>
                </View>
                <Spacer height={16} />
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 16 }}>Transfer to Phillip</Text>
                </View>
                <Spacer height={20} />
                <View style={{ alignSelf: "center" }}>
                    <SelectCountry
                        style={styles.dropdown}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        imageStyle={styles.imageStyle}
                        iconStyle={styles.iconStyle}
                        maxHeight={200}
                        value={country}
                        data={local_data}
                        valueField="value"
                        labelField="lable"
                        imageField="image"
                        placeholder="Select country"
                        searchPlaceholder="Search..."
                        onChange={e => {
                            setCountry(e.value);
                        }}
                        renderRightIcon={() => (
                            <CustomIcon name="arrow-down" color="#B0BAD7" size="20" />

                        )}
                    />
                </View>
                <Spacer height={20} />
                <View style={{ backgroundColor: "#F9FAFB", minHeight: 112, borderRadius: 16, padding: 24, gap: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#6C727F" }}>Type</Text>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#1B7A00" }}>Credit</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#6C727F" }}>Description</Text>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#121826" }}>Payment for Coffee</Text>
                    </View>

                </View>
                <Spacer height={20} />
                <View style={{ backgroundColor: "#F9FAFB", minHeight: 112, borderRadius: 16, padding: 24, gap: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#6C727F" }}>Bank</Text>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#121826" }}>Guaranty Trust Bank</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#6C727F" }}>Amount</Text>
                        <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 14, color: "#1B7A00" }}>+N42,209</Text>
                    </View>

                </View>
                <Spacer height={20} />
                <View style={{ backgroundColor: "#F9FAFB", minHeight: 112, borderRadius: 16, padding: 24, gap: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#6C727F" }}>Date</Text>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#121826" }}>10 Sep, 2021</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#6C727F" }}>Time</Text>
                        <Text style={{ fontFamily: "Inter-regular", fontSize: 14, color: "#121826" }}>12:03 AM</Text>
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView >
    )
}

export default OneTransaction;

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
})
