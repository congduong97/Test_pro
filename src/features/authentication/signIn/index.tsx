import React from 'react';
import { Button, Box, CloseIcon } from 'native-base';
import { navigate } from '@router/navigationService';
import { APP_SCREEN } from '@router/screenType';
import { TextLang, InputFields } from '@components';
import { StyleSheet } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { styles } from 'styled-system';
import I18n, { TypeLanguage } from '@I18n';
import { Text } from 'react-native-svg';
import { AsyncStoreHelpers, translate } from '@share/utils';
import { KEY_LANGUAGE } from '../../../share';

const style = StyleSheet.create({
  customS: {
    backgroundColor: 'green',
  },
});

export default function SignIn() {
  const formMethod = useForm();

  const onSubmit = (form: any) => {
    console.log(form);
  };
  const onErrors = (errors: any) => {
    console.log('log on error', errors);
  };
  return (
    <Box width="100%" px="5">
      <FormProvider {...formMethod}>
        <InputFields
          name="username"
          label="label.username"
          placeholder={translate('label.username')}
          rules={{ required: 'username is required!' }}
        />
        <InputFields
          name="password"
          label="label.password"
          placeholder={translate('label.password')}
          rules={{ required: 'password is required!' }}
        />
        <Button onPress={formMethod.handleSubmit(onSubmit, onErrors)}>
          Submit
        </Button>
      </FormProvider>
      <TextLang tx="errors.email" />
      <TextLang tx="Date_Format" txOptions={{ date: new Date() }} />
      <Button
        onPress={() => {
          I18n.changeLanguage(TypeLanguage.VN);
        }}>
        vi
      </Button>
      <Button
        onPress={async () => {
          I18n.changeLanguage(TypeLanguage.ES);
          await AsyncStoreHelpers.setOne(KEY_LANGUAGE, TypeLanguage.ES);
        }}>
        es
      </Button>
      <Button
        onPress={() => {
          I18n.changeLanguage(TypeLanguage.JP);
        }}>
        jp
      </Button>
      <Button
        onPress={() => {
          I18n.changeLanguage(TypeLanguage.TW);
        }}>
        tw
      </Button>
    </Box>
  );
}
