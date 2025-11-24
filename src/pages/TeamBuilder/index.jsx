import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { mockPlayers } from '../../utils/mockData';

const TeamBuilder = () => {
  const navigate = useNavigate();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const [filterRole, setFilterRole] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const TOTAL_BUDGET = 100;
  const MAX_PLAYERS = 11;
  const MIN_BATSMEN = 3;
  const MIN_BOWLERS = 3;
  const MIN_ALLROUNDERS = 1;

  // Calculate budget used
  const budgetUsed = selectedPlayers.reduce((total, player) => {
    return total + (player.price || 10); // Default price 10 if not set
  }, 0);

  const budgetRemaining = TOTAL_BUDGET - budgetUsed;

  // Count players by role
  const selectedBatsmen = selectedPlayers.filter(p => p.role === 'Batsman').length;
  const selectedBowlers = selectedPlayers.filter(p => p.role === 'Bowler').length;
  const selectedAllrounders = selectedPlayers.filter(p => p.role === 'All-rounder').length;

  // Add price to players (in real app, this comes from API)
  const playersWithPrice = mockPlayers.map(player => ({
    ...player,
    price: player.role === 'Batsman' ? 12 : player.role === 'Bowler' ? 10 : 11
  }));

  // Filter players
  const filteredPlayers = playersWithPrice.filter(player => {
    const matchesRole = filterRole === 'All' || player.role === filterRole;
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         player.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  // Check if player can be added
  const canAddPlayer = (player) => {
    if (selectedPlayers.length >= MAX_PLAYERS) return false;
    if (selectedPlayers.find(p => p.id === player.id)) return false;
    if (budgetRemaining < player.price) return false;
    return true;
  };

  // Add player to team
  const addPlayer = (player) => {
    if (canAddPlayer(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  // Remove player from team
  const removePlayer = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerId));
    if (captain?.id === playerId) setCaptain(null);
    if (viceCaptain?.id === playerId) setViceCaptain(null);
  };

  // Set captain
  const handleSetCaptain = (player) => {
    if (viceCaptain?.id === player.id) {
      setViceCaptain(captain);
    }
    setCaptain(player);
  };

  // Set vice captain
  const handleSetViceCaptain = (player) => {
    if (captain?.id === player.id) {
      setCaptain(viceCaptain);
    }
    setViceCaptain(player);
  };

  // Check if team is valid
  const isTeamValid = () => {
    return selectedPlayers.length === MAX_PLAYERS &&
           selectedBatsmen >= MIN_BATSMEN &&
           selectedBowlers >= MIN_BOWLERS &&
           selectedAllrounders >= MIN_ALLROUNDERS &&
           captain && viceCaptain;
  };

  // Save team
  const handleSaveTeam = () => {
    if (isTeamValid()) {
      alert('Team saved successfully! 🎉');
      navigate('/');
    } else {
      alert('Please complete your team with all requirements!');
    }
  };

  return (
    <div className="team-builder">
      {/* Header */}
      <div className="builder-header">
        <div className="header-content">
          <h1>Build Your Dream Team</h1>
          <p>Select 11 players within your budget</p>
        </div>
        <button className="save-btn" onClick={handleSaveTeam} disabled={!isTeamValid()}>
          {isTeamValid() ? '✓ Save Team' : 'Complete Team'}
        </button>
      </div>

      {/* Budget & Requirements Bar */}
      <div className="requirements-bar">
        <div className="budget-info">
          <div className="budget-item">
            <span className="label">Budget Used:</span>
            <span className={`value ${budgetRemaining < 10 ? 'warning' : ''}`}>
              {budgetUsed}cr / {TOTAL_BUDGET}cr
            </span>
          </div>
          <div className="budget-progress">
            <div 
              className="progress-fill" 
              style={{ width: `${(budgetUsed / TOTAL_BUDGET) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="team-requirements">
          <div className={`req-item ${selectedPlayers.length === MAX_PLAYERS ? 'complete' : ''}`}>
            <span>Players: {selectedPlayers.length}/{MAX_PLAYERS}</span>
          </div>
          <div className={`req-item ${selectedBatsmen >= MIN_BATSMEN ? 'complete' : ''}`}>
            <span>Batsmen: {selectedBatsmen}/{MIN_BATSMEN}+</span>
          </div>
          <div className={`req-item ${selectedBowlers >= MIN_BOWLERS ? 'complete' : ''}`}>
            <span>Bowlers: {selectedBowlers}/{MIN_BOWLERS}+</span>
          </div>
          <div className={`req-item ${selectedAllrounders >= MIN_ALLROUNDERS ? 'complete' : ''}`}>
            <span>All-rounders: {selectedAllrounders}/{MIN_ALLROUNDERS}+</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="builder-content">
        {/* Player Marketplace */}
        <div className="marketplace">
          <div className="marketplace-header">
            <h2>Player Marketplace</h2>
            
            {/* Search */}
            <input
              type="text"
              placeholder="Search players..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Role Filter */}
            <div className="role-filters">
              {['All', 'Batsman', 'Bowler', 'All-rounder'].map(role => (
                <button
                  key={role}
                  className={`filter-btn ${filterRole === role ? 'active' : ''}`}
                  onClick={() => setFilterRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Players Grid */}
          <div className="players-grid">
            {filteredPlayers.map(player => {
              const isSelected = selectedPlayers.find(p => p.id === player.id);
              const canAdd = canAddPlayer(player);

              return (
                <div key={player.id} className={`player-card ${isSelected ? 'selected' : ''}`}>
                  <img src={player.image} alt={player.name} className="player-image" />
                  
                  <div className="player-details">
                    <h3>{player.name}</h3>
                    <p className="player-role">{player.role}</p>
                    <p className="player-country">🏳️ {player.country}</p>
                    
                    <div className="player-stats-mini">
                      {player.stats.runs && <span>Runs: {player.stats.runs}</span>}
                      {player.stats.wickets && <span>Wickets: {player.stats.wickets}</span>}
                      {player.stats.average && <span>Avg: {player.stats.average}</span>}
                    </div>

                    <div className="player-footer">
                      <span className="price">{player.price}cr</span>
                      {isSelected ? (
                        <button className="remove-btn" onClick={() => removePlayer(player.id)}>
                          Remove
                        </button>
                      ) : (
                        <button 
                          className="add-btn" 
                          onClick={() => addPlayer(player)}
                          disabled={!canAdd}
                        >
                          {!canAdd && budgetRemaining < player.price ? 'No Budget' : 'Add'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Squad */}
        <div className="selected-squad">
          <div className="squad-header">
            <h2>Your Squad</h2>
            <span className="players-count">{selectedPlayers.length}/11</span>
          </div>

          {selectedPlayers.length === 0 ? (
            <div className="empty-squad">
              <span className="empty-icon">👥</span>
              <p>Start building your team!</p>
            </div>
          ) : (
            <div className="squad-list">
              {selectedPlayers.map(player => (
                <div key={player.id} className="squad-player">
                  <img src={player.image} alt={player.name} />
                  <div className="squad-player-info">
                    <h4>{player.name}</h4>
                    <p>{player.role}</p>
                  </div>
                  
                  <div className="squad-player-actions">
                    {captain?.id === player.id ? (
                      <span className="badge captain-badge">C</span>
                    ) : viceCaptain?.id === player.id ? (
                      <span className="badge vc-badge">VC</span>
                    ) : (
                      <div className="action-btns">
                        <button 
                          className="captain-btn"
                          onClick={() => handleSetCaptain(player)}
                          title="Set as Captain"
                        >
                          C
                        </button>
                        <button 
                          className="vc-btn"
                          onClick={() => handleSetViceCaptain(player)}
                          title="Set as Vice Captain"
                        >
                          VC
                        </button>
                      </div>
                    )}
                    <button 
                      className="remove-icon" 
                      onClick={() => removePlayer(player.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Team Summary */}
          {selectedPlayers.length > 0 && (
            <div className="team-summary">
              <h3>Team Summary</h3>
              <div className="summary-stats">
                <div className="summary-item">
                  <span>Batsmen</span>
                  <strong>{selectedBatsmen}</strong>
                </div>
                <div className="summary-item">
                  <span>All-rounders</span>
                  <strong>{selectedAllrounders}</strong>
                </div>
                <div className="summary-item">
                  <span>Bowlers</span>
                  <strong>{selectedBowlers}</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamBuilder;