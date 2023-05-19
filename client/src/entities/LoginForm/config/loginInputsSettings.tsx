import { IInputsSettings } from '../../../shared/config/interfaces';
import { regExEmail } from '../../../shared/lib/utils';
import { LoginFormData } from './interface';

export const inputsSettings: { [key in keyof LoginFormData]: IInputsSettings } = {
  email: {
    label: 'email',
    type: 'email',
    register: {
      name: 'email',
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
        minLength: {
          value: 6,
          message: 'Entered email is too short',
        },
        pattern: {
          value: regExEmail,
          message: 'Enter correct email',
        },
      },
    },
  },
  password: {
    label: 'password',
    type: 'password',
    register: {
      name: 'password',
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
        minLength: {
          value: 6,
          message: 'This field must be 6 symbols or more',
        },
      },
    },
  },
};
