import React from 'react';
import MonitorHeader from './MonitorHeader';

const MainMonitor = () => {
  return (
    <section className="main_monitor_section">
      <MonitorHeader
        icon={<i class="fas fa-chart-bar" />}
        title="Main Statictics"
      />
    </section>
  );
};

export default MainMonitor;
