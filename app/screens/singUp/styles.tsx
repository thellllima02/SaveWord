import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F7F8',
  },
  text: {
    fontSize: 43,
    fontFamily: 'Itim',
    margin: 38
  },
  remenber: {
    fontSize: 20,
    marginLeft: 5
  },
  Checkbox: {
    marginTop: 50,
    flexDirection: 'row',
    marginRight: 130
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  sing: {
    margin: 20,
    fontSize: 20,
    color: '#3e3a3a'
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
  },

  eyeIcon: {
    position: 'absolute',
    right: 20, // Ajuste conforme necessário
    top: '50%',
    transform: [{ translateY: -12 }], // Centraliza o ícone verticalmente
  },

});

export default styles;