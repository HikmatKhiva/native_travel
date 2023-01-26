import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  header: {
    backgroundColor: '#397af8',
    color: 'white',
    paddingHorizontal: 20,
    padding: 10,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDown: toggle => ({
    position: 'absolute',
    backgroundColor: 'red',
    right: 10,
    top: 40,
    borderRadius: 10,
    display: !toggle ? 'none' : 'flex',
    width: 150,
  }),
  dropItem: {
    padding: 5,
    paddingHorizontal: 20,
    color: 'yellow',
  },
});
