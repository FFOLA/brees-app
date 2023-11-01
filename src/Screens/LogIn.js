import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/space";
import TouchableButton from "../../components/TouchableButton";
import CustomTextInput from "../components/CustomTextInput";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { CheckBox } from "@ui-kitten/components";

const LogIn = ({ navigation }) => {
    const [nameCont, setnameCont] = useState('');
    const [emailCont, setemailCont] = useState('');
    const [passwordCont, setpasswordCont] = useState('');
    const [show, setShow] = useState(false);

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
                    <Text style={{ fontFamily: "Inter", fontSize: 16, color: "#131313" }}>Sign Up</Text>
                </View>
            </View>
            <View style={{ flex: 9, backgroundColor: "#F5F7FF" }}>
                <Text style={{ fontFamily: "Inter", fontSize: 24, fontWeight: "700", color: "#240F51" }}>Welcome back</Text>
                <Spacer height={20} />
                <Text style={{ fontFamily: "Inter", fontSize: 14, color: "#292B2D" }}>Hey you’re back, fill in your details to get back in</Text>
                <Spacer height={20} />
                <View style={{}}>
                    <FloatingLabelInput
                        label={'Email'}
                        togglePassword={show}
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
                        label={'Password'}
                        togglePassword={show}
                        isPassword
                        value={passwordCont}
                        onChangeText={value => setpasswordCont(value)}
                        customShowPasswordComponent={<Text>Show</Text>}
                        customHidePasswordComponent={<Text>Hide</Text>}
                        containerStyles={{ height: 61, width: 335, borderRadius: 24, backgroundColor: "white" }}
                        labelStyles={{ paddingLeft: 20, fontSize: 10 }}
                        inputStyles={{ paddingLeft: 20, fontSize: 14, fontWeight: "700" }}
                    />
                </View>
                <Spacer height={32} />
                <Text style={{ margin: 2, marginLeft: 15, textAlign: "right", color: "#2C14DD" }} onPress={() => navigation.navigate("ForgotPassword")}>
                    Forgot Password?
                </Text>
            </View>
            <View style={{ flex: 3, flexDirection: "row", justifyContent: "center", alignItems: "flex-end" }}>
                <TouchableButton title={"Register"} textStyle={{ fontSize: 16, fontWeight: '600', color: "#2B14DD" }} buttonStyle={{ backgroundColor: '#2B14DD19', }} internalViewBGColor={{ backgroundColor: "#2B14DD19" }} containerStyle={{ width: "45%", height: "30%", bottom: "1.5%" }} onPress={() => {
                    navigation.navigate("Welcome");
                }} />
                <TouchableButton title={"Login"} textStyle={{ color: "white", fontSize: 16, fontWeight: '600' }} containerStyle={{ width: "60%", height: "40%" }} onPress={() => {
                    navigation.navigate("Login");
                }} />
            </View>
        </SafeAreaView>
    )
}

export default LogIn;
