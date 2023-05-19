import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LoginFormData, LoginFormProps } from '../config/interface';
import { MyLink } from '../../../shared/ui/MyLink';
import { Button } from '../../../shared/ui/Button';
import { MyForm } from '../../../shared/ui/MyForm';
import { inputRender } from '../../../shared/lib/utils/inputRender';
import { inputsSettings } from '../config/loginInputsSettings';
import { useLogInMutation } from '../../../shared/api/endpoints/auth/authEndpoint';
import { useMyDispatch } from '../../../shared/lib/utils/storeHooks';
import { setUser } from '../../../shared/model/slices/userSlice/userSlice';
import { PATH } from '../../../shared/config/constants/paths';
import classes from './styles.module.scss';

export const LoginForm: FC<LoginFormProps> = ({ title, linkTo, linkText }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [logInHandler] = useLogInMutation();
  const dispatch = useMyDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    mode: 'all',
  });

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    try {
      const response = await logInHandler(data).unwrap();

      dispatch(setUser(response));
      navigate(PATH.home);
    } catch (error) {}
  };

  return (
    <div className={classes.LoginForm}>
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
