import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.scss'; // Import the CSS file

const DashboardPage = () => {
  return (
    <main className="centralized" id="dashboard-main" aria-label="Dashboard Main Section">
      <div className="dashboard-container">
        <h2>Dashboard Overview</h2>
        
        <div className="button-wrapper">
          <Link to="/configure-budgets">
            <button>Setup Budgets</button>
          </Link>
        </div>

        <div className="button-wrapper">
          <Link to="/add-expense">
            <button>Expense Management</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
