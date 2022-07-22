import React, { FC } from 'react';
import styles from './CreateProduct.module.scss';

interface CreateProductProps {}

const CreateProduct: FC<CreateProductProps> = () => (
  <div className={styles.CreateProduct} data-testid="CreateProduct">
    CreateProduct Component
  </div>
);

export default CreateProduct;
