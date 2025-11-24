import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import TeamBuilder from './pages/TeamBuilder';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    document.title = "Fantasy_Cricket";
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='team-builder' element={<TeamBuilder />} />
      </Route>
    </Routes>
  )
}

export default App