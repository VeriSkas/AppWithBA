import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { SignUpFormData, SignUpFormProps } from '../config/interface';
import { signUpInputsSettings } from '../config/signUpInputsSettings';
import { inputRender, useMyDispatch } from '../../../shared/lib/utils';
import { MyLink, Button, MyForm } from '../../../shared/ui';
import { useRegisterMutation } from '../../../shared/api/endpoints';
import { PATH } from '../../../shared/config/constants';
import { setUser } from '../../../shared/model/slices';
import classes from './styles.module.scss';

export const SignUpForm: FC<SignUpFormProps> = ({ title, linkTo, linkText }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [registerHandler] = useRegisterMutation();
  const dispatch = useMyDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    mode: 'all',
  });
  const inputsSettings = { ...signUpInputsSettings };

  inputsSettings.password2.register.rules.validate = (val: string) => {
    if (watch('password') !== val) {
      return 'Your passwords do no match';
    }
  };

  const onSubmit = async ({ email, password, name }: SignUpFormData): Promise<void> => {
    try {
      const response = await registerHandler({ email, password, name }).unwrap();

      dispatch(setUser(response));
      navigate(PATH.home);
    } catch (error) {}
  };

  return (
    <div className={classes.SignUpForm}>
      <h1>{title}</h1>
      <MyForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputRender(register, errors, inputsSettings)}
          <div className={classes.FormBtns}>
            <Button disabled={!isValid}>{t('BtnText.submit')}</Button>
            <MyLink to={linkTo} text={linkText} />
          </div>
        </form>
      </MyForm>
    </div>
  );
};
