import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Code, Palette, Zap, ArrowRight } from 'lucide-react';
import lessons from '../data/lessons.json';
import LessonCard from '../components/LessonCard';

const CategoryPage = ({ darkMode }) => {
  const { category } = useParams();
  const categoryName = category.toUpperCase();
  
  const categoryLessons = lessons.filter(
    lesson => lesson.category.toLowerCase() === category.toLowerCase()
  );

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'HTML':
        return <Code className="w-12 h-12" />;
      case 'CSS':
        return <Palette className="w-12 h-12" />;
      case 'JavaScript':
        return <Zap className="w-12 h-12" />;
      default:
        return <Code className="w-12 h-12" />;
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

  const getCategoryDescription = (category) => {
    switch (category) {
      case 'HTML':
        return 'រៀនអំពីរចនាសម្ព័ន្ធនិងធាតុផ្សំនៃទំព័រគេហទំព័រ';
      case 'CSS':
        return 'កែសម្រួលរូបរាង ពណ៌ និងការរៀបចំទំព័រ';
      case 'JavaScript':
        return 'បន្ថែមភាពរស់រវើកនិងមុខងារអន្តរកម្មដល់ទំព័រ';
      default:
        return 'រៀនអំពីការបង្កើតគេហទំព័រ';
    }
  };

  if (categoryLessons.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            រកមិនឃើញមេរៀន
          </h1>
          <Link
            to="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ត្រលប់ទៅទំព័រដើម
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Category Header */}
      <div className={`bg-gradient-to-r ${getCategoryColor(categoryName)} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {getCategoryIcon(categoryName)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              មេរៀន {categoryName}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              {getCategoryDescription(categoryName)}
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{categoryLessons.length}</span>
                <span className="opacity-90">មេរៀន</span>
              </div>
              <div className="w-1 h-6 bg-white opacity-30"></div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">ឥតគិតថ្លៃ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link
            to="/"
            className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
          >
            ទំព័រដើម
          </Link>
          <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>/</span>
          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
            {categoryName}
          </span>
        </nav>
      </div>

      {/* Quick Start */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8 mb-12`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            ចាប់ផ្តើមរៀន {categoryName}
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            ចាប់ផ្តើមជាមួយមេរៀនដំបូង ឬជ្រើសរើសមេរៀនដែលអ្នកចង់រៀន
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={categoryLessons[0]?.path}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              ចាប់ផ្តើមពីដើម
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className={`inline-flex items-center px-6 py-3 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} font-semibold rounded-lg transition-colors`}>
              ទាញយកកម្រងមេរៀន
            </button>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            មេរៀនទាំងអស់
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            រៀនតាមលំដាប់ ឬជ្រើសរើសមេរៀនដែលអ្នកចាប់អារម្មណ៍
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} darkMode={darkMode} />
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              បន្ទាប់ពីរៀន {categoryName} រួច
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              បន្តរៀនមេរៀនផ្សេងទៀតដើម្បីក្លាយជាអ្នកបង្កើតកម្មវិធីពេញលេញ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {categoryName !== 'HTML' && (
                <Link
                  to="/html"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  រៀន HTML
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
              {categoryName !== 'CSS' && (
                <Link
                  to="/css"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  រៀន CSS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
              {categoryName !== 'JAVASCRIPT' && (
                <Link
                  to="/javascript"
                  className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  រៀន JavaScript
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;