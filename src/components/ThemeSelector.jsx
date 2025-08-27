import React from 'react';
import { Check } from 'lucide-react';

const ThemeSelector = ({ currentTheme, setCurrentTheme, darkMode, onClose }) => {
  const themes = [
    { id: 'default', name: 'លំនាំដើម', colors: ['bg-indigo-500', 'bg-purple-500', 'bg-blue-500'] },
    { id: 'ocean', name: 'មហាសមុទ្រ', colors: ['bg-blue-500', 'bg-cyan-500', 'bg-teal-500'] },
    { id: 'forest', name: 'ព្រៃឈើ', colors: ['bg-green-500', 'bg-emerald-500', 'bg-lime-500'] },
    { id: 'sunset', name: 'ថ្ងៃលិច', colors: ['bg-orange-500', 'bg-red-500', 'bg-pink-500'] },
    { id: 'lavender', name: 'ឡាវេនឌ័រ', colors: ['bg-purple-500', 'bg-violet-500', 'bg-fuchsia-500'] },
    { id: 'autumn', name: 'រដូវស្លឹកឈើជ្រុះ', colors: ['bg-amber-500', 'bg-orange-500', 'bg-red-500'] },
    { id: 'mint', name: 'មីន', colors: ['bg-mint-500', 'bg-teal-500', 'bg-cyan-500'] },
    { id: 'rose', name: 'ផ្កាកុលាប', colors: ['bg-rose-500', 'bg-pink-500', 'bg-red-500'] }
  ];

  const handleThemeSelect = (themeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem('theme', themeId);
    onClose();
  };

  return (
    <div className={`absolute right-0 mt-2 w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg z-50`}>
      <div className="p-4">
        <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          ជ្រើសរើសធីម
        </h3>
        <div className="space-y-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeSelect(theme.id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                currentTheme === theme.id
                  ? darkMode
                    ? 'bg-indigo-900 border-indigo-600'
                    : 'bg-indigo-50 border-indigo-200'
                  : darkMode
                  ? 'hover:bg-gray-700'
                  : 'hover:bg-gray-50'
              } border ${
                currentTheme === theme.id
                  ? 'border-indigo-500'
                  : 'border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {theme.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full ${color}`}
                    />
                  ))}
                </div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {theme.name}
                </span>
              </div>
              {currentTheme === theme.id && (
                <Check className="w-4 h-4 text-indigo-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;