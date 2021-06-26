import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

function Button({isOutlined = false, ...rest}: ButtonProps) {
  return (
    <button 
      className={`button ${isOutlined ? 'outlined' : ''}`} 
      {...rest} 
    />
  )
}

export { Button }