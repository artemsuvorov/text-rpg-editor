import {
  DockviewReact,
  DockviewReadyEvent,
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanel,
} from 'dockview';

import CodeEditor from './Panels/CodeEditor';
import Explorer from './Panels/Explorer';

const components: PanelCollection<IDockviewPanelProps> = {
  projectExplorer: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return <Explorer />;
  },
  codeEditor: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return <CodeEditor />;
  }
};

function onReady(event: DockviewReadyEvent) {
  const panel1 : IDockviewPanel = event.api.addPanel({
    id: 'panel1',
    title: 'Project Explorer',
    component: 'projectExplorer',
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