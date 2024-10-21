import ResolvedComplaints from './ResolvedComplaints';

export default {
  title: 'Components/ResolvedComplaints',
  component: ResolvedComplaints,
  parameters: {
    docs: {
      description: {
        component: 'Este componente exibe informações sobre o responsável por gerenciar reclamações resolvidas.',
      },
    },
  },
};

const Template = (args) => <ResolvedComplaints {...args} />;

export const Default = Template.bind({});
Default.args = {};
