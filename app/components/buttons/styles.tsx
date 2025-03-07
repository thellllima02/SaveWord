import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
    botao: {
        paddingVertical: 12,        // Espaçamento vertical
        paddingHorizontal: 60,      // Espaçamento horizontal
        borderRadius: 12,           // Borda arredondada
        alignItems: "center",       // Alinhamento do texto
        justifyContent: "center",   // Alinhamento do texto
        marginTop: 47,              // Margem superior
       

    },
    texto: {
        color: "#000000",             // Cor do texto
        fontSize: 25,               // Tamanho da fonte
        fontWeight: "bold",         // Negrito
    },
    forgot:{
        fontSize: 15,

    },
    access:{
        backgroundColor: theme.light.success,
    },
    warning:{
        backgroundColor: theme.light.warning,
    }

});
export default styles;