import {Theme, ThemeColorVariants, ThemeTypographyVariants} from '@src/styles/theme';

export interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
}

export interface ListTaskProps {
  listTask: TaskProps[];
  changeStatusTask: (task: TaskProps) => void;
  deleteTask: (task: TaskProps) => void;
}

export interface ItemListProps {
  task: TaskProps;
  changeStatusTask: (task: TaskProps) => void;
  deleteTask: (task: TaskProps) => void;
}

export interface ModalProps {
  children: React.ReactNode;
  modalVisible: boolean;
  textSuccess?: string;
  onSuccess: () => void;
  textCancel?: string;
  onCancel: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | string;
  onPress?: () => void;
}

export interface ButtonStyleProps {
  variant: 'success' | 'error' | string;
}

export interface InputProps {
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  onChangeWithAction?: (value: string) => void;
}

export interface NewTaskProps {
  modalVisible: boolean;
  closeModal: () => void;
  createTask: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface TextProps {
  children: React.ReactNode;
  color?: ThemeColorVariants;
  variant?: ThemeTypographyVariants;
  checked?: boolean;
}

export interface TextStyleProps {
  theme?: Theme;
  color?: ThemeColorVariants;
  variant?: ThemeTypographyVariants;
  checked?: boolean;
}
