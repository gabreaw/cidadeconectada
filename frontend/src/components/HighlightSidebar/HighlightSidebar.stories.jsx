import HighlightSidebar from './HighlightSidebar';

export default {
  title: 'Components/HighlightSidebar',
  component: HighlightSidebar,
  parameters: {
    docs: {
      description: {
        component: 'Este componente exibe uma lista de reclamações resolvidas, com detalhes sobre curtidas e comentários.'
      },
    },
  },
};

const Template = (args) => <HighlightSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
