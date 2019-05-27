import React from 'react';
import MonitorHeader from './MonitorHeader';

const ThirdMonitor = () => {
  return (
    <section className="thrid_monitor_section">
      <MonitorHeader
        icon={<i class="fas fa-chart-bar" />}
        title="Wheather Forecast"
      />
    </section>
  );
};

export default ThirdMonitor;
