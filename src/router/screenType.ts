export enum APP_SCREEN {
  // ROOT
  UN_AUTHORIZE = '@UN_AUTHORIZE',
  AUTHORIZE = '@AUTHORIZE',
  SPLASH = '@SPLASH',

  // 	UN_AUTHENTICATION SCREEN
  SIGN_IN_SCREEN = '@SIGN_IN_SCREEN',
  SIGN_UP_SCREEN = '@SIGN_UP_SCREEN',
  INTRO_SCREEN = '@INTRO_SCREEN',
  REMINDER_SCREEN = '@REMINDER_SCREEN',

  // AUTHENTICATION SCREEN
  HOME_SCREEN = '@HOME_SCREEN',
  SETTING_SCREEN = '@SETTING_SCREEN',

  // SPLASH

  SPLASH_SCREEN = '@SPLASH_SCREEN',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.SIGN_IN_SCREEN]: undefined;
  [APP_SCREEN.SIGN_UP_SCREEN]: undefined;
  [APP_SCREEN.INTRO_SCREEN]: undefined;
  [APP_SCREEN.REMINDER_SCREEN]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME_SCREEN]: undefined;
  [APP_SCREEN.SETTING_SCREEN]: undefined;
};

export type SplashParamsList = {
  [APP_SCREEN.SPLASH_SCREEN]: undefined;
};

export type RootStackParamsList = {
  [APP_SCREEN.UN_AUTHORIZE]: UnAuthorizeParamsList;
  [APP_SCREEN.AUTHORIZE]: AuthorizeParamsList;
  [APP_SCREEN.SPLASH_SCREEN]: SplashParamsList;
};
