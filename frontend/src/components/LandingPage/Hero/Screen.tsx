import React from 'react';
import styled from 'styled-components';

interface ButtonProp  {
  text?: string,
  fontSize?: string
  fontWeight?: string
  color?: string
  className?: string
}

const Button:React.FC<ButtonProp> = ({text, fontSize, fontWeight, color, className}) => {
  return (
    <StyledWrapper fontSize={fontSize} fontWeight={fontWeight} color={color} className={className}>
      <a href="#" className="btn-shine">{text}</a>
    </StyledWrapper>
  );
}

interface StyledWrapperProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .btn-shine {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 48px;
    color: ${({color}) => color? color : '#fff'};
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'bold'};
    font-size: ${({fontSize}) => fontSize ? fontSize : '1.5rem'};
    text-decoration: none;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
  }
  @-moz-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-webkit-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-o-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }`;

export default Button;
