import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const AuthModal = ({ darkMode, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('សូមបំពេញព័ត៌មានទាំងអស់');
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('លេខសម្ងាត់មិនត្រូវគ្នា');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const user = { email, id: Date.now() };
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(user);
      onClose();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-2xl w-full max-w-md`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {isLogin ? 'ចូលប្រើប្រាស់' : 'បង្កើតគណនី'}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} rounded-lg transition-colors`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              អ៊ីមែល
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              លេខសម្ងាត់
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="បញ្ចូលលេខសម្ងាត់"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password (Register only) */}
          {!isLogin && (
            <div className="mb-4">
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                បញ្ជាក់លេខសម្ងាត់
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="បញ្ជាក់លេខសម្ងាត់"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-3 rounded-lg font-medium transition-colors"
          >
            {loading ? 'កំពុងដំណើរការ...' : (isLogin ? 'ចូលប្រើប្រាស់' : 'បង្កើតគណនី')}
          </button>

          {/* Toggle Mode */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className={`text-sm ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'} transition-colors`}
            >
              {isLogin ? 'មិនទាន់មានគណនី? បង្កើតគណនីថ្មី' : 'មានគណនីរួចហើយ? ចូលប្រើប្រាស់'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;