import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/38473461?s=460&u=fff1427e55c79305b0b4dddbc2f621c8c7b841ad&v=4" alt="bruno"/>
      <div>
        <strong>Bruno Carvalho</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br /> <br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das
      pessoas através de experiências. Mais de 200.000 pessoas já passaram por
      uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp-icon"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;