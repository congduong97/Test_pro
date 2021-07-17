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

const InputFields = forwardRef((props: IInputFields, ref?: any) => {
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
  return (
    <View style={container}>
      {props.label ? <Text style={label}>{props.label}</Text> : null}
      <View style={styles.viewInput}>
        <TextInput
          ref={ref}
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
        {props.iconRight ? (
          <TouchableOpacity style={styles.wrapIcon}>
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
export default InputFields;
