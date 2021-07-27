import { StyleSheet } from 'react-native';
import { shadows } from '@share/themes';
import { scale } from '@share/utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: scale(15),
  },
  label: {
    fontSize: scale(18),
    color: 'black',
    fontWeight: '600',
  },
  viewInput: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
    borderRadius: scale(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10),
    ...shadows[0],
  },
  input: {
    flex: 1,
    fontSize: scale(16),
    lineHeight: 0,
    color: 'black',
    height: '100%',
    paddingVertical: scale(15),
  },
  wrapIcon: {
    backgroundColor: '#f9f9f9',
    height: scale(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(15),
    width: scale(30),
  },
  textError: {
    color: 'red',
    fontSize: scale(14),
    marginTop: scale(10),
    fontWeight: '500',
  },
});
