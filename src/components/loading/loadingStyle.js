import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  loadingContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  buttonLoading: {
    width: 200,
  },
  titleLoading: {
    fontSize: 18,
    fontWeight: '900',
  },
});
