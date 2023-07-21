import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
export default Dashboard;

function Filters() {
    return (
        <div className="filters">
            <button>All</button>
            <button>Organic</button>
            <button>High Potential</button>
            <button>Eminent</button>
            {/* Add other filters here */}
        </div>
    );
}

function Card() {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <div>Name</div>
            <div>Story content</div>
            <button>Approve</button>
            <button>Reject</button>
            <input type="checkbox" /> Mark as High Potential
        </div>
    );
}

function Dashboard() {
    return (
        <div className="container">
            <div className="heading">Stories Dashboard</div>
            <Filters />
            <div className="content">
                <Card />
                {/* Add more cards here */}
            </div>
        </div>
    );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
