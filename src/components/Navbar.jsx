import React, { useState, useEffect } from 'react';
import { Menu, X, Book, Sun, Moon, User, LogOut, Settings, Palette, Component } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import ThemeSelector from './ThemeSelector';

const Navbar = ({ darkMode, toggleDarkMode, toggleSidebar, sidebarOpen, currentTheme, setCurrentTheme }) => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  useEffect(() => {
    // Check for logged in user
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
            <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleSidebar}
                className={`lg:hidden p-1.5 sm:p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
                {sidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                <Book className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                <h1 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} hidden xs:block`}>
                រៀនកូដជាភាសាខ្មែរ -"និរន្តរ៍"
              </h1>
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm xl:text-base`}
            >
              ទំព័រដើម
            </Link>
            <Link
              to="/html"
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm xl:text-base`}
            >
              HTML
            </Link>
            <Link
              to="/css"
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm xl:text-base`}
            >
              CSS
            </Link>
            <Link
              to="/javascript"
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm xl:text-base`}
            >
              JavaScript
            </Link>
              <Link
                to="/components"
                className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} font-medium transition-colors text-sm xl:text-base`}
              >
                Components
              </Link>
          </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowThemeSelector(!showThemeSelector)}
                  className={`p-1.5 sm:p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}
                >
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                {showThemeSelector && (
                  <ThemeSelector
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                    darkMode={darkMode}
                    onClose={() => setShowThemeSelector(false)}
                  />
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-1.5 sm:p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}
              >
                {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className={`flex items-center space-x-2 p-1.5 sm:p-2 rounded-md ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} transition-colors`}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium">
                      {user.email.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:block text-sm font-medium">{user.email.split('@')[0]}</span>
                  </button>
                  
                  {showUserMenu && (
                    <div className={`absolute right-0 mt-2 w-48 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg z-50`}>
                      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                        <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {user.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setShowUserMenu(false);
                            // Add settings functionality
                          }}
                          className={`flex items-center space-x-2 w-full px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors`}
                        >
                          <Settings className="w-4 h-4" />
                          <span>ការកំណត់</span>
                        </button>
                        <button
                          onClick={handleLogout}
                          className={`flex items-center space-x-2 w-full px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors`}
                        >
                          <LogOut className="w-4 h-4" />
                          <span>ចាកចេញ</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  ចូលប្រើ
                </button>
              )}
            </div>
        </div>
      </div>
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          darkMode={darkMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={setUser}
        />
      )}
    </>
  );
};

export default Navbar;