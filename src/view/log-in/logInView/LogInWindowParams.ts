import validationEmail from '../../../../src/utilities/validation/validationEmail';
import validationPassword from '../../../../src/utilities/validation/validationPass';
// import validationComfrimPassword from '../../../../src/utilities/validation/validationComfrimPass';
import showHidePass from '../../../../src/utilities/showHidePass';

export const LogInFormViewParams = {
  paramsTelOrEmail: {
    tag: 'span',
    classNames: ['Tel_text'],
    textContent: 'telephone or Email',
    callback: null,
  },
  paramsMailInContainer: {
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsTelOrEmailInput: {
    tag: 'input',
    classNames: ['input', 'Email_input'],
    textContent: '',
    value: '',
    action: '',
    type: 'email',
    disabled: false,
    callback: validationEmail,
  },
  RequirementsToEmail: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  firstRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must be properly formatted (e.g., user@example.com).',
    callback: null,
  },
  secondRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must not contain leading or trailing whitespace.',
    callback: null,
  },
  thirdRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must contain a domain name (e.g., example.com).',
    callback: null,
  },
  
  forthRequirementParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Email address must contain an \'@\' symbol separating local part and domain name.',
    callback: null,
  },
  paramsPassword: {
    tag: 'span',
    classNames: ['Password_text'],
    textContent: 'Password',
    callback: null,
  },
  PasswordInputContainerParams: {
    tag: 'div',
    classNames: ['input_container'],
    textContent: '',
    callback: null,
  },
  paramsPasswordInput: {
    tag: 'input',
    classNames: ['input', 'password_input'],
    textContent: '',
    type: 'password',
    value: '',
    action: '',
    disabled: false,
    callback: validationPassword,
  },
  RequirementsToPassword: {
    tag: 'div',
    classNames: ['Requirements'],
    textContent: '',
    callback: null,
  },
  firstRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must be at least 8 characters long.',
    callback: null,
  },
  secondRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one uppercase letter (A-Z).',
    callback: null,
  },
  thirdRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one lowercase letter (a-z).',
    callback: null,
  },
  forthRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must contain at least one digit (0-9).',
    callback: null,
  },
  FivesRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: '(Optional) Password must contain at least one special character (e.g., !@#$%^&*).',
    callback: null,
  },
  SixRequirementPasswordParams: {
    tag: 'p',
    classNames: ['Requirement'],
    textContent: 'Password must not contain leading or trailing whitespace.',
    callback: null,
  },
  showHidePasswordParams: {
    tag: 'div',
    classNames: ['showPass'],
    textContent: '',
    callback: showHidePass,
  },
  paramsSignInButton: {
    tag: 'input',
    classNames: ['buttonRegSign'],
    textContent: 'Sign In',
    value: 'Sign In',
    action: '',
    type: 'submit',
    disabled: true,
    callback: null,
  },
  ParamsForgotLink: {
    tag: 'span',
    classNames: ['forgotPassLink'],
    textContent: 'forgot a password',
    callback: null,
  },
  ParamsCreateLink: {
    tag: 'span',
    classNames: ['logInLink'],
    textContent: 'Create an account',
    callback: null,
  },
};