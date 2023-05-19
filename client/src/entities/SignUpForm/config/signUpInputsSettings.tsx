import { IInputsSettings } from '../../../shared/config/interfaces';
import { regExEmail } from '../../../shared/lib/utils';
import { SignUpFormData } from './interface';

export const signUpInputsSettings: { [key in keyof SignUpFormData]: IInputsSettings } = {
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
  password2: {
    label: 'repeat password',
    type: 'password',
    register: {
      name: 'password2',
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
