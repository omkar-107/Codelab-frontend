import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = () => {
  const [code, setCode] = useState('// Type your code here');
  const [theme, setTheme] = useState('vs-dark');
  const [language, setLanguage] = useState('javascript');

  const handleEditorChange = (newCode) => {
    setCode(newCode);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: 14,
  };

  return (
    <div className="flex flex-col space-y-2 ">
       <div><div className='flex gap-4 align-center justify-center'>
       <div className="flex space-x-2  items-center">
        <label htmlFor="themeSelect">Select Theme:</label>
        <select
          id="themeSelect"
          onChange={handleThemeChange}
          value={theme}
          className="p-2 border rounded"
        >
          <option value="vs-dark">Dark</option>
          <option value="vs-light">Light</option>
        </select>
      </div>
      <div className="flex space-x-2 items-center">
        <label htmlFor="languageSelect">Select Language:</label>
        <select
          id="languageSelect"
          onChange={handleLanguageChange}
          value={language}
          className="p-2 border rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          
        </select>
      </div>
       </div>
     </div>
    <div className='flex justify-center '>
    <MonacoEditor
        width="800"
        height="1000"
        language={language}
        theme={theme}
        value={code}
        options={editorOptions}
        onChange={handleEditorChange}
        className="rounded border justify-center"
      />
    
    </div>
    </div>
  );
};

export default CodeEditor;
