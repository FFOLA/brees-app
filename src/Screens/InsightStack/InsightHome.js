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
import InstaStory from 'react-native-insta-story';
import { StoryContainer, ProgressBar } from 'react-native-stories-view';

const InsightHome = ({ navigation }) => {

    const data = [
        { accountname: 'Kuda Bank', balance: 12000 },
        { accountname: 'GT Bank', balance: 950 },
        { accountname: 'PiggyVest', balance: 1050 },
    ];

    const storyData = [
        {
            user_id: 1,
            user_image:
                'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: 'Ahmet Çağlar Durmuş',
            stories: [
                {
                    story_id: 1,
                    story_image:
                        'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image:
                        'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
                },
            ],
        },
        {
            user_id: 2,
            user_image:
                'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            user_name: 'Test User',
            stories: [
                {
                    story_id: 1,
                    story_image:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image:
                        'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 2 swiped'),
                },
            ],
        },
    ];
    const images = [
        'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
    ]
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

                <View style={{ backgroundColor: "#210EA4", paddingHorizontal: 20 }}>
                    <View style={{ justifyContent: "flex-start", alignItems: "center", minHeight: 44, }}>
                        <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#F6F7F8", textAlign: "center" }}>Budget</Text>
                    </View>
                    <Spacer height={43} />
                    <Card style={{ borderRadius: 16, height: 76, borderWidth: 0, width: "100%", backgroundColor: "#2511BB", zIndex: 1 }} onPress={() => { alert('nothing for now') }} >
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", justifyContent: "flex-start", gap: 8, flex: 1, alignItems: "center", }}>
                                <View style={{ height: 42, width: 42, backgroundColor: "#3784FB", borderRadius: 21, justifyContent: "center", alignItems: "center" }}>
                                    <CustomIcon name="pie-chart" color="#FFFFFF" size="20" />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, fontFamily: "Inter-bold", color: "#FFFFFF" }}>Insight</Text>
                                    <Spacer height={4} />
                                    <Text style={{ fontSize: 12, fontFamily: "Inter-regular", color: "#FFFFFF" }}>Balance Trend</Text>
                                </View>

                            </View>
                            <View style={{ borderRightWidth: 1 }}></View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, fontFamily: "Inter-bold", textAlign: "left", color: "#FFFFFF" }}>N98,432.65</Text>
                                <Text style={{ fontSize: 12, fontFamily: "Inter-regular", color: "#FFFFFF" }}><Text style={{ color: "#21F46A" }}>+4.3% </Text>vs last week</Text>
                            </View>
                        </View>

                    </Card>
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

                        <View style={{ gap: 16, }}>
                            {storyData.map((item) => {
                                return (
                                    <TouchableOpacity key={item.user_id} style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 16 }}>
                                        <Image
                                            source={{ uri: item.user_image }}
                                            style={{ width: 50, height: 50, borderRadius: 24, borderWidth: 2, borderColor: "red" }}
                                        />
                                        <Text>{item.user_name}</Text>
                                        <Progress.Bar size={50} color="yellow" unfilledColor="green" progress={0.5} />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </ScrollView>

                </View>

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

            {/* <ProgressBar
                images={['', '', '', '']}
                onChange={(...rest) => { console.log(...rest) }}
                progressIndex={-1}
                enableProgress={true}
                duration={20}

                barStyle={{
                    barActiveColor: "white",
                    barInActiveColor: "grey",
                    barWidth: 100,
                    barHeight: 4
                }}

            /> */}

            <StoryContainer
                visible={true}
                enableProgress={true}
                images={images}
                duration={20}

                imageArrow="https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg"
                onComplete={() => alert("onComplete")}
                userProfile={{
                    userImage: "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
                    userName: 'Yuvraj Pandey',
                    userMessage: 'Work hard & success will follow !!',
                    imageArrow: "okay",
                    onImageClick: () => {
                        console.log('lskndclksnc');
                        alert('User profile image tapped');
                    },
                }}
                replyView={{
                    isShowReply: true,
                    onReplyTextChange: (textReply, progressIndex) => {
                        console.log(`Text : ${textReply} , position : ${progressIndex}`);
                    },
                    onReplyButtonClick: (buttonType, progressIndex) => {
                        switch (buttonType) {
                            case 'send':
                                console.log(`Send button tapped for position : ${progressIndex}`);
                                break;

                            case 'smiley':
                                console.log(`Smiley button tapped for position : ${progressIndex}`);
                                break;
                        }
                    },
                }}
                containerStyle={{
                    width: '100%',
                    height: '100%',
                }}
            />


        </SafeAreaView >
    )
}

export default InsightHome;

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
