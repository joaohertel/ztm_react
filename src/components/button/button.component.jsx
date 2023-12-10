import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton
}
from './button.styles';

export const BUTTON_TYPE_CLASS = {
  google:'google-sign-in',
  inverted:'inverted',
  base:'base'
}

// this anonymous function have as default paramenter the base button
const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => ({
  [BUTTON_TYPE_CLASS.base]: BaseButton,
  [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
}[buttonType]
);


const Button = ({ buttonType, children, ...otherProps}) =>{

  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>
      { children }
    </CustomButton>
  )
}

export default Button;