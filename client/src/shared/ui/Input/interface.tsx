export interface InputProps {
  label: string;
  type?: 'text' | 'number' | 'email' | 'password';
  defaultValue?: string;
  readonly?: boolean;
  placeholder?: string;
  error?: string;
  register?: any;
}
