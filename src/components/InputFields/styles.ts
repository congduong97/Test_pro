import { StyleSheet } from 'react-native';
import { shadows } from '@share/themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  viewInput: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    // height: 50,
    paddingVertical: 15,
    ...shadows[6],
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 0,
    color: 'black',
    height: '100%',
  },
  wrapIcon: {
    backgroundColor: '#f9f9f9',
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 30,
  },
  textError: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '500',
  },
});
