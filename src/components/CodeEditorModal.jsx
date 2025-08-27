// import React, { useState } from 'react';
// import { X, Play, RotateCcw } from 'lucide-react';

// const CodeEditorModal = ({ lesson, darkMode, onClose }) => {
//   const [code, setCode] = useState(lesson.code);
//   const [output, setOutput] = useState('');

//   const runCode = () => {
//     if (lesson.category === 'HTML') {
//       setOutput(code);
//     } else if (lesson.category === 'CSS') {
//       const htmlWithCSS = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>
//             ${code}
//           </style>
//         </head>
//         <body>
//           <h1>ចំណងជើងទី១</h1>
//           <h2>ចំណងជើងទី២</h2>
//           <p>នេះជាកថាខណ្ឌសម្រាប់សាកល្បង CSS។</p>
//           <div class="box">នេះជា div ដែលមាន class="box"</div>
//           <p id="special">នេះជា paragraph ដែលមាន id="special"</p>
//           <ul>
//             <li>ធាតុបញ្ជីទី១</li>
//             <li>ធាតុបញ្ជីទី២</li>
//             <li>ធាតុបញ្ជីទី៣</li>
//           </ul>
//         </body>
//         </html>
//       `;
//       setOutput(htmlWithCSS);
//     } else if (lesson.category === 'JavaScript') {
//       try {
//         // Create a safe environment for JavaScript execution
//         const logs = [];
//         const mockConsole = {
//           log: (...args) => logs.push(args.join(' ')),
//           error: (...args) => logs.push('Error: ' + args.join(' ')),
//           warn: (...args) => logs.push('Warning: ' + args.join(' '))
//         };

//         // Create a function with the code and mock console
//         const func = new Function('console', 'alert', code);
//         const mockAlert = (message) => logs.push('Alert: ' + message);
        
//         func(mockConsole, mockAlert);
        
//         setOutput(logs.join('\n') || 'កូដដំណើរការបានជោគជ័យ (គ្មានលទ្ធផលបង្ហាញ)');
//       } catch (error) {
//         setOutput('កំហុស: ' + error.message);
//       }
//     }
//   };

//   const resetCode = () => {
//     setCode(lesson.code);
//     setOutput('');
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col`}>
//         {/* Header */}
//         <div className={`flex items-center justify-between p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//           <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//             សាកល្បងកូដ - {lesson.title}
//           </h2>
//           <div className="flex items-center space-x-3">
//             <button
//               onClick={resetCode}
//               className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
//             >
//               <RotateCcw className="w-4 h-4" />
//               <span>កំណត់ឡើងវិញ</span>
//             </button>
//             <button
//               onClick={runCode}
//               className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
//             >
//               <Play className="w-4 h-4" />
//               <span>ដំណើរការ</span>
//             </button>
//             <button
//               onClick={onClose}
//               className={`p-2 ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} rounded-lg transition-colors`}
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//         {/* Content */}
//         <div className="flex-1 flex overflow-hidden">
//           {/* Code Editor */}
//           <div className="w-1/2 flex flex-col">
//             <div className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} font-medium`}>
//               កូដ ({lesson.category})
//             </div>
//             <textarea
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               className={`flex-1 p-4 font-mono text-sm resize-none focus:outline-none ${
//                 darkMode 
//                   ? 'bg-gray-800 text-gray-100 border-gray-700' 
//                   : 'bg-white text-gray-900 border-gray-300'
//               }`}
//               placeholder="សរសេរកូដរបស់អ្នកនៅទីនេះ..."
//             />
//           </div>

//           {/* Output/Preview */}
//           <div className={`w-1/2 flex flex-col border-l ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//             <div className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} font-medium`}>
//               {lesson.category === 'JavaScript' ? 'លទ្ធផល' : 'ការមើលជាមុន'}
//             </div>
//             <div className="flex-1 overflow-auto">
//               {lesson.category === 'JavaScript' ? (
//                 <pre className={`p-4 text-sm font-mono whitespace-pre-wrap ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   {output || 'ចុចប៊ូតុង "ដំណើរការ" ដើម្បីឃើញលទ្ធផល'}
//                 </pre>
//               ) : (
//                 <iframe
//                   srcDoc={output || '<p style="padding: 20px; color: #666;">ចុចប៊ូតុង "ដំណើរការ" ដើម្បីឃើញការមើលជាមុន</p>'}
//                   className="w-full h-full border-none"
//                   title="Code Preview"
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodeEditorModal;

