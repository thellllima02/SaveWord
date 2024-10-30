import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import styles from './styles'; // Importa o arquivo de estilo

function Botao() {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>Entrar</Text>
        </TouchableOpacity>
    );
}

export default Botao;
