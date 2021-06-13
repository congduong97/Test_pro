import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '@hooks/appRedux';
import {nameSlices} from '@constants/stateStore';
export default function SignUpScreen() {
  const {data} = useAppSelector(state => state.authSlices.signInSlices);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
}
