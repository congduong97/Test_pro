import { CloseIcon, Icon } from 'native-base';
import React, { forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FieldValues, IInputFields } from './IInputFields';
import styles from './styles';
import { useController, useFormContext } from 'react-hook-form';
import { TextLang } from '../TextLang';

export const InputFields = forwardRef((props: IInputFields, ref?: any) => {
  // valid props

  if (!props.name) throw new Error('props name need to be provider!');

  // form context

  const formContext = useFormContext<FieldValues>();
  const {
    formState: { errors },
    control,
  } = formContext;
  // compose styles custom

  const container = StyleSheet.compose({
    ...styles.container,
    ...props.customStyleWrap,
  });
  const label = StyleSheet.compose({
    ...styles.label,
    ...props.customStyleLabel,
  });
  const input = StyleSheet.compose({
    ...styles.input,
    ...props.customStyleInput,
  });

  const { field } = useController({
    name: props.name,
    control,
    rules: props.rules,
    defaultValue: props.defaultValue,
  });
  const handleActionRight = () => {
    if (typeof props.actionRight === 'function') {
      props.actionRight();
    }
  };
  return (
    <View style={container}>
      {props.label ? <TextLang tx={props.label} style={label} /> : null}
      <View style={styles.viewInput}>
        <TextInput
          ref={ref}
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
        {props.iconRight ? (
          <TouchableOpacity onPress={handleActionRight} style={styles.wrapIcon}>
            {props.iconRight}
          </TouchableOpacity>
        ) : null}
      </View>
      {errors[props.name] ? (
        <Text style={styles.textError}>{errors[props.name]?.message}</Text>
      ) : null}
    </View>
  );
});
