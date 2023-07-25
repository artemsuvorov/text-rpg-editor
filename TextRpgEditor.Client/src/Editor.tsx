import {
  DockviewReact,
  DockviewReadyEvent,
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanel,
} from 'dockview';

import CodeEditor from './Panels/CodeEditor';

const components: PanelCollection<IDockviewPanelProps> = {
  default: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return (
      <div className="p-3 w-100 h-100 bg-dark">
        <ul>
          <li>Scene1</li>
          <li>Scene2</li>
        </ul>
      </div>
    );
  },
  codeEditor: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return <CodeEditor />;
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