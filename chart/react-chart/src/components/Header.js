import React from 'react';

const Header = () => {
  return (
    <header className="app_header">
      <div className="ah_logo_wrapper">
        <div className="ah_logo" />
      </div>
      <div className="ah_info_wrapper">
        <div className="ah_info_data_selector">All data</div>
        <data className="ah_info_title">Main Dashboard</data>
      </div>
      <div className="ah_tool_wrapper">
        <div className="ah_tool_bell_cell">
          <i className="far fa-bell">
            <span className="bell_info_counter" />
          </i>
        </div>
        <div className="ah_tool_layout_cell">
          <i className="fas fa-th-large" />
        </div>
        <div className="ah_tool_hbg_cell">
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="ah_tool_user_cell">
          <div className="ah_user_circle" />
        </div>
      </div>
    </header>
  );
};

export default Header;
