import React from 'react';
import { Button, Box, CloseIcon } from 'native-base';
import { navigate } from '@router/navigationService';
import { APP_SCREEN } from '@router/screenType';
import InputFields from '@components/InputFields';
import { StyleSheet } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';
import { styles } from 'styled-system';

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
          label="username"
          placeholder="username"
          rules={{ required: 'username is required!' }}
        />
        <InputFields
          name="password"
          label="password"
          placeholder="password"
          rules={{ required: 'password is required!' }}
        />
        <Button onPress={formMethod.handleSubmit(onSubmit, onErrors)}>
          Submit
        </Button>
      </FormProvider>
    </Box>
  );
}
