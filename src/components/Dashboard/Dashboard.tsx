import React, { FC } from 'react';
import RecipeReviewCard from '../Card/Card';
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard} data-testid="Dashboard">
    <RecipeReviewCard/>
  </div>
);

export default Dashboard;
