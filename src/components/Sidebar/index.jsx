import { NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Cricket<span>Stats</span></h2>
        <p className="tagline">Fantasy Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <i className="icon">📊</i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/search"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <i className="icon">🔍</i>
          <span>Search Players</span>
        </NavLink>

        <NavLink 
          to="/compare"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <i className="icon">⚖️</i>
          <span>Compare</span>
        </NavLink>

        <NavLink 
          to="/leaderboards"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <i className="icon">🏆</i>
          <span>Leaderboards</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p className="version">v1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;