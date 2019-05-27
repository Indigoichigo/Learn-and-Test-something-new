import React from 'react';
import MainMonitor from './MainMonitor';
import SecondMonitor from './SecondMonitor';
import ThirdMonitor from './ThirdMonitor';

const Dashboard = () => {
  return (
    <section className="dashboard_section">
      <div className="dbs_main_second_wrapper">
        <MainMonitor />
        <SecondMonitor />
      </div>
      <div className="dbs_thrid_wrapper">
        <ThirdMonitor />
      </div>
    </section>
  );
};

export default Dashboard;
