import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#4CAF50", // Cor de fundo
        paddingVertical: 15,        // Espaçamento vertical
        paddingHorizontal: 32,      // Espaçamento horizontal
        borderRadius: 12,           // Borda arredondada
        alignItems: "center",       // Alinhamento do texto
    },
    texto: {
        color: "white",             // Cor do texto
        fontSize: 16,               // Tamanho da fonte
        fontWeight: "bold",         // Negrito
    }
});

export default styles;
