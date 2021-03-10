import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import './styles.css';

function Home(): JSX.Element {
  return(
    <div className="container">
      <div className="menu">
        <button className="item">
          <FiChevronRight style={{color: "#fff"}}/>
          <span>Nova simulação</span>
        </button>
        <button className="item">
          <FiChevronRight style={{color: "#fff"}}/>
          <span>Carregar simulação</span>
        </button>
        <button className="item">
          <FiChevronRight style={{color: "#fff"}}/>
          <span>Configurações</span>
        </button>
        <button className="item">
          <FiChevronRight style={{color: "#fff"}}/>
          <span>Sair</span>
        </button>
      </div>
    </div>
  )
}

export default Home;