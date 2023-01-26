import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: 300,
    paddingHorizontal: 20,
    padding: 20,
  },
  titleStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 10,
  },
  inputContainerStyle: {
    color: 'red',
  },
  inputStyle: {
    fontSize: 18,
    color: 'white',
    textDecorationLine: 'none',
  },
  relative: {
    position: 'relative',
  },
  inputError:{
    borderBottomWidth:1,
    borderColor:'red'
  }
});
