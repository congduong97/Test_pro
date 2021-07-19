import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text as ReactNativeText, StyleSheet } from 'react-native';
import { ITextLang } from './ITextLang';
import equals from 'react-fast-compare';
const styles = StyleSheet.create({
  text: {},
});

function TextComp(props: ITextLang) {
  const { t } = useTranslation();

  const i18nText = useMemo(
    () => props.tx && t(props.tx, props.txOptions),
    [props.tx, props.txOptions, t],
  );

  const content = useMemo(
    () => i18nText || props.text || props.children,
    [i18nText, props.text, props.children],
  );

  const styleText = StyleSheet.compose({
    ...styles.text,
    ...props.customStyleText,
  });

  return (
    <ReactNativeText allowFontScaling={false} {...props} style={styleText}>
      {content}
    </ReactNativeText>
  );
}

export const TextLang = memo(TextComp, equals);
