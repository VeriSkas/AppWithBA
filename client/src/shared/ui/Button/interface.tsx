export interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  type?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary';
  testId?: string;
}
