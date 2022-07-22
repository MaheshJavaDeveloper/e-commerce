import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateProduct from './CreateProduct';

describe('<CreateProduct />', () => {
  test('it should mount', () => {
    render(<CreateProduct />);
    
    const createProduct = screen.getByTestId('CreateProduct');

    expect(createProduct).toBeInTheDocument();
  });
});