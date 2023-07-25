import { useState } from 'react';
import './CodeEditor.css';

const SAMPLE_CODE: string = 
  '# Code Editor\n' +
  '# Enter your Code here!\n\n' +
  'Start Scene\n' +
  '  Message Hello, World!\n' +
  'End Scene\n';

function renderLineNumbers(text: string) {
  var index = 1;
  return (
    <ul>
      {
        text.split('\n').map(line =>
          <li className="list-group-item border-0 p-0">{index++}</li>)
      }
    </ul>
  );
}

function CodeEditor() {
  const [text, setText] = useState(SAMPLE_CODE);

  return (
    <div className="w-100 h-100 container">
      <div className="row h-100">
        <div className="vertical-line-numbers col-1 d-flex p-2">
          { renderLineNumbers(text) }
        </div>
        <div className="col h-100 d-flex flex-column">
          <textarea id="code-editor" className="row flex-grow-1 bg-dark h-100 p-2"
            value={text} onChange={(e) => setText(e.target.value)} />
          <div className="row py-1 px-2">
            <ul className="list-inline m-0 d-flex justify-content-between">
              <li className="list-inline-item">Character count: {text.length}</li>
              <li className="list-inline-item">Line count: {text.split('\n').length}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;