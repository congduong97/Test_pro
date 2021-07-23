import React from 'react';
import { Button, Box, CloseIcon, Text } from 'native-base';
import { navigate } from '@router/navigationService';
import { APP_SCREEN } from '@router/screenType';
import { TextLang, InputFields } from '@components';
import { StyleSheet } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { styles } from 'styled-system';
import I18n, { TypeLanguage } from '@I18n';
import { AsyncStoreHelpers } from '@share/utils';
import { KEY_LANGUAGE } from '../../../share';
import { useTranslation } from 'react-i18next';
import { useGetCommentQuery } from '@services';

const style = StyleSheet.create({});

interface formSignIn {
  username: string;
  password: string;
}

interface formSignInError {
  type: string;
  message: string;
  ref: any;
}

export default function SignIn() {
  const formMethod = useForm();
  const { t } = useTranslation();

  const { data, error, isLoading } = useGetCommentQuery(1);

  const onSubmit = (form: formSignIn) => {
    console.log(form);
  };
  const onErrors = (errors: formSignInError) => {
    console.log('log on error', errors);
  };
  return (
    <Box width="100%" px="5" mt="10">
      <FormProvider {...formMethod}>
        <InputFields
          name="username"
          label="label.username"
          placeholder={t('label.username')}
          rules={{ required: 'username is required!' }}
        />
        <InputFields
          name="password"
          label="label.password"
          placeholder={t('label.password')}
          rules={{ required: 'password is required!' }}
        />
        <Button onPress={formMethod.handleSubmit(onSubmit, onErrors)}>
          {t('text.submit')}
        </Button>
      </FormProvider>
    </Box>
  );
}
