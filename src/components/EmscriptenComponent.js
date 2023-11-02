import React, { useEffect } from 'react';

const EmscriptenComponent = () => {
  useEffect(() => {
    const statusElement = document.getElementById('status');
    const progressElement = document.getElementById('progress');
    const spinnerElement = document.getElementById('spinner');

    const Module = {
      // ... (same Module object as in the provided HTML code)
    };

    Module.setStatus('Downloading...');

    window.onerror = (event) => {
      Module.setStatus('Exception thrown, see JavaScript console');
      spinnerElement.style.display = 'none';
      Module.setStatus = (text) => {
        if (text) console.error('[post-exception status] ' + text);
      };
    };

    const script = document.createElement('script');
    script.src = 'hello.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up if needed when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="spinner" id='spinner'></div>
      <div className="emscripten" id="status">Downloading...</div>
      <div className="emscripten">
        <progress value="0" max="100" id="progress" hidden={true}></progress>
      </div>
      <div className="emscripten_border">
        <canvas className="emscripten" id="canvas" onContextMenu={(e) => e.preventDefault()} tabIndex={-1}></canvas>
      </div>
      <textarea id="output" rows="8"></textarea>
    </div>
  );
};

export default EmscriptenComponent;
