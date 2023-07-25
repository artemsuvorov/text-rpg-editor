import './CodeEditor.css';

const SAMPLE_CODE: string = 
  '# Code Editor\n' +
  '# Enter your Code here!\n\n' +
  'Start Scene\n' +
  '  Message Hello, World!\n' +
  'End Scene\n';

function CodeEditor() {
  return (
    <div className="w-100 h-100"> 
      <textarea id="code-editor" className="bg-dark w-100 h-100">
        { SAMPLE_CODE }
      </textarea>
    </div>  
  );
}

export default CodeEditor;