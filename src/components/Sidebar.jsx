// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Code, Palette, Zap, Home, ChevronRight, Component } from 'lucide-react';
// import lessons from '../data/lessons.json';

// const Sidebar = ({ darkMode, isOpen, onClose }) => {
//   const location = useLocation();

//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case 'HTML':
//         return <Code className="w-5 h-5" />;
//       case 'CSS':
//         return <Palette className="w-5 h-5" />;
//       case 'JavaScript':
//         return <Zap className="w-5 h-5" />;
//       default:
//         return <Home className="w-5 h-5" />;
//     }
//   };

//   const getCategoryColor = (category) => {
//     switch (category) {
//       case 'HTML':
//         return 'text-orange-600';
//       case 'CSS':
//         return 'text-blue-600';
//       case 'JavaScript':
//         return 'text-yellow-600';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   const groupedLessons = lessons.reduce((acc, lesson) => {
//     if (!acc[lesson.category]) {
//       acc[lesson.category] = [];
//     }
//     acc[lesson.category].push(lesson);
//     return acc;
//   }, {});

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-80 ${
//           darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
//         } border-r transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0`}
//       >
//         <div className="p-6">
//           <h2 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//             មេរៀនទាំងអស់
//           </h2>

//           {/* Home Link */}
//           <Link
//             to="/"
//             onClick={onClose}
//             className={`flex items-center space-x-3 p-3 rounded-lg mb-4 transition-colors ${
//               location.pathname === '/'
//                 ? darkMode
//                   ? 'bg-indigo-900 text-indigo-300'
//                   : 'bg-indigo-100 text-indigo-700'
//                 : darkMode
//                 ? 'text-gray-300 hover:bg-gray-800'
//                 : 'text-gray-600 hover:bg-gray-100'
//             }`}
//           >
//             <Home className="w-5 h-5" />
//             <span>ទំព័រដើម</span>
//           </Link>

//           {/* Components Link */}
//           <Link
//             to="/components"
//             onClick={onClose}
//             className={`flex items-center space-x-3 p-3 rounded-lg mb-4 transition-colors ${
//               location.pathname === '/components'
//                 ? darkMode
//                   ? 'bg-indigo-900 text-indigo-300'
//                   : 'bg-indigo-100 text-indigo-700'
//                 : darkMode
//                 ? 'text-gray-300 hover:bg-gray-800'
//                 : 'text-gray-600 hover:bg-gray-100'
//             }`}
//           >
//             <Component className="w-5 h-5" />
//             <span>Components</span>
//           </Link>

//           {/* Category Sections */}
//           {Object.entries(groupedLessons).map(([category, categoryLessons]) => (
//             <div key={category} className="mb-6">
//               <div className={`flex items-center space-x-2 mb-3 ${getCategoryColor(category)}`}>
//                 {getCategoryIcon(category)}
//                 <h3 className="font-semibold text-lg">{category}</h3>
//               </div>

//               <div className="space-y-1">
//                 {categoryLessons.map((lesson) => (
//                   <Link
//                     key={lesson.id}
//                     to={lesson.path}
//                     onClick={onClose}
//                     className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
//                       location.pathname === lesson.path
//                         ? darkMode
//                           ? 'bg-indigo-900 text-indigo-300'
//                           : 'bg-indigo-100 text-indigo-700'
//                         : darkMode
//                         ? 'text-gray-300 hover:bg-gray-800'
//                         : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <span className="text-sm font-medium truncate">
//                       {lesson.title.split(':')[1]?.trim() || lesson.title}
//                     </span>
//                     <ChevronRight className="w-4 h-4 flex-shrink-0" />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Palette, Zap, Home, ChevronRight, Component } from 'lucide-react';
import lessons from '../data/lessons.json';

const Sidebar = ({ darkMode, isOpen, onClose }) => {
  const location = useLocation();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'HTML':
        return <Code className="w-5 h-5" />;
      case 'CSS':
        return <Palette className="w-5 h-5" />;
      case 'JavaScript':
        return <Zap className="w-5 h-5" />;
      case 'React':
        return <Zap className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'HTML':
        return 'text-orange-600';
      case 'CSS':
        return 'text-blue-600';
      case 'JavaScript':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const groupedLessons = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = [];
    }
    acc[lesson.category].push(lesson);
    return acc;
  }, {});

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:sticky lg:top-16 lg:z-0`}
      >
        <div className="p-4">
          <h2 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            មេរៀនទាំងអស់
          </h2>

          {/* Home Link */}
          <Link
            to="/"
            onClick={onClose}
            className={`flex items-center space-x-3 p-2 rounded-lg mb-2 transition-colors ${
              location.pathname === '/'
                ? darkMode
                  ? 'bg-indigo-900 text-indigo-300'
                  : 'bg-indigo-100 text-indigo-700'
                : darkMode
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>ទំព័រដើម</span>
          </Link>

          {/* Components Link */}
          <Link
            to="/components"
            onClick={onClose}
            className={`flex items-center space-x-3 p-2 rounded-lg mb-4 transition-colors ${
              location.pathname === '/components'
                ? darkMode
                  ? 'bg-indigo-900 text-indigo-300'
                  : 'bg-indigo-100 text-indigo-700'
                : darkMode
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Component className="w-5 h-5" />
            <span>Components</span>
          </Link>
           <Link
            to="/css/introduction"
            onClick={onClose}
            className={`flex items-center space-x-3 p-2 rounded-lg mb-4 transition-colors ${
              location.pathname === '/css/introduction'
                ? darkMode
                  ? 'bg-indigo-900 text-indigo-300'
                  : 'bg-indigo-100 text-indigo-700'
                : darkMode
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Component className="w-5 h-5" />
            <span>CSS</span>
          </Link>


          {/* Category Sections */}
          {Object.entries(groupedLessons).map(([category, categoryLessons]) => (
            <div key={category} className="mb-4">
              <div className={`flex items-center space-x-2 mb-2 ${getCategoryColor(category)}`}>
                {getCategoryIcon(category)}
                <h3 className="font-semibold">{category}</h3>
              </div>

              <div className="space-y-1 ml-7">
                {categoryLessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={lesson.path}
                    onClick={onClose}
                    className={`flex items-center justify-between p-2 rounded-lg transition-colors text-sm ${
                      location.pathname === lesson.path
                        ? darkMode
                          ? 'bg-indigo-900 text-indigo-300'
                          : 'bg-indigo-100 text-indigo-700'
                        : darkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="truncate">
                      {lesson.title.split(':')[1]?.trim() || lesson.title}
                    </span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;