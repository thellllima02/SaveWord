import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from "./styles";
import Input from "@/app/components/inputs";
import Button from "@/app/components/buttons";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function Desk() {
    function register(){
        router.navigate("/screens/register")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Save Password</Text>
            <Input
                title=''
                placeholder='Search'
                value=""
                icon={<FontAwesome name="search" size={24} color="gray" />}
            />
            <Text style={styles.text2}>My Accounts</Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                >
                    <View>
                        <Text>addsfARGAR34</Text>
                        <Text>asd</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>addsfARGAR34</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>addsfARGAR34</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>addsfARGAR34</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>
                        <Text>das</Text>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <Button title='Register Accounts' classButton='access' classTexto='texto' onPress={register} />
            <Link style={styles.sing} href="../../" > To go back</Link>
        </View>

    );
}