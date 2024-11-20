import React, { useState, useEffect } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';

const App: React.FC = () => {
  const [schema, setSchema] = useState({
    formTitle: 'Example Form',
    formDescription: 'Edit the JSON to generate this form',
    fields: [],
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Load dark mode preference from localStorage when the component mounts
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setIsDarkMode(storedMode === 'true');
    }
  }, []);

  // Apply dark mode to the body and save preference to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col md:flex-row ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 bg-blue-500 text-white rounded fixed top-4 right-4"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="w-full md:w-1/2 p-4">
        <JSONEditor
          schema={schema}
          onChange={(updatedSchema) => setSchema(updatedSchema)}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;
