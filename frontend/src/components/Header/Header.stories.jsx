
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Este é o cabeçalho da aplicação Cidade Conectada, que inclui a logo, barra de pesquisa, notificações e informações do usuário.'
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
