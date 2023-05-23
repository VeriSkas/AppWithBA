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
          message: 'Entered text is too short',
        },
        pattern: {
          value: regExEmail,
          message: 'Enter correct email',
        },
      },
    },
  },
  name: {
    label: 'name',
    type: 'text',
    register: {
      name: 'name',
      rules: {
        required: {
          value: true,
          message: 'This field is required',
        },
        minLength: {
          value: 3,
          message: 'Entered text is too short',
        },
        maxLength: {
          value: 32,
          message: 'Entered text is too long',
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
          value: 5,
          message: 'This field must be 5 symbols or more',
        },
        maxLength: {
          value: 32,
          message: 'This field must be 32 symbols or less',
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
          value: 5,
          message: 'This field must be 5 symbols or more',
        },
        maxLength: {
          value: 32,
          message: 'This field must be 32 symbols or less',
        },
      },
    },
  },
};
