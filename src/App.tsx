import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import VideoStream from './pages/VideoStream';
import Alerts from './pages/Alerts';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stream" element={<VideoStream />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;