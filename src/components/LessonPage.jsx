// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { Code, Lightbulb, Play, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
// import lessons from '../data/lessons.json';
// import CodeEditorModal from './CodeEditorModal';

// const LessonPage = ({ darkMode }) => {
//   const { category, lessonSlug } = useParams();
//   const [showEditor, setShowEditor] = useState(false);

//   // Find the current lesson
//   const currentLesson = lessons.find(lesson => 
//     lesson.path === `/${category}/${lessonSlug}`
//   );

//   if (!currentLesson) {
//     return (
//       <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//         <div className="text-center">
//           <h1 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//             រកមិនឃើញមេរៀន
//           </h1>
//           <Link
//             to="/"
//             className="text-indigo-600 hover:text-indigo-800 font-medium"
//           >
//             ត្រលប់ទៅទំព័រដើម
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Find previous and next lessons in the same category
//   const categoryLessons = lessons.filter(lesson => lesson.category === currentLesson.category);
//   const currentIndex = categoryLessons.findIndex(lesson => lesson.id === currentLesson.id);
//   const prevLesson = currentIndex > 0 ? categoryLessons[currentIndex - 1] : null;
//   const nextLesson = currentIndex < categoryLessons.length - 1 ? categoryLessons[currentIndex + 1] : null;

//   const getCategoryColor = (category) => {
//     switch (category) {
//       case 'HTML':
//         return 'from-orange-500 to-red-500';
//       case 'CSS':
//         return 'from-blue-500 to-purple-500';
//       case 'JavaScript':
//         return 'from-yellow-500 to-orange-500';
//       default:
//         return 'from-gray-500 to-gray-600';
//     }
//   };

//   const getLanguage = (category) => {
//     switch (category) {
//       case 'HTML':
//         return 'html';
//       case 'CSS':
//         return 'css';
//       case 'JavaScript':
//         return 'javascript';
//       default:
//         return 'text';
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Breadcrumb */}
//         <nav className="mb-8">
//           <div className="flex items-center space-x-2 text-sm">
//             <Link
//               to="/"
//               className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
//             >
//               ទំព័រដើម
//             </Link>
//             <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>/</span>
//             <Link
//               to={`/${category.toLowerCase()}`}
//               className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
//             >
//               {currentLesson.category}
//             </Link>
//             <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>/</span>
//             <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
//               {currentLesson.title.split(':')[1]?.trim() || currentLesson.title}
//             </span>
//           </div>
//         </nav>

//         {/* Lesson Header */}
//         <div className={`bg-gradient-to-r ${getCategoryColor(currentLesson.category)} rounded-2xl p-8 mb-8 text-white`}>
//           <div className="flex items-center space-x-3 mb-4">
//             <Code className="w-8 h-8" />
//             <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
//               {currentLesson.category}
//             </span>
//           </div>
//           <h1 className="text-3xl font-bold mb-4">{currentLesson.title}</h1>
//         </div>

//         {/* Lesson Content */}
//         <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden mb-8`}>
//           {/* Explanation Section */}
//           <div className="p-8">
//             <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//               <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
//               ការពន្យល់
//             </h2>
//             <div className={`prose max-w-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               <p className="text-lg leading-relaxed whitespace-pre-line">
//                 {currentLesson.explanation}
//               </p>
//             </div>
//           </div>

//           {/* Code Example Section */}
//           <div className="border-t border-gray-200 dark:border-gray-700">
//             <div className="p-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className={`text-2xl font-bold flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                   <Code className="w-6 h-6 mr-3 text-indigo-500" />
//                   ឧទាហរណ៍កូដ
//                 </h2>
//                 <button
//                   onClick={() => setShowEditor(true)}
//                   className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   <Play className="w-4 h-4" />
//                   <span>សាកល្បងដោយខ្លួនឯង</span>
//                 </button>
//               </div>
              
//               <div className="rounded-lg overflow-hidden">
//                 <SyntaxHighlighter
//                   language={getLanguage(currentLesson.category)}
//                   style={darkMode ? tomorrow : prism}
//                   customStyle={{
//                     margin: 0,
//                     fontSize: '14px',
//                     lineHeight: '1.5'
//                   }}
//                   showLineNumbers={true}
//                 >
//                   {currentLesson.code}
//                 </SyntaxHighlighter>
//               </div>
//             </div>
//           </div>

//           {/* Tip Section */}
//           {currentLesson.tip && (
//             <div className="border-t border-gray-200 dark:border-gray-700">
//               <div className="p-8">
//                 <div className={`${darkMode ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'} border-l-4 p-4 rounded-r-lg`}>
//                   <div className="flex items-start">
//                     <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
//                     <div>
//                       <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
//                         គន្លឹះ
//                       </h3>
//                       <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
//                         {currentLesson.tip}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-between items-center">
//           {prevLesson ? (
//             <Link
//               to={prevLesson.path}
//               className={`flex items-center space-x-2 px-6 py-3 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <div className="text-left">
//                 <div className="text-sm opacity-75">មេរៀនមុន</div>
//                 <div className="font-medium truncate max-w-48">
//                   {prevLesson.title.split(':')[1]?.trim() || prevLesson.title}
//                 </div>
//               </div>
//             </Link>
//           ) : (
//             <div></div>
//           )}

