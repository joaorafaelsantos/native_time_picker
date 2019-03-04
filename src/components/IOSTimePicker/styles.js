import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  contentContainer: {
    width: 300,
    height: 305,
    backgroundColor: 'rgba(255,255,255,0.97)',
    borderRadius: 15
  },
  cancelContainer: {
    flex: 0,
    justifyContent: 'center',
    marginVertical: 20,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.97)',
  }
});
