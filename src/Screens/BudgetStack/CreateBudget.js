import React from "react";
import { View, StyleSheet, Text } from "react-native"
import OnBoardingScreen1 from "../OnBoarding/OnBoardingScreen1";
import OnBoardingScreen2 from "../OnBoarding/OnBoardingScreen2";
import OnBoardingScreen3 from "../OnBoarding/OnBoardingScreen3";
import Swiper from "react-native-swiper"
import CreateBudgetScreen1 from "./CreateBudgetScreens/CreateBudgetScreen1";
import SetBudgetAmountScreen from "./CreateBudgetScreens/SetBudgetAmountScreen";
import PreviewBudgetScreen from "./CreateBudgetScreens/PreviewBudgetScreen";


const CreateBudget = ({ navigation }) => {

    const [slide, setSlide] = React.useState(0);
    return (
        <View style={Styles.container}>
            <Swiper showsPagination={false} dotStyle={{ marginBottom: 120 }} index={slide} loop={false} scrollEnabled={false}>
                <CreateBudgetScreen1 navigation={navigation} setSlide={setSlide} />
                <SetBudgetAmountScreen navigation={navigation} setSlide={setSlide} />
                <PreviewBudgetScreen navigation={navigation} setSlide={setSlide} />
            </Swiper>
        </View>
    )
}

export default CreateBudget;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})