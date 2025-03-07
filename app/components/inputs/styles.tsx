import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    marginTop: 3
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    paddingRight: 40, // Espaço para o ícone
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 11,
  },

  iconContainer: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
