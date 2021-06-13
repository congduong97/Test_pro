import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '@hooks/appRedux';
import {requestSignInSuccess} from '@store/reducers/authSlices/signInSlices';
import {navigate} from '@router/navigationService';
import {APP_SCREEN} from '@router/screenType';
import {AsyncStoreHelpers} from '@utils/asyncStorage';
export default function SignInScreen() {
  const dispatch = useAppDispatch();
  const _handleDispatch = async () => {};
  const [val, setVal] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignInScreen</Text>
      <TextInput
        placeholder="enter"
        style={{borderWidth: 1, width: 200}}
        value={val}
        onChangeText={e => setVal(e)}
      />
      <Button title="send" onPress={_handleDispatch} />
    </View>
  );
}
