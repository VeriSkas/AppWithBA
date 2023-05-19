import React from 'react';
import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';

import { Input } from '../../ui/Input';
import { IInputsSettings } from '../../config/interfaces';

export function inputRender<T extends FieldValues>(
  register: UseFormRegister<T>,
  errors: FieldErrors<T>,
  inputSettings: { [key in keyof T]: IInputsSettings }
): React.ReactElement {
  return <>
    { Object.values(inputSettings).map((item) => {
      return (
        <Input
          key={item.register.name}
          label={item.label}
          type={item.type}
          register={register(item.register.name as Path<T>, item.register.rules)}
          error={errors[item.register.name]?.message as string}
        />
      );
    })}
  </>
}