//           {nextLesson ? (
//             <Link
//               to={nextLesson.path}
//               className={`flex items-center space-x-2 px-6 py-3 ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}
//             >
//               <div className="text-right">
//                 <div className="text-sm opacity-75">មេរៀនបន្ទាប់</div>
//                 <div className="font-medium truncate max-w-48">
//                   {nextLesson.title.split(':')[1]?.trim() || nextLesson.title}
//                 </div>
//               </div>
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           ) : (
//             <div></div>
//           )}
//         </div>
//       </div>

//       {/* Code Editor Modal */}
//       {showEditor && (
//         <CodeEditorModal
//           lesson={currentLesson}
//           darkMode={darkMode}
//           onClose={() => setShowEditor(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default LessonPage;
// LessonPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
// import { prism } from "react-syntax-highlighter/dist/esm/styles/prism/prism";

import { Code, Lightbulb, Play, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import lessons from '../data/lessons.json';
import CodeEditorModal from './CodeEditorModal';

const LessonPage = ({ darkMode }) => {
  const { category, lessonSlug } = useParams();
  const [showEditor, setShowEditor] = useState(false);

  // Find the current lesson
  const currentLesson = lessons.find(lesson => 
    lesson.path === `/${category}/${lessonSlug}`
  );

  if (!currentLesson) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center p-8">
          <h1 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            រកមិនឃើញមេរៀន
          </h1>
          <Link
            to="/"
            className={`inline-flex items-center px-6 py-3 rounded-lg ${
              darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white font-medium transition-colors`}
          >
            ត្រលប់ទៅទំព័រដើម
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next lessons in the same category
  const categoryLessons = lessons.filter(lesson => lesson.category === currentLesson.category);
  const currentIndex = categoryLessons.findIndex(lesson => lesson.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? categoryLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < categoryLessons.length - 1 ? categoryLessons[currentIndex + 1] : null;

  const getCategoryColor = (category) => {
    switch (category) {
      case 'HTML':
        return 'bg-orange-600';
      case 'CSS':
        return 'bg-blue-600';
      case 'JavaScript':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getLanguage = (category) => {
    switch (category) {
      case 'HTML':
        return 'html';
      case 'CSS':
        return 'css';
      case 'JavaScript':
        return 'javascript';
      default:
        return 'text';
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Hero Section */}
      <div className={`${getCategoryColor(currentLesson.category)} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
              {currentLesson.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{currentLesson.title}</h1>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowEditor(true)}
              className={`flex items-center px-6 py-3 rounded-lg ${
                darkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-white text-gray-900 hover:bg-gray-100'
              } font-semibold transition-colors`}
            >
              <Play className="w-5 h-5 mr-2" />
              សាកល្បងដោយខ្លួនឯង
            </button>
            <Link
              to={`/${category.toLowerCase()}`}
              className={`flex items-center px-6 py-3 rounded-lg ${
                darkMode ? 'bg-black bg-opacity-20 hover:bg-opacity-30' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              } font-semibold transition-colors`}
            >
              មើលមេរៀនទាំងអស់
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Explanation Section */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8 mb-8`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
                ការពន្យល់
              </h2>
              <div className={`prose max-w-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="text-lg leading-relaxed whitespace-pre-line">
                  {currentLesson.explanation}
                </p>
              </div>
            </div>

            {/* Code Example Section */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8 mb-8`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Code className="w-6 h-6 mr-3 text-indigo-500" />
                ឧទាហរណ៍កូដ
              </h2>
              
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  language={getLanguage(currentLesson.category)}
                  style={darkMode ? tomorrow : prism}
                  customStyle={{
                    margin: 0,
                    fontSize: '14px',
                    lineHeight: '1.5',
                    overflowX: 'auto'
                  }}
                  showLineNumbers={true}
                  wrapLines={true}
                >
                  {currentLesson.code}
                </SyntaxHighlighter>
              </div>
            </div>

            {/* Tip Section */}
            {currentLesson.tip && (
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-8`}>
                <div className={`${darkMode ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-200'} border-l-4 p-4 rounded-r-lg`}>
                  <div className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className={`font-semibold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                        គន្លឹះ
                      </h3>
                      <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                        {currentLesson.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-h-[100vh] overflow-auto shadow-lg p-6 sticky top-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                មាតិកាមេរៀន
              </h3>
              <div className="space-y-2">
                {categoryLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={lesson.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === lesson.path
                        ? darkMode
                          ? 'bg-indigo-900 text-indigo-300'
                          : 'bg-indigo-100 text-indigo-700'
                        : darkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {lesson.title.split(':')[1]?.trim() || lesson.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12">
          {prevLesson ? (
            <Link
              to={prevLesson.path}
              className={`flex items-center space-x-4 px-6 py-4 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto`}
            >
              <ArrowLeft className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm opacity-75">មេរៀនមុន</div>
                <div className="font-medium truncate max-w-[200px]">
                  {prevLesson.title.split(':')[1]?.trim() || prevLesson.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}

          {nextLesson ? (
            <Link
              to={nextLesson.path}
              className={`flex items-center space-x-4 px-6 py-4 ${
                darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto`}
            >
              <div className="text-right">
                <div className="text-sm opacity-75">មេរៀនបន្ទាប់</div>
                <div className="font-medium truncate max-w-[200px]">
                  {nextLesson.title.split(':')[1]?.trim() || nextLesson.title}
                </div>
              </div>
              <ArrowRight className="w-6 h-6" />
            </Link>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}
        </div>
      </div>

      {/* Code Editor Modal */}
      {showEditor && (
        <CodeEditorModal
          lesson={currentLesson}
          darkMode={darkMode}
          onClose={() => setShowEditor(false)}
        />
      )}
    </div>
  );
};

export default LessonPage;