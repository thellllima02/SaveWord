import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Link } from 'expo-router';




export default function SingUp() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validaSing = () =>{
        if(user.trim() === '' || password.trim() ==='' || confpassword.trim() ==='' || email.trim() ==='' ){
            alert('Preencha todos os campos');
            return;
        }
        alert('Cadastro efetuado com sucesso');

        <Link href="../../"></Link>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sing Up</Text>
            <Input
                title=''
                placeholder='User'
                value={user}
                onChangeText={setUser}
                icon={<FontAwesome name="user" size={24} color="gray" />}
            />
            <Input
                title=''
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                icon={<Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />}
                secureTextEntry={!passwordVisible} // Ativa/desativa a máscara da senha
                // Alterna o estado de visibilidade ao clicar no ícone
                onIconPress={() => setPasswordVisible(prev => !prev)}
            />
            <Input
                title=''
                placeholder='Confirm Password'
                value={confpassword}
                onChangeText={setConfPassword}
                icon={<Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />}
                secureTextEntry={!passwordVisible} // Ativa/desativa a máscara da senha
                // Alterna o estado de visibilidade ao clicar no ícone
                onIconPress={() => setPasswordVisible(prev => !prev)}
            />
            <Input
                title=''
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                icon={<FontAwesome name="envelope" size={24} color="gray" />}
            />


            <Button title='Accepted' classButton='access' classTexto='texto' onPress={validaSing}/>

            <Link style={styles.sing} href="../../" > To go back</Link>
        </View>
    );
}


