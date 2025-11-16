import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { mockPlayers } from '../../utils/mockData';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock user team data (later this will come from state management)
  const [myTeam] = useState({
    players: mockPlayers.slice(0, 11), // User's selected 11 players
    captain: mockPlayers[0],
    viceCaptain: mockPlayers[1],
    totalPoints: 2450,
    weekPoints: 180,
    rank: 1247,
    budget: 100,
    budgetUsed: 92,
    teamValue: 92
  });

  const batsmen = myTeam.players.filter(p => p.role === "Batsman");
  const bowlers = myTeam.players.filter(p => p.role === "Bowler");
  const allrounders = myTeam.players.filter(p => p.role === "All-rounder");

  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome back, Player! 👋</h1>
          <p>Your fantasy team is ready for action</p>
        </div>
        <button className="primary-btn" onClick={() => navigate('/team-builder')}>
          Build Team
        </button>
      </div>

      {/* Stats Overview Cards */}
      <div className="stats-grid">
        <div className="stat-card points">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <h3>{myTeam.totalPoints}</h3>
            <p>Total Points</p>
            <span className="stat-change positive">+{myTeam.weekPoints} this week</span>
          </div>
        </div>

        <div className="stat-card rank">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>#{myTeam.rank}</h3>
            <p>Global Rank</p>
            <span className="stat-change">Out of 50,000</span>
          </div>
        </div>

        <div className="stat-card budget">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>{myTeam.budget - myTeam.budgetUsed}cr</h3>
            <p>Budget Left</p>
            <span className="stat-change">of {myTeam.budget}cr total</span>
          </div>
        </div>

        <div className="stat-card value">
          <div className="stat-icon">💎</div>
          <div className="stat-content">
            <h3>{myTeam.teamValue}cr</h3>
            <p>Team Value</p>
            <span className="stat-change positive">+2.5cr this week</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* My Team Section */}
        <div className="section my-team-section">
          <div className="section-header">
            <h2>⚔️ My Squad</h2>
            <button className="text-btn" onClick={() => navigate('/squad')}>
              View Details →
            </button>
          </div>

          {/* Team Formation */}
          <div className="team-formation">
            <div className="formation-label">
              {batsmen.length}-{allrounders.length}-{bowlers.length}
            </div>
            
            {/* Captain & Vice Captain */}
            <div className="leadership">
              <div className="leader-card captain">
                <img src={myTeam.captain.image} alt={myTeam.captain.name} />
                <div className="leader-info">
                  <span className="leader-badge">C</span>
                  <span className="leader-name">{myTeam.captain.name}</span>
                </div>
              </div>
              <div className="leader-card vice-captain">
                <img src={myTeam.viceCaptain.image} alt={myTeam.viceCaptain.name} />
                <div className="leader-info">
                  <span className="leader-badge">VC</span>
                  <span className="leader-name">{myTeam.viceCaptain.name}</span>
                </div>
              </div>
            </div>

            {/* Quick Team Preview */}
            <div className="team-preview">
              <div className="position-group">
                <h4>Batsmen ({batsmen.length})</h4>
                <div className="players-mini">
                  {batsmen.slice(0, 3).map(p => (
                    <img key={p.id} src={p.image} alt={p.name} title={p.name} />
                  ))}
                  {batsmen.length > 3 && <span className="more">+{batsmen.length - 3}</span>}
                </div>
              </div>
              
              <div className="position-group">
                <h4>All-rounders ({allrounders.length})</h4>
                <div className="players-mini">
                  {allrounders.slice(0, 3).map(p => (
                    <img key={p.id} src={p.image} alt={p.name} title={p.name} />
                  ))}
                  {allrounders.length > 3 && <span className="more">+{allrounders.length - 3}</span>}
                </div>
              </div>
              
              <div className="position-group">
                <h4>Bowlers ({bowlers.length})</h4>
                <div className="players-mini">
                  {bowlers.slice(0, 3).map(p => (
                    <img key={p.id} src={p.image} alt={p.name} title={p.name} />
                  ))}
                  {bowlers.length > 3 && <span className="more">+{bowlers.length - 3}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="section actions-section">
          <div className="section-header">
            <h2>⚡ Quick Actions</h2>
          </div>
          
          <div className="action-cards">
            <button className="action-card" onClick={() => navigate('/team-builder')}>
              <span className="action-icon">🏗️</span>
              <div className="action-content">
                <h3>Build Team</h3>
                <p>Select your 11 players</p>
              </div>
            </button>

            <button className="action-card" onClick={() => navigate('/squad')}>
              <span className="action-icon">👥</span>
              <div className="action-content">
                <h3>Manage Squad</h3>
                <p>Edit & transfer players</p>
              </div>
            </button>

            <button className="action-card simulate">
              <span className="action-icon">🎮</span>
              <div className="action-content">
                <h3>Simulate Match</h3>
                <p>Play & earn points</p>
              </div>
            </button>

            <button className="action-card" onClick={() => navigate('/leaderboards')}>
              <span className="action-icon">🏆</span>
              <div className="action-content">
                <h3>Leaderboards</h3>
                <p>See your rank</p>
              </div>
            </button>
          </div>

          {/* Upcoming Match */}
          <div className="upcoming-match">
            <h3>Next Match</h3>
            <div className="match-info">
              <div className="teams">
                <span>India</span>
                <span className="vs">vs</span>
                <span>Australia</span>
              </div>
              <div className="match-time">
                <span className="time">🕐 Tomorrow, 7:30 PM</span>
                <span className="format-badge">T20</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="section performance-section">
        <div className="section-header">
          <h2>📊 Your Performance</h2>
        </div>
        <div className="performance-stats">
          <div className="perf-card">
            <h4>Matches Played</h4>
            <p className="perf-value">24</p>
          </div>
          <div className="perf-card">
            <h4>Average Points</h4>
            <p className="perf-value">102</p>
          </div>
          <div className="perf-card">
            <h4>Best Score</h4>
            <p className="perf-value">245</p>
          </div>
          <div className="perf-card">
            <h4>Win Rate</h4>
            <p className="perf-value">67%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;