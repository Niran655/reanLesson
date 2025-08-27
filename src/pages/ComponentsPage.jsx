import React, { useState } from 'react';
import { Code, Copy, Check, Palette, Layout, Calendar, Grid, User, Donut as ButtonIcon } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow";
// import { prism } from "react-syntax-highlighter/dist/esm/styles/prism/prism";

const ComponentsPage = ({ darkMode }) => {
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const components = [
    {
      id: 'button',
      name: 'ប៊ូតុង (Buttons)',
      icon: <ButtonIcon className="w-6 h-6" />,
      description: 'ប៊ូតុងផ្សេងៗសម្រាប់ការធ្វើសកម្មភាព',
      code: `<!-- Primary Button -->
<button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  ប៊ូតុងមេ
</button>

<!-- Secondary Button -->
<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
  ប៊ូតុងរង
</button>

<!-- Outline Button -->
<button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors">
  ប៊ូតុងស៊ុម
</button>

<!-- Large Button -->
<button class="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
  ប៊ូតុងធំ
</button>`,
      preview: (
        <div className="space-y-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            ប៊ូតុងមេ
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors ml-2">
            ប៊ូតុងរង
          </button>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors ml-2">
            ប៊ូតុងស៊ុម
          </button>
          <div className="mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
              ប៊ូតុងធំ
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'avatar',
      name: 'រូបតំណាង (Avatar)',
      icon: <User className="w-6 h-6" />,
      description: 'រូបតំណាងអ្នកប្រើប្រាស់ក្នុងទំហំផ្សេងៗ',
      code: `<!-- Small Avatar -->
<div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
  ស
</div>

<!-- Medium Avatar -->
<div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-medium">
  ម
</div>

<!-- Large Avatar -->
<div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-medium">
  ធ
</div>

<!-- Avatar with Image -->
<img class="w-12 h-12 rounded-full object-cover" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Avatar">

<!-- Avatar Group -->
<div class="flex -space-x-2">
  <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-medium border-2 border-white">ក</div>
  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium border-2 border-white">ខ</div>
  <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium border-2 border-white">គ</div>
</div>`,
      preview: (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              ស
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-medium">
              ម
            </div>
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-medium">
              ធ
            </div>
            <img className="w-12 h-12 rounded-full object-cover" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Avatar" />
          </div>
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-medium border-2 border-white">ក</div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium border-2 border-white">ខ</div>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium border-2 border-white">គ</div>
          </div>
        </div>
      )
    },
    {
      id: 'card',
      name: 'កាត (Cards)',
      icon: <Layout className="w-6 h-6" />,
      description: 'កាតសម្រាប់បង្ហាញមាតិកា',
      code: `<!-- Simple Card -->
<div class="bg-white rounded-lg shadow-md p-6 max-w-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">ចំណងជើងកាត</h3>
  <p class="text-gray-600 mb-4">នេះជាការពិពណ៌នាអំពីកាតនេះ។ វាអាចមានមាតិកាច្រើន។</p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
    អានបន្ថែម
  </button>
</div>

<!-- Card with Image -->
<div class="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
  <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Card image">
  <div class="p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-2">កាតមានរូបភាព</h3>
    <p class="text-gray-600 mb-4">កាតនេះមានរូបភាពនៅផ្នែកខាងលើ។</p>
    <div class="flex space-x-2">
      <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
        ចូលចិត្ត
      </button>
      <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors">
        ចែករំលែក
      </button>
    </div>
  </div>
</div>`,
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>ចំណងជើងកាត</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>នេះជាការពិពណ៌នាអំពីកាតនេះ។ វាអាចមានមាតិកាច្រើន។</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              អានបន្ថែម
            </button>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
            <img className="w-full h-48 object-cover" src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Card image" />
            <div className="p-6">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>កាតមានរូបភាព</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>កាតនេះមានរូបភាពនៅផ្នែកខាងលើ។</p>
              <div className="flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
                  ចូលចិត្ត
                </button>
                <button className={`${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} px-3 py-1 rounded text-sm transition-colors`}>
                  ចែករំលែក
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'grid',
      name: 'ក្រឡាចត្រង្គ (Grid)',
      icon: <Grid className="w-6 h-6" />,
      description: 'ប្រព័ន្ធក្រឡាចត្រង្គសម្រាប់ការរៀបចំ',
      code: `<!-- 2 Column Grid -->
<div class="grid grid-cols-2 gap-4">
  <div class="bg-blue-100 p-4 rounded">ធាតុ 1</div>
  <div class="bg-green-100 p-4 rounded">ធាតុ 2</div>
  <div class="bg-yellow-100 p-4 rounded">ធាតុ 3</div>
  <div class="bg-red-100 p-4 rounded">ធាតុ 4</div>
</div>

<!-- 3 Column Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  <div class="bg-purple-100 p-6 rounded-lg text-center">
    <h3 class="font-semibold mb-2">កាតទី 1</h3>
    <p class="text-sm text-gray-600">មាតិកាកាតទី 1</p>
  </div>
  <div class="bg-indigo-100 p-6 rounded-lg text-center">
    <h3 class="font-semibold mb-2">កាតទី 2</h3>
    <p class="text-sm text-gray-600">មាតិកាកាតទី 2</p>
  </div>
  <div class="bg-pink-100 p-6 rounded-lg text-center">
    <h3 class="font-semibold mb-2">កាតទី 3</h3>
    <p class="text-sm text-gray-600">មាតិកាកាតទី 3</p>
  </div>
</div>

<!-- Grid with Different Sizes -->
<div class="grid grid-cols-4 gap-4 mt-8">
  <div class="col-span-2 bg-orange-100 p-4 rounded">ធំ (2 columns)</div>
  <div class="bg-teal-100 p-4 rounded">តូច</div>
  <div class="bg-cyan-100 p-4 rounded">តូច</div>
  <div class="bg-lime-100 p-4 rounded">តូច</div>
  <div class="col-span-3 bg-amber-100 p-4 rounded">ធំ (3 columns)</div>
</div>`,
      preview: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded text-center">ធាតុ 1</div>
            <div className="bg-green-100 p-4 rounded text-center">ធាតុ 2</div>
            <div className="bg-yellow-100 p-4 rounded text-center">ធាតុ 3</div>
            <div className="bg-red-100 p-4 rounded text-center">ធាតុ 4</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">កាតទី 1</h3>
              <p className="text-sm text-gray-600">មាតិកាកាតទី 1</p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">កាតទី 2</h3>
              <p className="text-sm text-gray-600">មាតិកាកាតទី 2</p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-2">កាតទី 3</h3>
              <p className="text-sm text-gray-600">មាតិកាកាតទី 3</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'header',
      name: 'ក្បាលទំព័រ (Header)',
      icon: <Layout className="w-6 h-6" />,
      description: 'ក្បាលទំព័រជាមួយនឹងការរៀបចំផ្សេងៗ',
      code: `<!-- Simple Header -->
<header class="bg-white shadow-sm border-b">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-blue-500 rounded"></div>
        <h1 class="text-xl font-bold text-gray-900">ឈ្មោះគេហទំព័រ</h1>
      </div>
      <nav class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-600 hover:text-gray-900">ទំព័រដើម</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">អំពីយើង</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">សេវាកម្ម</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">ទំនាក់ទំនង</a>
      </nav>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        ចូលប្រើ
      </button>
    </div>
  </div>
</header>

<!-- Header with Search -->
<header class="bg-gray-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center space-x-4">
        <h1 class="text-xl font-bold">Logo</h1>
        <div class="hidden md:block">
          <input type="text" placeholder="ស្វែងរក..." class="bg-gray-800 text-white px-4 py-2 rounded-lg w-64">
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="p-2 hover:bg-gray-800 rounded">🔔</button>
        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  </div>
</header>`,
      preview: (
        <div className="space-y-4">
          <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-sm border-b`}>
            <div className="max-w-full px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ឈ្មោះគេហទំព័រ</h1>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>ទំព័រដើម</a>
                  <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>អំពីយើង</a>
                  <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>សេវាកម្ម</a>
                </nav>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  ចូលប្រើ
                </button>
              </div>
            </div>
          </header>
          <header className="bg-gray-900 text-white">
            <div className="max-w-full px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-4">
                  <h1 className="text-xl font-bold">Logo</h1>
                  <div className="hidden md:block">
                    <input type="text" placeholder="ស្វែងរក..." className="bg-gray-800 text-white px-4 py-2 rounded-lg w-64" />
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-gray-800 rounded">🔔</button>
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Components
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
            ធាតុផ្សំ UI ដែលអាចប្រើប្រាស់បានភ្លាមៗ សម្រាប់បង្កើតគេហទំព័រទំនើប
          </p>
        </div>

        {/* Components Grid */}
        <div className="space-y-12">
          {components.map((component) => (
            <div key={component.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden`}>
              {/* Component Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400">
                      {component.icon}
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {component.name}
                      </h2>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {component.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(component.code, component.id)}
                    className={`flex items-center space-x-2 px-4 py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} rounded-lg transition-colors`}
                  >
                    {copiedCode === component.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>ចម្លងរួច</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>ចម្លងកូដ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Preview */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ការមើលជាមុន
                </h3>
                <div className={`p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg`}>
                  {component.preview}
                </div>
              </div>

              {/* Code */}
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Code className="w-5 h-5 mr-2" />
                  កូដ HTML + Tailwind CSS
                </h3>
                <div className="rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="html"
                    style={darkMode ? tomorrow : prism}
                    customStyle={{
                      margin: 0,
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}
                    showLineNumbers={true}
                  >
                    {component.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8 mt-12 text-center`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            ត្រូវការ Components បន្ថែម?
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            យើងនឹងបន្ថែម Components ថ្មីៗជាប្រចាំ។ សូមតាមដានការអាប់ដេត!
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            ស្នើសុំ Component ថ្មី
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;