import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ComponentsPage from './pages/ComponentsPage';
import LessonPage from './components/LessonPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Apply theme classes to document
  useEffect(() => {
    const root = document.documentElement;
    root.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
          sidebarOpen={sidebarOpen}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        
        <div className="flex">
          <Sidebar
            darkMode={darkMode}
            isOpen={sidebarOpen}
            onClose={closeSidebar}
          />
          
          <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-80' : ''}`}>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/components" element={<ComponentsPage darkMode={darkMode} />} />
              <Route path="/:category" element={<CategoryPage darkMode={darkMode} />} />
              <Route path="/:category/:lessonSlug" element={<LessonPage darkMode={darkMode} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;