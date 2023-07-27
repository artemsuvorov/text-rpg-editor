import { useRef, useState } from 'react';
import './CodeEditor.css';

const SAMPLE_CODE: string = 
  '# Code Editor\n' +
  '# Enter your Code here!\n\n' +
  'Start Scene\n' +
  '  Message Hello, World!\n' +
  '  Message Hello, World!\n' +
  '  Message Hello, World!\n' +
  '  Message Hello, World!\n' +
  '  Message Hello, World!\n' +
  'End Scene';

function renderLineNumbers(text: string) {
  var index = 1;
  return (
    <ul className="text-muted text-end px-3">
      {
        text.split('\n').map(line =>
          <li className="list-group-item" key={index}>{index++}</li>)
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

  // TODO: fix horizontal and vertical scroll bars
  return (
    <div className="w-100 h-100 container d-flex flex-column">
      <div className="row bg-dark flex-grow-1 vertical-auto-scroll">
        {/* TODO: resize line numbers bar when number count is large */}
        <div className="vertical-line-numbers p-2" ref={lineNumbersRef}>
          { renderLineNumbers(text) }
        </div>
        <div className="col d-flex flex-row flex-column resize-horizontal">
          <textarea id="code-editor" 
            className="row bg-dark flex-grow-1 pt-2 px-2"
            spellCheck="false" autoCorrect="off" autoCapitalize="none" wrap="off"
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
