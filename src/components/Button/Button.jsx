import React from 'react';
import { Btn } from './Button.styled';

export const Button = ({ title, onClick }) => {
  return <Btn onClick={onClick}>{title}</Btn>;
};