import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism.css';

const CodeEditorModal = ({ lesson, darkMode, onClose }) => {
  const [code, setCode] = useState(lesson.code || '');
  const [output, setOutput] = useState('');
  const [babelLoaded, setBabelLoaded] = useState(false);

  // Load Babel standalone
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@babel/standalone/babel.min.js';
    script.async = true;
    script.onload = () => setBabelLoaded(true);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const runCode = () => {
    try {
      if (lesson.category.toLowerCase() === 'html') {
        setOutput(code);
      } 
      else if (lesson.category.toLowerCase() === 'css') {
        setOutput(`
          <!DOCTYPE html>
          <html>
          <head><style>${code}</style></head>
          <body>
            <h1>CSS Preview</h1>
            <div class="box">Styled div</div>
          </body>
          </html>
        `);
      }
      else if (lesson.category.toLowerCase() === 'javascript') {
        const logs = [];
        const mockConsole = {
          log: (...args) => logs.push(args.join(' ')),
          error: (...args) => logs.push('Error: ' + args.join(' '))
        };
        
        try {
          const func = new Function('console', code);
          func(mockConsole);
          setOutput(logs.join('\n') || 'Code executed successfully')
        } catch (e) {
          setOutput('Error: ' + e.message);
        }
      }
      else if (lesson.category.toLowerCase() === 'react') {
        if (!babelLoaded) {
          setOutput('Loading Babel compiler... Please try again in a moment.');
          return;
        }

        try {
          // Transpile JSX to JS
          const transpiledCode = window.Babel.transform(code, {
            presets: ['react']
          }).code;

          // Create a React component and render it
          const logs = [];
          const mockConsole = {
            log: (...args) => logs.push(args.join(' '))
          };

          const html = `
            <!DOCTYPE html>
            <html>
            <head>
              <script src="https://unpkg.com/react/umd/react.development.js"></script>
              <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            </head>
            <body>
              <div id="root"></div>
              <script type="text/babel">
                ${transpiledCode}
                ReactDOM.render(<App />, document.getElementById('root'));
              </script>
            </body>
            </html>
          `;
          setOutput(html);
        } catch (e) {
          setOutput('React Error: ' + e.message);
        }
      }
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  const resetCode = () => {
    setCode(lesson.code || '');
    setOutput('');
  };

  const getLanguage = () => {
    switch(lesson.category.toLowerCase()) {
      case 'html': return languages.html;
      case 'css': return languages.css;
      case 'javascript': return languages.javascript;
      case 'react': return languages.jsx;
      default: return languages.javascript;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl w-full max-w-5xl h-[80vh] flex flex-col`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
            {lesson.title} Editor
          </h2>
          <div className="flex space-x-2">
            <button onClick={resetCode} className={`flex items-center px-3 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <RotateCcw size={16} className="mr-1" /> Reset
            </button>
            <button onClick={runCode} className="flex items-center px-3 py-1 bg-blue-600 text-white rounded">
              <Play size={16} className="mr-1" /> Run
            </button>
            <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-600'}`}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Editor and Output */}
        <div className="flex-1 flex overflow-hidden">
          {/* Editor */}
          <div className="w-1/2 flex flex-col border-r">
            <div className={`p-2 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
              {lesson.category} Editor
            </div>
            <div className="flex-1 overflow-auto">
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={code => highlight(code, getLanguage(), lesson.category.toLowerCase())}
                padding={10}
                style={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: 14,
                  minHeight: '100%',
                  backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                  color: darkMode ? '#d4d4d4' : '#333333'
                }}
              />
            </div>
          </div>

          {/* Output */}
          <div className="w-1/2 flex flex-col">
            <div className={`p-2 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
              Output
            </div>
            <div className="flex-1 overflow-auto">
              {['html', 'css', 'react'].includes(lesson.category.toLowerCase()) ? (
                <iframe
                  srcDoc={output || '<p>Run code to see output</p>'}
                  className="w-full h-full border-0"
                  title="output-preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <pre className={`p-4 font-mono text-sm whitespace-pre-wrap ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'}`}>
                  {output || 'Click "Run" to see the output'}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorModal;