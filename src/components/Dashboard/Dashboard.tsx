import React, { FC } from 'react';
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard} data-testid="Dashboard">
    Dashboard Component
  </div>
);

export default Dashboard;
