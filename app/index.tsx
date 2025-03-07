import { TouchableOpacity, Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Link, router } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import Input from "./components/inputs";
import Button from "./components/buttons";

export default function HomeScreen() {
  function desktop(){
    if (user.trim() === '' || password.trim() === '') {
      alert('Usuario ou senha são obrigatorios');
      return;
    }
    alert('Login efetuado com sucesso');
    setUser('');
    setPassword('');
    router.navigate("./screens/desk")
  }
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.text}>Save PassWord</Text>
          <Input
            title=''
            placeholder='User'
            value={user}
            icon={<FontAwesome name="user" size={24} color="gray" />}
            onChangeText={setUser}
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

          <View style={styles.Checkbox}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text style={styles.remenber}>Remember User</Text>
          </View>

          <Button title='Access' classButton='access' classTexto='texto' onPress={desktop} />
          <Link style={styles.sing} href="./screens/singUp">Sing Up</Link>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
