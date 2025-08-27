import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';

const LessonCard = ({ lesson, darkMode }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'HTML':
        return <Code className="w-6 h-6" />;
      case 'CSS':
        return <Palette className="w-6 h-6" />;
      case 'JavaScript':
        return <Zap className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'HTML':
        return 'from-orange-500 to-red-500';
      case 'CSS':
        return 'from-blue-500 to-purple-500';
      case 'JavaScript':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Link
      to={lesson.path}
      className={`block ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
    >
      <div className={`bg-gradient-to-r ${getCategoryColor(lesson.category)} p-4 rounded-t-xl`}>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            {getCategoryIcon(lesson.category)}
            <span className="font-semibold">{lesson.category}</span>
          </div>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
      <div className="p-6">
        <h3 className={`font-bold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {lesson.title}
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed line-clamp-3`}>
          {lesson.explanation}
        </p>
        {lesson.tip && (
          <div className={`mt-4 p-3 ${darkMode ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'} border-l-4 rounded-r`}>
            <p className={`text-xs ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              💡 {lesson.tip}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default LessonCard;