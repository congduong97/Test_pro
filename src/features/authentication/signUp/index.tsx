import React from 'react';
import { Button, Box } from 'native-base';
import { navigate } from '@router/navigationService';
import { APP_SCREEN } from '../../../router/screenType';

export default function SignUp() {
  return (
    <Box>
      <Button
        onPress={() => navigate(APP_SCREEN.SIGN_IN_SCREEN)}
        bg="red.500"
        _pressed={{ bg: 'red.700' }}
        _text={{ color: 'white' }}>
        Go to Sign in
      </Button>
    </Box>
  );
}
