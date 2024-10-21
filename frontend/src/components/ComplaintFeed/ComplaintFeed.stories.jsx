import ComplaintFeed from "./ComplaintFeed";

export default {
  title: "Components/ComplaintFeed",
  component: ComplaintFeed,
  parameters: {
    docs: {
      description: {
        component:
          "Este componente exibe o feed de uma reclamação urbana, com curtidas, comentários e a possibilidade de adicionar um novo comentário.",
      },
    },
  },
};

const Template = (args) => <ComplaintFeed {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Defina os valores padrão das propriedades aqui
  title: "Buraco na Rua",
  location: "Bairro Efapi",
  likes: 15,
  comments: 6,
};
