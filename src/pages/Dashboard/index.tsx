import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Githib Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44790828?s=460&v=4"
            alt="Eu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              et.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44790828?s=460&v=4"
            alt="Eu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              et.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44790828?s=460&v=4"
            alt="Eu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              et.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
