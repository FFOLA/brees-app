import React, { useState, useEffect, } from "react";
import { View, StyleSheet, Text, Image, ScrollView, ImageBackground, FlatList, TouchableOpacity, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Card, CheckBox } from "@ui-kitten/components";
import TouchableButton from "../../../components/TouchableButton";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Spacer from "../../../components/space";
import CustomIcon from "../../components/icon";
import * as Progress from 'react-native-progress';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// console.log(windowWidth)
const DashBoard = ({ navigation }) => {
    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
    ];

    const accountSummaryTable = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ width: "50%", alignSelf: "flex-start" }}>
                    <Text style={{ fontSize: 12, fontWeight: 'normal', color: "white", textAlign: 'left' }}>{item.accountname}</Text>
                </View>
                <View style={{ width: "50%", }}>
                    <Text style={{ fontSize: 12, fontWeight: 'normal', color: "white", textAlign: 'right' }}>{item.balance}</Text>
                </View>
            </View>
        );
    }

    const [SearchBarHidden, setSearchBarHidden] = React.useState("none");
    const [SearchText, setSearchText] = React.useState();
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#2C14DD", }}>
            <View style={{ width: windowWidth, backgroundColor: "#2C14DD", minHeight: 100, position: "absolute", top: 0, left: 0, zIndex: 1, paddingTop: 50, alignItems: "center", paddingHorizontal: 20, display: SearchBarHidden, }} >
                <FloatingLabelInput
                    value={SearchText}
                    staticLabel
                    onChangeText={value => setSearchText(value)}
                    containerStyles={{ height: 60, width: 335, borderRadius: 99, backgroundColor: "#432DEC", }}
                    inputStyles={{ paddingLeft: 20, fontSize: 14, fontFamily: "Inter-regular", color: "#E9E8F6", }}
                    hint={"Search"}
                    hintTextColor="#E9E8F6"
                    leftComponent={<View style={{ paddingLeft: 15 }}><CustomIcon name="search" color="#E9E8F6" size={18} /></View>}
                    rightComponent={
                        <View style={{ paddingRight: 18 }}>
                            <TouchableOpacity style={{ backgroundColor: "#2812C9", height: 24, width: 24, borderRadius: 13, justifyContent: "center", alignItems: "center" }} onPress={() => setSearchBarHidden("none")}>
                                <CustomIcon name="close" color="#978AF4" size="18" />
                            </TouchableOpacity>

                        </View>
                    }
                />
                <Spacer height={32} />
                <ScrollView style={{ width: "100%" }}>
                    <View style={{ gap: 24, paddingLeft: 20 }}>
                        {data.map((item) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} key={item.balance}>
                                    <View style={{ height: 24, width: 24, borderRadius: 22, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10, }}>
                                        <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                    </View>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: "inter-regular", fontSize: 14, textAlign: "left", color: "#E4E4E7", lineHeight: 15 }}>Transfer to “James” UBA</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
                <Spacer height={32} />
                <View style={{ flexDirection: "row", alignSelf: "flex-start", justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: "#E4E4E7" }}>See more ...</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <Spacer height={26} />
            </View>
            <ScrollView style={{ height: "100%", width: "100%", flex: 1, paddingTop: 50, }} onStartShouldSetResponder={() => setSearchBarHidden("flex")}
            >
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style={{ fontFamily: "inter", fontSize: 16, fontWeight: "400", color: "white" }}>Hello <Text style={{ fontWeight: 600, fontSize: 16, }}>John</Text></Text>
                        <Spacer height={5} />
                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "white" }}>Your finances are looking good</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate("ListNotifications") }}>
                            <View style={{ backgroundColor: "#2812C9", borderRadius: 20, padding: 10 }}>
                                <CustomIcon name="bell" color="#978AF4" size="24" />

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSearchBarHidden("flex") }}>
                            <View style={{ backgroundColor: "#2812C9", borderRadius: 20, padding: 10 }} >
                                <CustomIcon name="search-outline" color="#978AF4" size="24" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Spacer height={20} />
                <View style={{ flex: 1, overflow: "hidden" }} >
                    <View style={{ backgroundColor: "#210FA4", borderRadius: 24, }}>
                        <ImageBackground source={require("../../../assets/images/Dashboard/backgroundEffect.png")} resizeMode="cover" imageStyle={{ opacity: 0.05, height: "100%", width: "100%", }} style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ alignItems: "center", width: "60%", paddingTop: 20, paddingBottom: 20 }}>

                                <Image source={require("../../../assets/images/verifyEmail.png")} style={{
                                    height: 52, width: 52, borderRadius: 26
                                }} />
                                <Spacer height={15} />
                                <Text style={{ fontFamily: "inter", fontSize: 11, color: "white", textAlign: "center" }}>Your available balance is</Text>
                                <Spacer height={10} />
                                <Text style={{ fontFamily: "inter", fontSize: 28, fontWeight: 700, color: "white", textAlign: "center" }}>N20,983</Text>
                                <Spacer height={20} />
                                <Text style={{ fontFamily: "inter", fontSize: 11, color: "white", textAlign: "center", color: "white", lineHeight: 15 }}>By this time last month, you spent slightly higher (N22,719)</Text>
                                <View style={{ backgroundColor: "#2C14DD", height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", position: "absolute", left: "110%", top: "15%" }} onStartShouldSetResponder={() => navigation.navigate("accounts")}>
                                    <CustomIcon name="chevron-right" color="#978AF4" size="24" />
                                </View>
                            </View>
                            <View style={{ width: "90%", paddingBottom: 30, gap: 10 }}>
                                {data.map((item) => {
                                    return (
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }} key={item.balance}>
                                            <View style={{ width: "50%", alignSelf: "flex-start" }}>
                                                <Text style={{ fontSize: 12, fontWeight: 'normal', color: "white", textAlign: 'left' }}>{item.accountname}</Text>
                                            </View>
                                            <View style={{ width: "50%", }}>
                                                <Text style={{ fontSize: 12, fontWeight: 'normal', color: "white", textAlign: 'right' }}>{item.balance}</Text>
                                            </View>
                                        </View>
                                    )

                                })}
                            </View>

                        </ImageBackground>
                    </View>

                </View>
                <Spacer height={20} />
                <View style={{ height: 90, backgroundColor: "#210FA4", borderRadius: 16, flexDirection: "row", alignItems: "center", paddingHorizontal: 20, gap: 10 }}>
                    <View style={{ height: 40, width: 40, backgroundColor: "#5844EE", borderRadius: 10, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                        <Image source={require("../../../assets/images/Dashboard/categorizetransactions.png")} style={{
                            height: 16.5, width: 16.5, borderRadius: 26
                        }} />
                    </View>
                    <View style={{ width: "70%" }}>
                        <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "white", textAlign: "left", color: "white", lineHeight: 15 }}>Sort your transactions</Text>
                        <Spacer height={5} />
                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "white", textAlign: "left", color: "white", lineHeight: 16 }}>Get points for sorting your transactions</Text>
                    </View>

                    <View style={{ backgroundColor: "#2310B2", height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", marginLeft: "auto" }}>
                        <CustomIcon name="chevron-right" color="#978AF4" size="24" />
                    </View>

                </View>
                <Spacer height={30} />
                <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "#C1B9F9", textAlign: "left", color: "white", lineHeight: 15 }}>My Budgets</Text>
                <Spacer height={20} />
                <View style={{ backgroundColor: "#432DEC", borderRadius: 16, padding: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{}}>
                            <Text style={{ textAlign: "left", color: "white" }}>You have</Text>
                        </View>
                        <View style={{ backgroundColor: "#2C14DD", height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", }}>
                            <CustomIcon name="chevron-right" color="#978AF4" size="24" />
                        </View>

                    </View>

                    <Spacer height={5} />
                    <Text style={{ fontFamily: "inter", fontSize: 28, fontWeight: 700, color: "white", textAlign: "left" }}>N20,983</Text>
                    <Spacer height={10} />
                    <Progress.Bar progress={0.7} width={null} color="#32FC65" borderWidth={0.1} unfilledColor="rgba(50, 252, 101,0.1)" />
                    <Spacer height={10} />
                    <Text style={{ textAlign: "left", color: "white" }}> 😱 Sapa go soon catch you bros, calm down!!</Text>
                </View>
                <Spacer height={30} />
                <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "#C1B9F9", textAlign: "left", color: "white", lineHeight: 15 }}>Transactions</Text>
                <Spacer height={20} />
                <View style={{ backgroundColor: "#432DEC", borderRadius: 16, padding: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{}}>
                            <Text style={{ textAlign: "left", color: "white" }}>Recent Transactions</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("AllTransactions") }}>
                            <View style={{ backgroundColor: "#2C14DD", height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", }}>
                                <CustomIcon name="chevron-right" color="#978AF4" size="24" />
                            </View>

                        </TouchableOpacity>

                    </View>

                    <Spacer height={5} />
                    <View style={{ width: "90%", gap: 10 }}>
                        {data.map((item) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }} key={item.balance}>
                                    <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#EEF2F8", justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                                        <Text style={{ color: "#005CEE", fontSize: 14, fontWeight: 600 }}>J</Text>
                                    </View>
                                    <View style={{ width: "70%" }}>
                                        <Text style={{ fontFamily: "inter", fontWeight: 700, fontSize: 14, color: "white", textAlign: "left", color: "white", lineHeight: 15 }}>John Ogaga</Text>
                                        <Spacer height={5} />
                                        <Text style={{ fontFamily: "inter", fontSize: 12, color: "white", textAlign: "left", color: "white", lineHeight: 16 }}>Zenith Bank 12:03 AM</Text>
                                    </View>
                                    <Text style={{ marginLeft: "auto", color: "#05EF40", }}>+N20,983</Text>

                                </View>
                                // <Spacer height={10} />
                            )

                        })}
                    </View>
                </View>
                <Spacer height={60} />
            </ScrollView>
        </View>
    )
}

export default DashBoard;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 42,
    }, tablecontainer: {
        flex: 1,
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff'
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
    },
    TableText: {
        margin: 10
    }
});
