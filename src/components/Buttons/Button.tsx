import React from 'react';
import { Container } from './Button.styled';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'first' | 'second' | 'third' | 'fourth';
  width?: 'openModal' | 'postEdit' | 'addSave' | 'delete';
};

export const Button = ({ onClick, children, color, width }: ButtonProps) => {
  return (
    <Container onClick={onClick} color={color} width={width}>
      {children}
    </Container>
  );
};