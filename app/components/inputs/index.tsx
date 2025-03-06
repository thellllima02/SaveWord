import React from "react";
import { Text, TextInput, TextInputProps, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import global from "../../styles/global";

type InputProps = TextInputProps & {
    title?: string;
    icon?: React.ReactNode;
    onIconPress?: () => void; // Função para alternar a visibilidade do ícone
};

export default function Input({ title, icon, onIconPress, ...rest }: InputProps) {
    return (
        <View style={styles.inputContainer}> 
            {title && <Text style={global.text}>{title}</Text>}
            
            <View style={styles.inputWrapper}>
                <TextInput style={[styles.input, global.text]} {...rest} />
                {icon && <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>{icon}</TouchableOpacity>}
            </View>
        </View>
    );
}
