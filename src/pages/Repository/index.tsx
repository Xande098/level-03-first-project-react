import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/61258520?v=4"
            alt="Alexandre"
          />
          <div>
            <strong>Xande098/clone-discord</strong>
            <p>Partially recreating the Discord interface</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdsdadafafa">
          <div>
            <strong>aaaaaadada</strong>
            <p>gdsfsfsfsf</p>
          </div>

          <FiChevronsRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
