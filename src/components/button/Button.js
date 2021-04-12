import React from 'react';
import './Button.scss';

function Button({ children, clickHandler, type }) {
  return (
    <button
      type="button"
      className={type === 'outline' ? 'outline' : 'default'}
      onClick={clickHandler}
    >
      { children }
    </button>
  );
};

export default Button;