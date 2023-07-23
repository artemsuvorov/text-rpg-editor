import {
  DockviewReact,
  DockviewReadyEvent,
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanelHeaderProps,
  IDockviewPanel,
} from 'dockview';

const components: PanelCollection<IDockviewPanelProps> = {
  default: (props: IDockviewPanelProps<{ someProps: string }>) => {
    return <div>{props.params.someProps}</div>;
  },
};

const headers: PanelCollection<IDockviewPanelHeaderProps> = {
  customTab: (props: IDockviewPanelHeaderProps) => {
    return (
      <div>
        <span>{props.api.title}</span>
        <span onClick={() => props.api.close()}>{'[x]'}</span>
      </div>
    );
  },
};

function Editor() {
  const onReady = (event: DockviewReadyEvent) => {
    const panel1 : IDockviewPanel = event.api.addPanel({
      id: 'panel1',
      component: 'default',
      params: {
        title: 'Project Explorer',
        someProps: 'Hello',
      },
    });
    const panel2 : IDockviewPanel = event.api.addPanel({
      id: 'panel2',
      component: 'default',
      params: {
        title: 'Code Editor',
        someProps: 'World',
      },
      position: { referencePanel: 'panel1', direction: 'right' },
    });
    panel1.api.setSize({
      width: 350,
    });
  };

  return (
    <DockviewReact
      components={components}
      tabComponents={headers} // optional headers renderer
      onReady={onReady}
    />
  );
};

export default Editor;