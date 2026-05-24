import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';
import Tasks from './pages/Tasks';
import Submissions from './pages/Submissions';
import Evaluations from './pages/Evaluations';
import Analytics from './pages/Analytics';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/internships" element={<Internships />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/submissions" element={<Submissions />} />

          <Route path="/evaluations" element={<Evaluations />} />

          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
