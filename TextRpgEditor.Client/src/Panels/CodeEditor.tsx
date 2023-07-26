import { useRef, useState } from 'react';
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
          <li className="list-group-item border-0 p-0" key={index}>{index++}</li>)
      }
    </ul>
  );
}

function CodeEditor() {
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>(SAMPLE_CODE);

  const onTextAreaScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    if (lineNumbersRef.current == null)
      return;

    const target = event.target as HTMLElement;
    lineNumbersRef.current.scrollTop = target.scrollTop;
    console.log(lineNumbersRef.current.scrollTop, target.scrollTop);
  }

  return (
    <div className="w-100 h-100 container d-flex flex-column">
      <div id="code-editor-container" className="row h-100">
        <div className="vertical-line-numbers col-2 p-2" ref={lineNumbersRef}>
          { renderLineNumbers(text) }
        </div>
        <div className="col d-flex flex-column">
          <textarea id="code-editor" className="row bg-dark flex-grow-1 p-2"
            ref={textAreaRef} value={text} 
            onChange={(event) => setText(event.target.value)} 
            onScroll={onTextAreaScroll} />
        </div>
      </div>
      <div className="row py-1 px-2">
        <ul className="list-inline m-0 d-flex justify-content-between">
          <li className="list-inline-item">Character count: {text.length}</li>
          <li className="list-inline-item">Line count: {text.split('\n').length}</li>
        </ul>
      </div>
    </div>
  );
}

export default CodeEditor;