import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: 'Este componente exibe a barra lateral da aplicação, com links para navegação, notificações, e uma seção de notícias.'
      },
    },
  },
  decorators: [(Story) => <BrowserRouter><Story/></BrowserRouter>],
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
