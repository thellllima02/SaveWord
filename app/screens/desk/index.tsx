import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from "./styles";
import Input from "@/app/components/inputs";
import Button from "@/app/components/buttons";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Desk() {
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
            <View>

            </View>
            <Link style={styles.sing} href="/screens/register">Register Accounts</Link>
            <Link style={styles.sing} href="../../" > To go back</Link>
            


        </View>
    );
}