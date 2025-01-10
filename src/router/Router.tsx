import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type RouterProps = {
  children: React.ReactNode;
};

export const Router = ({ children }: RouterProps) => (
  <BrowserRouter>{children}</BrowserRouter>
);