import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/space";
import TouchableButton from "../../components/TouchableButton";
import CustomTextInput from "../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { CheckBox } from "@ui-kitten/components";

const ForgotPassword = ({ navigation }) => {
    const [emailCont, setemailCont] = useState('');

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
                    <Image source={require("../../assets/images/back.png")} style={{
                        height: 32, width: 32
                    }} />
                </View>
                <View style={{ justifyContent: "flex-start", alignItems: "flex-start", flex: 2, marginLeft: 30 }}>
                    <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313" }}>Forgot Password</Text>
                </View>
            </View>
            <View style={{ flex: 9, backgroundColor: "#F5F7FF" }}>
                <Text style={{ fontFamily: "Inter", fontSize: 24, fontWeight: "700", color: "#240F51" }}>Enter your email and we'll send you a link to reset your password.</Text>

                <Spacer height={32} />
                <View style={{}}>
                    <FloatingLabelInput
                        label={'Email'}
                        value={emailCont}
                        onChangeText={value => setemailCont(value)}
                        containerStyles={{ height: 61, width: 335, borderRadius: 24, backgroundColor: "white" }}
                        labelStyles={{ paddingLeft: 20, fontSize: 10 }}
                        inputStyles={{ paddingLeft: 20, fontSize: 14, fontWeight: "700" }}
                    />
                </View>
            </View>

            <TouchableButton title={"Continue"} textStyle={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: '600' }} internalViewBGColor={{ flexDirection: "column" }} containerStyle={{ width: 335, height: 62, alignSelf: "center" }} onPress={() => {
                navigation.navigate("ForgotPasswordSent");
            }} />
        </SafeAreaView>
    )
}

export default ForgotPassword;
