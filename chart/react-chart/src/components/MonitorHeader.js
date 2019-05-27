import React from 'react';

const MonitorHeaders = props => {
  return (
    <div className="monitor_header_wrapper">
      <div>{props.icon}</div> <div>{props.title}</div>
    </div>
  );
};

export default MonitorHeaders;
