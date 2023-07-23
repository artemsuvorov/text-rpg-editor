import {
  DockviewReact,
  DockviewReadyEvent,
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanel,
} from 'dockview';

const components: PanelCollection<IDockviewPanelProps> = {
  default: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return (
      <div className="p-3">
        Hello World!
      </div>
    );
  },
  codeEditor: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return (
      <div className="p-3 w-100 h-100"> 
        <textarea className="w-100 h-100" 
          style={{ fontFamily: 'consolas', fontSize: '18px' }}>
          {
            '# Code Editor\n' +
            '# Enter your Code here!\n\n' +
            'Start Scene\n' +
              'Message Hello, World!\n' +
            'End Scene\n'
          }
        </textarea>
      </div>
    );
  }
};

function onReady(event: DockviewReadyEvent) {
  const panel1 : IDockviewPanel = event.api.addPanel({
    id: 'panel1',
    title: 'Project Explorer',
    component: 'default',
  });
  const panel2 : IDockviewPanel = event.api.addPanel({
    id: 'panel2',
    title: 'Code Editor',
    component: 'codeEditor',
    position: { referencePanel: 'panel1', direction: 'right' },
  });
  panel1.api.setSize({ width: 350 });
};

function Editor() {
  return (
    <DockviewReact
      components={components}
      onReady={onReady}
    />
  );
};

export default Editor;