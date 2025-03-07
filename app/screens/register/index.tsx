import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import styles from "./styles";
import Input from "@/app/components/inputs";
import Button from "@/app/components/buttons";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from 'react';

export default function Register() {
    const [user, setUser] = useState('');
    const [link, setLink] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);



    return (


        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.container}>
                    <Text style={styles.text}>Save Password</Text>
                    <Input
                        title=''
                        placeholder='Title'
                        value={user}
                        icon={<FontAwesome name="tag" size={24} color="gray" />}
                        onChangeText={setUser}
                    />
                    <Input
                        title=''
                        placeholder='Link'
                        value={link}
                        icon={<FontAwesome name="mouse-pointer" size={24} color="gray" />}
                        onChangeText={setLink}
                    />
                    <Input
                        title=''
                        placeholder='Email/User name'
                        value={email}
                        icon={<FontAwesome name="user-plus" size={24} color="gray" />}
                        onChangeText={setEmail}
                    />
                    <Input
                        title=''
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        icon={<Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />}
                        secureTextEntry={!passwordVisible}
                        onIconPress={() => setPasswordVisible(prev => !prev)}
                    />
                    <Input
                        title=''
                        placeholder='Description'
                        value={description}
                        icon={<FontAwesome name="file-text" size={24} color="gray" />}
                        onChangeText={setDescription}
                    />
                    <Button title='Accepted' classButton='access' classTexto='texto' />
                    <Link style={styles.sing} href="../"> To go back</Link>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>


    );
}