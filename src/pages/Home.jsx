import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Zap, BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import lessons from '../data/lessons.json';
import LessonCard from '../components/LessonCard';

const Home = ({ darkMode }) => {
  const featuredLessons = lessons.slice(0, 6);
  
  const categories = [
    {
      name: 'HTML',
      description: 'រៀនអំពីរចនាសម្ព័ន្ធទំព័រគេហទំព័រ',
      icon: <Code className="w-12 h-12" />,
      color: 'from-orange-500 to-red-500',
      lessons: lessons.filter(l => l.category === 'HTML').length,
      path: '/html'
    },
    {
      name: 'CSS',
      description: 'កែសម្រួលរូបរាងនិងការរៀបចំ',
      icon: <Palette className="w-12 h-12" />,
      color: 'from-blue-500 to-purple-500',
      lessons: lessons.filter(l => l.category === 'CSS').length,
      path: '/css'
    },
    {
      name: 'JavaScript',
      description: 'បន្ថែមភាពរស់រវើកដល់ទំព័រ',
      icon: <Zap className="w-12 h-12" />,
      color: 'from-yellow-500 to-orange-500',
      lessons: lessons.filter(l => l.category === 'JavaScript').length,
      path: '/javascript'
    }
  ];

  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, value: lessons.length, label: 'មេរៀនសរុប' },
    { icon: <Users className="w-8 h-8" />, value: '1000+', label: 'សិស្សបានរៀន' },
    { icon: <Award className="w-8 h-8" />, value: '100%', label: 'ឥតគិតថ្លៃ' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              រៀនកូដជាភាសាខ្មែរ
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              ស្វែងយល់អំពីការបង្កើតគេហទំព័រតាមរយៈមេរៀនជាភាសាខ្មែរដ៏ងាយស្រួល
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/html/introduction"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                ចាប់ផ្តើមរៀន
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/html"
                className={`inline-flex items-center px-8 py-4 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} font-semibold rounded-lg transition-colors`}
              >
                មើលមេរៀនទាំងអស់
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8 text-center`}
            >
              <div className="flex justify-center mb-4 text-indigo-600">
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            ជ្រើសរើសមេរៀនដែលអ្នកចង់រៀន
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            ចាប់ផ្តើមពីមូលដ្ឋានគ្រឹះរហូតដល់កម្រិតខ្ពស់
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className={`${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}
            >
              <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {category.icon}
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg opacity-90">{category.description}</p>
              </div>
              <div className="p-6">
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  មេរៀនសរុប
                </div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.lessons} មេរៀន
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Lessons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            មេរៀនពេញនិយម
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            ចាប់ផ្តើមជាមួយមេរៀនទាំងនេះ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} darkMode={darkMode} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/html"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            មើលមេរៀនទាំងអស់
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ត្រៀមខ្លួនដើម្បីក្លាយជាអ្នកបង្កើតកម្មវិធី?
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              ចាប់ផ្តើមដំណើរការរៀនកូដរបស់អ្នកថ្ងៃនេះ ជាមួយមេរៀនដ៏ងាយស្រួលជាភាសាខ្មែរ
            </p>
            <Link
              to="/html/introduction"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              ចាប់ផ្តើមឥឡូវនេះ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;