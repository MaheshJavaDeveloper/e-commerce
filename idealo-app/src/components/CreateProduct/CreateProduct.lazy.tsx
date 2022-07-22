import React, { lazy, Suspense } from 'react';

const LazyCreateProduct = lazy(() => import('./CreateProduct'));

const CreateProduct = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCreateProduct {...props} />
  </Suspense>
);

export default CreateProduct;
