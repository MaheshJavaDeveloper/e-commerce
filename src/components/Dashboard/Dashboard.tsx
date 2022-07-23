import { useEffect, useState } from 'react';
import RecipeReviewCard from '../Card/Card';
import styles from './Dashboard.module.scss';

interface DashboardProps { }

function Dashboard(DashboardProps: any) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (<div className={styles.Dashboard} data-testid="Dashboard">
    {products && products.map((data:any) => {
      return <RecipeReviewCard product={data} />;
    })
    }
  </div>)

}

export default Dashboard;
