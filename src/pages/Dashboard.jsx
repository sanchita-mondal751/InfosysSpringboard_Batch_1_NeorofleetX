import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <button>Rental</button>
        <button>Transport</button>
        <button>Smart City</button>
        <button>Logout</button>
      </aside>
      <main className="dashboard-content">
        <h2>Dashboard Overview</h2>
        <div className="cards">
          <div className="card">Real-time Tracking</div>
          <div className="card">Predictive Maintenance</div>
          <div className="card">Dynamic Plate Allocation</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
