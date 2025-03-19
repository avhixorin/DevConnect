import React from 'react';
import "./Screen.css"

interface ButtonProp  {
  text?: string,
  className?: string
}

const Button:React.FC<ButtonProp> = ({text, className}) => {
  return (
    <div className={className}>
      <a href="#" className="btn-shine">{text}</a>
    </div>
  );
}

export default Button;
