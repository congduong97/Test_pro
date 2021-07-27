import React, { useState } from 'react';
import { Button, Box } from 'native-base';
import { navigate } from '@router/navigationService';
import { APP_SCREEN } from '@router/screenType';
import { TextLang, InputFields } from '@components';
import { FormProvider, useForm } from 'react-hook-form';
import { styles } from 'styled-system';
import I18n, { TypeLanguage } from '@I18n';
import { AsyncStoreHelpers, scale } from '@share/utils';
import { AppColors, KEY_LANGUAGE } from '../../../share';
import { useTranslation } from 'react-i18next';
import { useGetCommentQuery } from '@services';
import { Icon } from '@assets/svg';

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
  const [showPassword, setShowPassword] = useState<boolean>(true);

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
          secureTextEntry={showPassword}
          iconRight={
            showPassword ? <Icon name="eye" /> : <Icon name="eye-off" />
          }
          actionRight={() => setShowPassword(!showPassword)}
        />
        <Button onPress={formMethod.handleSubmit(onSubmit, onErrors)}>
          {t('text.submit')}
        </Button>
      </FormProvider>
    </Box>
  );
}
