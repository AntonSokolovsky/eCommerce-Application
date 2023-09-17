export type ElementParams = {
  tag: string;
  classNames: string[];
  textContent: string;
  callback: null | ((event: Event) => void);
};

export type InputElementParams = {
  tag: string;
  classNames: string[];
  textContent: string;
  type: string;
  value: string;
  action: string;
  disabled: boolean;
  callback: null | ((event: Event) => void);
};
  
export type ViewParams = {
  tag: string;
  classNames: string[];
  textContent?: string;
  callback?: null | ((event: Event) => void);
};

export type Attributes = {
  alt?: string;
  autocomplete?: string;
  capture?: string;
  checked?: string;
  disabled?: string;
  href?: string;
  list?: string;
  max?: string;
  maxlength?: string;
  min?: string;
  minlength?: string;
  multiple?: string;
  name?: string;
  pattern?: string;
  placeholder?: string;
  size?: string;
  src?: string;
  type?: string;
  value?: string;
  style?: string;
  for?: string;
};