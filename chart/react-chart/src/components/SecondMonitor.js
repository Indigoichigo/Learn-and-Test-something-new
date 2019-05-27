import React from 'react';
import MonitorHeader from './MonitorHeader';

const SecondMonitor = () => {
  return (
    <div class="second_monitor_section">
      <MonitorHeader
        icon={<i class="fas fa-chart-bar" />}
        title="Comfortable Index"
      />
    </div>
  );
};

export default SecondMonitor;
