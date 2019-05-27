import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <section className="app_section">
      <div className="header_wrapper">
        <Header />
      </div>

      <div className="nav_dashboard_wrapper">
        <Nav />
        <Dashboard />
      </div>
    </section>
  );
};

export default App;
